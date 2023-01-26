function calcIndex(e, main, mainRect, landscape) {
  let index = 0;
  let xx = landscape ? (e.clientX-mainRect.left) : (e.clientY-mainRect.top);
  const yy = landscape ? (e.clientY-mainRect.top) : (e.clientX-mainRect.left);
  const depth = landscape ? main.clientWidth : main.clientHeight;
  const halfdepth = depth / 2;
  if (xx > halfdepth) {
    index = 2;
    xx -= halfdepth;
  }
  const x01 = xx / halfdepth;
  const y01 = yy / (landscape ? main.clientHeight : main.clientWidth);
  if (x01 > (1 - y01)) {
    ++index;
  }

  return index;
}

export default calcIndex;
