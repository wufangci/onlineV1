// 在 aframe 裡自定義功能要註冊 component， 註冊的名稱要寫小寫

AFRAME.registerComponent("linktopage", {
  init: function () {
    this.el.setAttribute("class", "interactable");
  },
  events: {
    click: function (event) {
      let infolink = document.getElementById("infolink");
      infolink.setAttribute("visible", true);
      if (infolink.getAttribute("visible") === true) {
        location.href = "second.html";
        infolink.setAttribute("class", "interactable");
      }
    },
  },
});
