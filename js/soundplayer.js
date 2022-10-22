// AFRAME.registerComponent("soundplayer", {
//   schema: {
//     src: {
//       type: "string",
//     },
//   },
//   init: function () {
//     this.eventfunc = this.playaudio.bind(this);
//     this.el.addEventListener("click", this.eventfunc);
//   },
//   playaudio: function () {

//     let audio = document.querySelector(this.data.src);
//     audio.play();
//     this.el.removeEventListener("click", this.eventfunc);
//   },
// });

AFRAME.registerComponent("soundplayer", {
  schema: {
    bool: { isPlaying: true },
  },
  init: function () {
    // this.eventfunc = this.playaudio.bind(this);
    // this.el.addEventListener("click", this.eventfunc);
    this.el.setAttribute("class", "interactable");
  },

  events: {
    click: function (event) {
      let audio = this.el.components.sound;
      console.log(audio);
      audio.playSound();
      var isPlaying = true;

      // console.log("isplaying", audio.isPlaying);

      let soundModel = document.getElementById("model_radio3");
      // console.log("model_radio3", soundModel);

      console.log(
        "setAttribute",
        soundModel.setAttribute("soundplayer", false)
      );
      console.log("getAttribute after", soundModel.getAttribute("soundplayer"));

      // if (soundModel.getAttribute("soundplayer")) {
      //   soundModel.setAttribute("soundplayer", false);
      //   audio.stopSound();
      //   isPlaying = false;
      // }

      // if (!isPlaying) {
      //   audio.playSound();
      // }

      // soundModel.setAttribute("soundplayer", true)
      //   ? soundModel.setAttribute("soundplayer", true)
      //   : soundModel.setAttribute("soundplayer", false);

      // 拿到物件用id
      // let infocard = document.getElementById("infocard");
      // let title = document.getElementById("img");

      // title.setAttribute("src", this.data.img);

      // // 如果是掛載在相同元件上的事件，可以用 this

      // !infocard.getAttribute("visible")
      //   ? infocard.setAttribute("visible", true)
      //   : infocard.setAttribute("visible", false);
    },
  },
});
