<script>
import touch_xy from '$lib/actions/touch_xy';
import WaveIcon from './WaveIcon.svelte';

export let flasher;
export let landscape;

let wave = flasher.wave;
function onWaveShape() {
  wave = flasher.wave = (flasher.wave + 1) % flasher.numWaves();
}

function onColourDown() {
  flasher.colourChange(-1);
}
function onColourUp() {
  flasher.colourChange(+1);
}

let pw = flasher.pw;
const fader_opts = {
  callback(x) {
    pw = flasher.pw = x;
  },
  clamped: true,
};
</script>

<section class:landscape
         class:portrait={!landscape}>
  <div class="button"
       on:pointerdown|preventDefault|stopPropagation={onWaveShape}>
    <WaveIcon {wave} {pw} />
  </div>

  <div class="fader"
       style:--th={`${pw * 100}%`}
       use:touch_xy={fader_opts}>
    <div class="thumb" />
  </div>

  <div class="button"
       on:pointerdown|preventDefault|stopPropagation={onColourDown}>
    <svg viewBox="-4 -4 18 18" preserveAspectRatio="none">
      <path fill="none" vector-effect="non-scaling-stroke"
            d="M8 0L2 5L8 10" />
    </svg>
  </div>
  <div class="button"
       on:pointerdown|preventDefault|stopPropagation={onColourUp}>
    <svg viewBox="-4 -4 18 18" preserveAspectRatio="none">
      <path fill="none" vector-effect="non-scaling-stroke"
            d="M2 0L8 5L2 10" />
    </svg>
  </div>
</section>

<style>
section {
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: var(--b) 1fr var(--b) var(--b);
  opacity: 0.3;
  --b: calc(var(--s) - 8px);
  --bg: #666;
  --hi: #eee;
}
section.landscape {
  grid-template-rows: 1fr;
  grid-template-columns: var(--b) 1fr var(--b) var(--b);
}

section > * {
  margin: 4px;
}

section :global(svg) {
  stroke: #eee;
  stroke-width: 2px;
}

.button, .fader {
  pointer-events: auto;
  touch-action: pan-x, pan-y;
}

.button {
  display: grid;
  place-items: center;
  background-color: var(--bg);
}

.fader {
  position: relative;
  background-color: var(--bg);
  overflow: hidden;
}
.thumb {
  --i: 6px;
  position: absolute;
  background-color: var(--hi);
}
.landscape .thumb {
  left: calc(var(--th, -10px) - 1px);
  top: var(--i);
  bottom: var(--i);
  width: 2px;
}
.portrait .thumb {
  top: calc(var(--th, -10px) - 1px);
  left: var(--i);
  right: var(--i);
  height: 2px;
}
</style>
