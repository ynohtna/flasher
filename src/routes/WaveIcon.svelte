<script>
export let wave;
export let pw;
</script>

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
