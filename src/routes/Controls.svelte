<script>
import touch_xy from '$lib/actions/touch_xy';

export let mutateOpts;
export let pw;
export let wave;

function onWaveShape() {
  mutateOpts(function(opts) {
    return {
      ...opts,
      waveshape: opts.waveshape+1,
    };
  });
}

let fader;
$: ox = (fader && Number.isFinite(pw)) ? (pw * fader.clientWidth) : 0;

function onColorDown() {
  mutateOpts(function(opts) {
    return {
      ...opts,
      color: opts.color-1,
    };
  });
}

function onColorUp() {
  mutateOpts(function(opts) {
    return {
      ...opts,
      color: opts.color+1,
    };
  });
}

const fader_opts = {
  callback(x) {
    mutateOpts(function(opts) {
      opts.pw = x;
      return opts;
    });
  },
  clamped: true,
};
</script>

<section class="controls">
  <div class="button"
       on:pointerdown|preventDefault={onWaveShape}>
    {#if wave === 0}
      <svg viewBox="-2 -2 14 14" preserveAspectRatio="none">
        <path fill="none" vector-effect="non-scaling-stroke"
              d="M0 10L{pw*10} 0L10 10" />
      </svg>
    {:else if wave === 1}
      <svg viewBox="-2 -2 14 14" preserveAspectRatio="none">
        <path fill="none" vector-effect="non-scaling-stroke"
              d="M0 10L0 0L{pw*10} 0L{pw*10} 10L10 10" />
      </svg>
    {/if}
  </div>

  <div class="fader"
       use:touch_xy={fader_opts}
       style:--ox="{ox}px"
       bind:this={fader}>
    <div class="pw" />
  </div>

  <div class="button"
       on:pointerdown|preventDefault={onColorDown} />
  <div class="button"
       on:pointerdown|preventDefault={onColorUp} />
</section>

<style>
.controls {
  height: 100%;
  display: grid;
  gap: 0 8px;
  grid-template-rows: 1fr;
  grid-template-columns: var(--s) 1fr var(--s) var(--s);
}
.button {
  margin: 3px;
  background-color: #666;
  overflow: hidden;
}
.fader {
  position: relative;
  background-color: #666;
}
.pw {
  position: absolute;
  left: -1px;
  top: 6px;
  bottom: 6px;
  width: 2px;
  background-color: #eee;
  transform: translateX(var(--ox));
}

svg {
  stroke: #eee;
  stroke-width: 2px;
}
</style>
