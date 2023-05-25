(function () {
  var pageWidth = 390; //设计图宽度
  var docEl = document.documentElement;
  var windowScale = function () {
    docEl.style.fontSize =
      docEl.getBoundingClientRect().width / pageWidth + "px";
  };
  windowScale();
  window.onresize = windowScale;
})();
