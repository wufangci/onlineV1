// 在 aframe 裡自定義功能要註冊 component， 註冊的名稱要寫小寫

AFRAME.registerComponent("showinfo", {
  // 紀錄功能 掛載的物件用到的使用的屬性
  // <a-entity cursor="rayOrigin: mouse;"></a-entity> ： 這個 a-entity 用到的屬性就是 rayOrigin

  // showInfo="title : snow; content: snow;"
  // schema 設定的內容可以 直接傳進去物件中如上
  schema: {
    img: {
      type: "string",
      default: "./assets/images/car/carinfo.jpeg",
    },
  },

  // init 每次 component 初始掛載的時候 初始化
  init: function () {
    // 每次更新就自動掛上可以互動的 class 名稱
    this.el.setAttribute("class", "interactable");
    // Do something when component first attached.
    // alert("init");
  },
  // 掛載註冊功能的事件
  events: {
    click: function (event) {
      // alert("click");
      // 拿到物件用id
      let infocard = document.getElementById("infocard");
      let title = document.getElementById("img");

      title.setAttribute("src", this.data.img);

      // 如果是掛載在相同元件上的事件，可以用 this

      !infocard.getAttribute("visible")
        ? infocard.setAttribute("visible", true)
        : infocard.setAttribute("visible", false);
    },
  },

  update: function () {
    // alert("update");
    // Do something when component's data is updated.
  },

  remove: function () {
    // Do something the component or its entity is detached.
  },

  tick: function (time, timeDelta) {
    // Do something on every scene tick or frame.
  },
});

// AFRAME.registerComponent("click2hide", {
//   // 紀錄功能 掛載的物件用到的使用的屬性
//   // <a-entity cursor="rayOrigin: mouse;"></a-entity> ： 這個 a-entity 用到的屬性就是 rayOrigin

//   // showInfo="title : snow; content: snow;"
//   // schema 設定的內容可以 直接傳進去物件中如上
//   schema: {
//     infoimg: {
//       type: "string",
//       default: "./assets/images/bar/barinfo.jpeg",
//     },
//   },

//   // init 每次 component 初始掛載的時候 初始化
//   init: function () {
//     // 每次更新就自動掛上可以互動的 class 名稱
//     this.el.setAttribute("class", "interactable");
//     // Do something when component first attached.
//     // alert("init");
//   },
//   // 掛載註冊功能的事件
//   events: {
//     click: function (event) {
//       // alert("click");
//       // 拿到物件用id
//       let infocard = document.getElementById("infocard");
//       let title = document.getElementById("infoimg");

//       title.setAttribute("value", this.data.title);

//       // 如果是掛載在相同元件上的事件，可以用 this

//       !infocard.getAttribute("visible")
//         ? infocard.setAttribute("visible", true)
//         : infocard.setAttribute("visible", false);
//     },
//   },
// });
