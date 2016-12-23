(() => {

  "use strict";

  const KEYBOARD = {

    addListeners() {

      window.addEventListener("keydown", this.playSound);

    },

    removeClass(element) {

      element.addEventListener("transitionend", () => {
        element.classList.remove("playing");
      });

    },

    playSound(event) {

      // Use ES6 template strings to dynamically search for desired key and play the sound.
      let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
      let button = document.querySelector(`button[data-key="${event.keyCode}"]`);
      let notify = document.querySelector(`span[data-pressed]`);

      // Return if there is no audio for given keyCode
      if(!audio) {
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
