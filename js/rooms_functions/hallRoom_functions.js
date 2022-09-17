
function initialFunctions() {
  firstRoom.switchBackgroundImage("images/GloomyEvilBordercollie-small.gif", 0);
  enterPassword();
  secretDoorIsClicked();
  nextDialog();
}

function enterPassword() {
  $(".text-input").on("keyup", function (event) {
    event.preventDefault();

    if (event.keyCode === 13) { // on "Enter"
      let password = $(".text-input").val();

      if (password === "hello") {
        console.log("Door Unlocked");
        removeObject(".text-input-container");

        firstRoom.playSoundEffect(
          "Sounds/Panic-Mike_Koenig-717059030.mp3",
          0.5
        );

        /*Set glitchy background*/
        $("body").css({
          "background-image":
            "url(images/Static.gif.134cc0b6ab209a478edfaa338f3c3973.gif)",
          "background-repeat": "no-repeat",
          "background-size": "100%",
        });
        /*Set back normal background after 2.5sec */
        setTimeout(function () {
          $("body").css({
            "background-image": "url(images/GloomyEvilBordercollie-small.gif)",
            "background-repeat": "no-repeat",
            "background-size": "100%",
          });
        }, 2500);

        showSecretPortal();

        $(document).off("keyup");
      } 
      else {
        console.log("Try again!");
        firstRoom.playSoundEffect("Sounds/lose sound 2 - 1_0.wav", 1);
        $("#RedEyes").fadeIn(900).fadeOut(900);
      }
    }
  });
}

function showSecretPortal() {
  showObject(".secretDoor");
  $(".secretDoorContainer")
    .fadeIn({ queue: false, duration: 2000 })
    .animate({ top: "140px" }, 1200);
  $(".secretDoorContainer")
    .delay(500)
    .queue(function () {
      $(".secretDoorContainer").mouseenter(function () {
        $(this).css({ transition: "0.6s", filter: "sepia(0%)" });
      });
      $(".secretDoorContainer").mouseleave(function () {
        $(this).css({ transition: "0.6s", filter: "sepia(100%)" });
      });
    });
}

function nextRoomEffect() {
  $("#shadowing").fadeIn(3000).fadeOut(3000);
  firstRoom.playSoundEffect("Sounds/echo-whoosh 0.5.wav", 0.5);
  removeMainDisplay();
}

function removeMainDisplay() {
  $("#InnerDisplayHall")
    .delay(3000)
    .queue(function () {
      $(this).remove();
    });
}

function secretDoorIsClicked() {
  let index = 0;
  var x = document.getElementsByClassName("speakingBubbleWrapper")[0];

  $(".secretDoor").on("click", function () {
    index++;

    if (index <= 1) {
      showObject(".speakingBubbleWrapper");
      showObject(".speakingBubbleText");
      yoralina.speak(".speakingBubbleText", ROOMS.hallRoom.dialogs[0]);
    }

    // When the speakingBubble is gone, you will be able to enter next room
    if (index >= 2 && window.getComputedStyle(x).display === "none") {
      console.log("Next room entered!");
      nextRoomEffect();

      // Start next room (Minigame1) ...
      startFirstMinigame();
    }
    console.log(index);
  });
}

function nextDialog() {
  let index = 1;

  $(".speakingBubbleWrapper").on("click", function () {
    if (index >= ROOMS.hallRoom.dialogs.length) {
      hideObject(".speakingBubbleWrapper");
    } else {
      firstRoom.playSoundEffect("Sounds/MenuSelectionClick.wav", 0.5);
      yoralina.speak(".speakingBubbleText", ROOMS.hallRoom.dialogs[index]);
      index++;
    }
  });
}

const yoralina = ROOMS.hallRoom.characters[0];
const firstRoom = ROOMS.hallRoom;
