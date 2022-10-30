// 在 aframe 裡自定義功能要註冊 component， 註冊的名稱要寫小寫

AFRAME.registerComponent("linkthirdpage", {
  init: function () {
    this.el.setAttribute("class", "interactable");
  },
  events: {
    click: function (event) {
      let infolinksecond = document.getElementById("infolinksecond");
      infolinksecond.setAttribute("visible", true);
      if (infolinksecond.getAttribute("visible") === true) {
        location.href = "third.html";
        infolinksecond.setAttribute("class", "interactable");
      }
    },
  },
});
