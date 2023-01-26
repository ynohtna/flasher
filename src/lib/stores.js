import { browser } from '$app/environment';
import { readable, writable } from 'svelte/store';

function mediaQuery(query, default_value) {
  if (!browser) {
    return readable(default_value);
  }

  const matcher = window.matchMedia(query);
  const initial = matcher.matches;
  const store = writable(initial, (set) => {
    store.matches = initial;
    store.recalc = function() {
      set(matcher.matches);
      store.matches = matcher.matches;
    };

    const onChange = (e) => {
      console.info(query, e);
      store.recalc();
    };

    matcher.addEventListener("change", onChange);
    return () => matcher.removeEventListener("change", onChange);
  });

  return store;
}

export {
  mediaQuery
};
