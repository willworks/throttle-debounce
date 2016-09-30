# throttle-debounce
throttle&amp;debounce

js方法调用过程分为三个部分：请求、执行和响应。

某些情况下，如scorll和mousemove和resize等事件触发的callback方法，在运算量稍微大的情况下，会出现方法一直在被调用，而执行响应跟不上，导致页面性能下降甚至出现卡死

因此真对这个，目前的优化主要是有throttle[节流]和debounce[抖动消除]两种策略