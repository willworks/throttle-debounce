/**
 * [debounce description]
 * @param  {Function} fn    [description]
 * @param  {[type]}   delay [description]
 * @return {[type]}         [description]
 */
var debounce = function (fn, delay) {
  var curr = +new Date(),
      last_exec = 0,
      diff,
      context,
      args,
      timer = null,
      exec = function () {
        last_exec = curr;
        fn.apply(context, args);
      };

  return function () {
    curr= +new Date();
    context = this,
    args = arguments,
    diff = curr - last_exec - delay;
    clearTimeout(timer);
    if (diff >= 0) {
      timer = setTimeout(exec, delay);
    } 
  }
};

/**
 * 测试
 * @return {[type]} [description]
 */
var test = function () {
  function log() {
    console.log($(window).scrollTop());
  };
  // $(window).scroll(log);
  $(window).scroll(debounce(log, 250, true));
}
test();