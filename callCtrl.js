function callCtrl(){
  this.dom = $(window);
};

callCtrl.prototype.throttle = function(fn, delay) {
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

callCtrl.prototype.debounce = function(fn, delay) {
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

callCtrl.prototype.testcase = function() {
  console.log(this.dom.scrollTop());
};

callCtrl.prototype.initthrottle = function() {
  this.dom.scroll(this.throttle(this.testcase, 250, true));
};

callCtrl.prototype.initdebounce = function() {
  this.dom.scroll(this.debounce(this.testcase, 250, true));
};

var test = new callCtrl();
test.initthrottle();
test.initdebounce();





