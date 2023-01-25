export function addEventMap(node, handler_map, options) {
  for (const k in handler_map) {
    const handler = handler_map[k];
    handler && node.addEventListener(k, handler, options);
  }
}
export function removeEventMap(node, handler_map, options) {
  for (const k in handler_map) {
    const handler = handler_map[k];
    handler && node.removeEventListener(k, handler, options);
  }
}
