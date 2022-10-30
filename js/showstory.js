AFRAME.registerComponent("showstory", {
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
