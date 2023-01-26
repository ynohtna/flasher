import { addEventMap, removeEventMap } from '$lib/utils';

function touch_xy(node, { callback, clamped }) {
  let clamp = (clamped !== undefined) ? !!clamped : true;
  let fn = callback;
  let lastx, lasty, lastarg;

  // TODO: multiple pointer averaging.

  function update(target, x, y, cb_arg) {
    const w = target.clientWidth;
    const h = target.clientHeight;
    x = x / (w - 1);
    y = y / (h - 1);
    if (clamp) {
      x = (x < 0) ? 0 : ((x > 1) ? 1 : x);
      y = (y < 0) ? 0 : ((y > 1) ? 1 : y);
    }
    if (fn && ((x !== lastx) || (y !== lasty) || (cb_arg !== lastarg))) {
      fn(x, y, cb_arg);
      lastx = x;
      lasty = y;
      lastarg = cb_arg;
    }
  }

  const active_evmap = {
    pointermove(e) {
      e.preventDefault();
      e.stopPropagation();
      update(e.target, e.offsetX, e.offsetY, 'move');
    },
    pointerup(e) {
      e.preventDefault();
      e.stopPropagation();
      removeEventMap(node, active_evmap, true);
      update(e.target, e.offsetX, e.offsetY, 'up');
    },
    pointercancel(e) {
      e.stopPropagation();
      removeEventMap(node, active_evmap, true);
      node.releasePointerCapture(e.pointerId);
      update(e.target, e.offsetX, e.offsetY, 'cancel');
    }
  };

  const evmap = {
    pointerdown(e) {
      e.preventDefault();
      e.stopPropagation();
      // explicitly capture mouse movements out of bounds so operator
      // can mouse back into the region without loss of interaction.
      node.setPointerCapture(e.pointerId);
      update(e.target, e.offsetX, e.offsetY, 'down');
      addEventMap(node, active_evmap, true);
    },
  };
  addEventMap(node, evmap, true);

  return {
    update({ callback, clamped }) {
      fn = callback;
      clamp = (clamped !== undefined) ? !!clamped : true;
    },
    destroy() {
      removeEventMap(node, active_evmap, true);
      removeEventMap(node, evmap, true);
    }
  };
}

export default touch_xy;
