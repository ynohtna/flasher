/* https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/

  options is either an integer representing the animation's duration
  (in milliseconds), or an object containing one or more of:

    delay, direction, duration, easing, endDelay, fill,
    iterationStart, iterations, composite, iterationComposite.
*/

function web_anim(keyframes, options, first_time) {
  return function web_anim(el/*, trigger_var */) {
    let anim;

    function update() {
      if (!anim) {
        anim = new Animation(new KeyframeEffect(el, keyframes, options));
        anim.play();
      } else {
        anim.finish();
        anim.play();
      }
    }

    if (first_time) {
      update();
    }

    return {
      update
    };
  };
}

export default web_anim;
