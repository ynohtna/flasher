const colours = ["#fff", "#f00", "#0f0", "#00f", "#f0f", "#ff0", "#0ff"];
const numWaves = 2;

class Flasher {
  constructor() {
    this.el = null;
    this.interval = null;
    this.lastTap = null;
    this.accum = 0.1;
    this.held = false;
    this.pw = 0.5;
    this.wave = 0;
    this.colourIndex = 0;
  }

  numWaves() {
    return numWaves;
  }

  accumulate(dt) {
    if (!this.interval) {
      return false;
    }
    let acc = this.accum + (dt / this.interval);
    if (acc > 1) {
      acc -= 1;
    }
    this.accum = acc;

    return true;
  }

  update() {
    let v;
    let ws = this.wave % numWaves;
    const pw = this.pw;
    const acc = this.accum;

    switch(ws) {
      case 0:
        v = (acc >= pw) ? 1-((acc-pw)/(1-pw)) : (acc / pw);
        break;

      case 1:
        v = (this.accum < this.pw) ? 1 : 0;
        break;

      case 2:
        v = (acc >= pw) ? 1-((acc-pw)/(1-pw)) : (acc / pw);
        v = v*v
        break;
    }

    this.el.style.opacity = v;
  }

  tapped(now) {
    if (this.lastTap) {
      this.interval = now - this.lastTap;
    }
    this.lastTap = now;
  }

  colourChange(delta) {
    this.colourIndex += delta;
    if (this.el) {
      this.el.style.backgroundColor = this.colour();
      this.el.style.opacity = this.accum;
    }
  }

  colour() {
    let i = this.colourIndex % colours.length;
    if (i < 0) {
      i += colours.length;
    }
    return colours[i];
  }

  bind(el) {
    if (!el) {
      return;
    }
    if (el.length >= 1) {
      this.el = el[0];
    } else {
      this.el = el;
    }
    if (this.el) {
      this.el.style.backgroundColor = this.colour();
      this.el.style.opacity = this.accum;
    }
  }
}

export default Flasher
