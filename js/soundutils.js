// 當點擊網頁的時候自動播放聲音
AFRAME.registerComponent("firstsound", {
  init: function () {
    let sound = this.el.components.sound;
    let soundloaded = false;
    this.el.addEventListener("sound-loaded", function () {
      soundloaded = true;
    });
    window.addEventListener("click", triggerSound, false);
    window.addEventListener("touchstart", triggerSound, false);

    function triggerSound() {
      if (sound && soundloaded) {
        sound.pauseSound();
        sound.playSound();
        window.removeEventListener("click", triggerSound, false);
        window.removeEventListener("touchstart", triggerSound, false);
      }
    }
  },
});
