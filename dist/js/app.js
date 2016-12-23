"use strict";

(function () {

      "use strict";

      var KEYBOARD = {
            addListeners: function addListeners() {

                  window.addEventListener("keydown", this.playSound);
            },
            removeClass: function removeClass(element) {

                  element.addEventListener("transitionend", function () {
                        element.classList.remove("playing");
                  });
            },
            playSound: function playSound(event) {

                  // Use ES6 template strings to dynamically search for desired key and play the sound.
                  var audio = document.querySelector("audio[data-key=\"" + event.keyCode + "\"]");
                  var button = document.querySelector("button[data-key=\"" + event.keyCode + "\"]");
                  var notify = document.querySelector("span[data-pressed]");

                  // Return if there is no audio for given keyCode
                  if (!audio) {
                        return;
                  }

                  notify.innerHTML = event.key.toUpperCase() + " which Key Code is " + event.keyCode;

                  button.classList.add("playing");

                  audio.currentTime = 0;
                  audio.play();

                  KEYBOARD.removeClass(button);
            }
      };

      KEYBOARD.addListeners();
})();