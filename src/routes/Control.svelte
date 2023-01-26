<script>
import touch_xy from '$lib/actions/touch_xy';

export let flasher;
export let landscape;

function onWaveShape() {
  flasher.wave = flasher.wave + 1;
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
  </div>

  <div class="fader"
       style:--th={`${pw * 100}%`}
       use:touch_xy={fader_opts}>
    <div class="thumb" />
  </div>

  <div class="button"
       on:pointerdown|preventDefault|stopPropagation={onColourDown} />
  <div class="button"
       on:pointerdown|preventDefault|stopPropagation={onColourUp} />
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
  left: var(--th, -10px);
  top: var(--i);
  bottom: var(--i);
  width: 2px;
}
.portrait .thumb {
  top: var(--th, -10px);
  left: var(--i);
  right: var(--i);
  height: 2px;
}
</style>
