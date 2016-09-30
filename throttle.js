/**
 * [throttle description]
 * @param  {Function} fn    [description]
 * @param  {[type]}   delay [description]
 * @return {[type]}         [description]
 */
var throttle = function (fn, delay) {
  var curr = +new Date(),
      last_exec = 0,
      diff,
      context,
      args,
      exec = function () {
        last_exec = curr;
        fn.apply(context, args);
      };

  return function () {
    curr= +new Date();
    context = this,
    args = arguments,
    diff = curr - last_exec - delay;
    if (diff >= 0) {
      exec();
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
  $(window).scroll(throttle(log, 250));
}
test();