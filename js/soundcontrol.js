// 在 aframe 裡自定義功能要註冊 component， 註冊的名稱要寫小寫

AFRAME.registerComponent("playsound", {
  init: function () {
    var myEl = document.getElementById("#palybutton");
    console.log(myEl);
    this.el.addEventListener("click", function () {
      myEl.components.sound.playSound();
    });
  },
});

AFRAME.registerComponent("stopsound", {
  init: function () {
    var myElStop = document.getElementById("#stopbutton");
    this.el.addEventListener("click", function () {
      myElStop.components.sound.stopSound();
    });
  },
});
