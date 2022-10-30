// 在 aframe 裡自定義功能要註冊 component， 註冊的名稱要寫小寫
var isPlaying = false;
AFRAME.registerComponent("playsound", {
  init: function () {
    // 每次更新就自動掛上可以互動的 class 名稱
    this.el.setAttribute("class", "interactable");
  },
  events: {
    click: function (event) {
      let infosound = document.getElementById("infosound");
      infosound.setAttribute("visible", true);
      if (infosound.getAttribute("visible") === true) {
        this.el.components.sound.playSound();
        isPlaying = true;
        infosound.setAttribute("class", "interactable");
      }
    },
  },
});

AFRAME.registerComponent("stopsound", {
  events: {
    click: function (event) {
      let radio = document.getElementById("model_radio");

      let barsound01 = document.getElementById("barsoundinfo_01");
      let barsound02 = document.getElementById("barsoundinfo_02");
      let barsound03 = document.getElementById("barsoundinfo_03");
      let barsound04 = document.getElementById("barsoundinfo_04");
      let infosound = this.el;

      infosound.setAttribute("visible", false);
      infosound.setAttribute("class", "");

      if (
        infosound.getAttribute("visible") === false &&
        infosound.getAttribute("class") === ""
      ) {
        console.log("false get visible");
        radio.components.sound.stopSound();
        barsound01.components.sound.stopSound();
        barsound02.components.sound.stopSound();
        barsound03.components.sound.stopSound();
        barsound04.components.sound.stopSound();
      }
    },
  },
});
