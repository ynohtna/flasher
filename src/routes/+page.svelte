<script>
import Flasher from './Flasher.svelte';
</script>

<main>
  <div class="a">
    <Flasher />
    <Flasher pos="bot" />
  </div>
  <div class="b">
    <Flasher />
    <Flasher pos="bot" />
  </div>
</main>

<style>
main {
  position: absolute;
  top: env(safe-area-inset-top, 0);
  bottom: env(safe-area-inset-bottom, 0);
  left: env(safe-area-inset-left, 0);
  right: env(safe-area-inset-right, 0);
  overflow: hidden;

  display: flex;
  flex-direction: row;

  background-color: #000;
}

div {
  position: relative;
  flex-basis: 50%;
}
</style>
