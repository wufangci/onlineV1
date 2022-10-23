// 在 aframe 裡自定義功能要註冊 component， 註冊的名稱要寫小寫

AFRAME.registerComponent("showstory", {
  // 紀錄功能 掛載的物件用到的使用的屬性
  // <a-entity cursor="rayOrigin: mouse;"></a-entity> ： 這個 a-entity 用到的屬性就是 rayOrigin
  // showInfo="title : snow; content: snow;"
  // schema 設定的內容可以 直接傳進去物件中如上
  schema: {
    src: {
      type: "string",
    },
  },
  init: function () {
    // 每次更新就自動掛上可以互動的 class 名稱
    this.el.setAttribute("class", "interactable");
  },
  // 掛載註冊功能的事件
  events: {
    click: function (event) {
      let infostory = document.getElementById("infostory");
      let storyimg = document.getElementById("storyimg");
      storyimg.setAttribute("src", this.data.src);
      infostory.setAttribute("visible", true);
      infostory.setAttribute("class", "interactable");
    },
  },
});

AFRAME.registerComponent("clicktohidestory", {
  events: {
    click: function (event) {
      let infostory = this.el;
      infostory.setAttribute("visible", false);
      infostory.setAttribute("class", "");
    },
  },
});
