<script>
import { onMount } from 'svelte';
import Controls from './Controls.svelte';

export let pos = 'top';

// FIXME: keep last tap calculations in parent, determines uses x/y calcs to
// determine which flasher gets it's interval updated.
// Flashing happens on backgrounds, so pointer capture is not a problem.
let lastTap;
let interval;

const numWaveShapes = 2;
let acc = 0.0;
let opts = {
  waveshape: 0,
  pw: 0.5,
  color: 0,
};

const colors = ["#fff", "#f00", "#0f0", "#00f", "#f0f", "#ff0", "#0ff"];
function colorFor(v) {
  v %= colors.length;
  if (v < 0) {
    v += colors.length;
  }
  return colors[v];
}

let rafid;
let lastT;
let el;
function frame(now) {
  if (interval) {
    if (!lastT) {
      lastT = now;
    }
    const dt = now - lastT;

    acc += dt / interval;
    if (acc > 1) {
      acc -= 1;
    }

    let v;
    const ws = opts.waveshape % numWaveShapes;
    if (ws === 1) {
      v = (acc <= opts.pw) ? 1 : 0;
    } else {
      v = (acc >= opts.pw) ? 1-((acc-opts.pw)/(1-opts.pw)) : (acc / opts.pw);
    }

    el?.style.setProperty("--o", v);
  }

  lastT = now;
  rafid = window.requestAnimationFrame(frame);
}

function mutateOpts(fn) {
  opts = fn(opts);
  if (el) {
    el.style.setProperty("--bg", colorFor(opts.color));
  }
  if (opts.stop) {
    opts.stop = undefined;
    window.cancelAnimationFrame(rafid);
    rafid = null;
  }
}

// TODO: start timeout on pointerdown, (cancel it on pointerup).
// After timeout fires (250ms?) and if pointer has not moved too much (define),
// stop the accumulator and enter held mode. Relative movements made in this mode
// change the accumulator phase directly.

function tap(e) {
  if (e.srcElement != el) {
    return;
  }
  const x = e.offsetX / el.clientWidth;
  const y = 1 - (e.offsetY / el.clientHeight);
  console.log(x, y, x / y);
  if (x < y) {
    return;
  }

  e.preventDefault();

  const now = performance.now();
  if (lastTap) {
    interval = now - lastTap;
  }
  lastTap = now;
  //console.log(now, interval, pos);

  if (!rafid) {
    rafid = window.requestAnimationFrame(frame);
    rafid = null;
  }
}

onMount(function() {
  return function() {
    window.cancelAnimationFrame(rafid);
  }
});
</script>

<section class="flasher {pos}"
         on:pointerdown={tap}>
  <div class="filler"
       bind:this={el} />
  <div class="controls">
    <Controls {mutateOpts}
              pw={opts.pw}
              wave={opts.waveshape % numWaveShapes}
 />
  </div>
</section>

<style>
.flasher {
  position: absolute;
  inset: 0;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #000;
}

.flasher.bot {
  justify-content: flex-end;
  align-items: flex-end;
  clip-path: polygon(100% 0, 0 100%, 100% 100%);
  -webkit-clip-path: polygon(100% 0, 0 100%, 100% 100%);
}

.filler {
  position: absolute;
  inset: 0;
  background-color: var(--bg, #fff);
  opacity: var(--o, 0);
}

.controls {
  position: relative;
  width: 69%;
  --s: 48px;
  height: var(--s);
  opacity: 0.2;
  padding: 0 5px;
}
</style>
