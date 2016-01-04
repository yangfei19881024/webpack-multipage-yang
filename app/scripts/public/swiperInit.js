import Swipe from "Swipe";

export default function swiperInit(
  {
    speed = 400,
    auto = 3000,
    continuous = true
  }={}
){

  window.mySwipe = new Swipe(document.getElementById('slider'), {
    startSlide: 1,
    speed: speed,
    auto: auto,
    continuous: continuous,
    disableScroll: false,
    stopPropagation: false,
    callback: function(index, elem) {},
    transitionEnd: function(index, elem) {}
  });
}
