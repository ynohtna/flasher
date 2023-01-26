<script>
import { onMount, tick } from 'svelte';
import { mediaQuery } from '$lib/stores';
import Flasher from './flasher';
import calcIndex from './calcIndex';
import Control from './Control.svelte';

const landscape$ = mediaQuery("(orientation: landscape)", true);
$: landscape = $landscape$;

const flashers = Array.from({ length: 4 }, () => new Flasher());

let rafid;
let lastFrame;

function frame(now) {
  rafid = null;

  if (lastFrame) {
    let dt = now - lastFrame;
    if (dt > 100) {
      dt = 100;
    }

    let held = 0;

    for (const flasher of flashers) {
      if (flasher.held) {
        ++held;
      } else {
        if (flasher.accumulate(dt)) {
          flasher.update();
        }
      }
    }

    if (held >= 4) {
      lastFrame = null;
      return;
    }
  }

  lastFrame = now;
  rafid = window.requestAnimationFrame(frame);
}

let main;
let mainRect;

function onTap(e) {
  const now = performance.now();
  if (!mainRect && main) {
    mainRect = main.getBoundingClientRect();
  }
  const index = calcIndex(e, main, mainRect, landscape);
  flashers[index].held = true;
  flashers[index].tapped(now);
}

function onUp(e) {
  if (!mainRect && main) {
    mainRect = main.getBoundingClientRect();
  }
  const index = calcIndex(e, main, mainRect, landscape);
  flashers[index].held = false;
  if (!rafid) {
    rafid = window.requestAnimationFrame(frame);
  }
}

const debounceResizeInterval = 200; // ms
let debounceTimer;

function handleResize() {
  landscape$.recalc();
  mainRect = main.getBoundingClientRect();
  debounceTimer = null;
}

function onResize() {
  if (debounceTimer) {
    return;
  }
  debounceTimer = setTimeout(handleResize, debounceResizeInterval);
}

onMount(async function() {
  window.addEventListener("resize", onResize);

  await tick();

  const klasses = "abcd";
  for (const i in klasses) {
    flashers[i].bind(main.getElementsByClassName(klasses[i]));
  }

  return function() {
    window.removeEventListener("resize", onResize);
    if (rafid) {
      window.cancelAnimationFrame(rafid);
    }
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }
  };
});
</script>

<main class:landscape
      class:portrait={!landscape}
      bind:this={main}
      on:pointerdown|preventDefault={onTap}
      on:pointerup|preventDefault={onUp}>
  <div class="upper">
    <div class="a back" />
    <div class="b lower" />
    <span class="controls up">
      <Control flasher={flashers[0]}
               {landscape} />
    </span>
    <span class="controls low">
      <Control flasher={flashers[1]}
               {landscape} />
    </span>
  </div>
  <div class="upper">
    <div class="c back" />
    <div class="d lower" />
    <span class="controls up">
      <Control flasher={flashers[2]}
               {landscape} />
    </span>
    <span class="controls low">
      <Control flasher={flashers[3]}
               {landscape} />
    </span>
  </div>
</main>

<style>
main {
  position: fixed;
  user-select: none;
  -webkit-user-select: none;

  top: env(safe-area-inset-top, 0);
  bottom: env(safe-area-inset-bottom, 0);
  left: env(safe-area-inset-left, 0);
  right: env(safe-area-inset-right, 0);
  overflow: hidden;

  display: flex;
  background-color: #000;
}

.landscape {
  flex-direction: row;
}
.portrait {
  flex-direction: column;
}

.upper {
  position: relative;
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.portrait .upper {
  flex-direction: row;
}
.landscape .upper {
  flex-direction: column;
}

.back {
  position: absolute;
  inset: 0;

  clip-path: polygon(100% 0, 0 0, 0 100%);
  -webkit-clip-path: polygon(100% 0, 0 0, 0 100%);
}
.lower {
  position: absolute;
  inset: 0;

  clip-path: polygon(100% 0, 0 100%, 100% 100%);
  -webkit-clip-path: polygon(100% 0, 0 100%, 100% 100%);
}

.controls {
  position: relative;
  --s: 50px;
  margin: 8px;
}
.portrait .controls {
  width: var(--s);
  height: 38vh;
}
.portrait .controls .low {
  align-self: flex-end;
}
.landscape .controls {
  height: var(--s);
  width: 38vw;
}
</style>
