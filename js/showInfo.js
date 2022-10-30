// 在 aframe 裡自定義功能要註冊 component， 註冊的名稱要寫小寫

AFRAME.registerComponent("showinfo", {
  schema: {
    src: {
      type: "string",
    },
  },
  init: function () {
    this.el.setAttribute("class", "interactable");
  },
  events: {
    click: function (event) {
      let infocard = document.getElementById("infocard");
      let title = document.getElementById("img");
      title.setAttribute("src", this.data.src);
      infocard.setAttribute("visible", true);
      infocard.setAttribute("class", "interactable");
    },
  },
});

AFRAME.registerComponent("clicktohide", {
  events: {
    click: function (event) {
      let infocard = this.el;
      infocard.setAttribute("visible", false);
      infocard.setAttribute("class", "");
    },
  },
});
