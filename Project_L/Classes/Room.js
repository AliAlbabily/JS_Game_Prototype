
class Room {

  constructor( name ) {
    this.name = name;
    this.yoralina = new Character("Yoralina");
  }


  scene1() {
    $(document).ready(function() {
      var roomName = '<div id="Display1"></div>';
      var imgYoralina = '<img src="images/lyrica.png" id="lyrica" draggable="false">';
      var imgRedeyes = '<img src="images/268676961000211.png" id="RedEyes" draggable="false">';
      var secretPortal = '<img src="images/pic5abfb86bb2efe7_original_70089075.gif" class="secretDoor" draggable="false">';
      var secretDoorContainer = '<div class="secretDoorContainer tooltip"></div>';
      var textPortal = '<p class="textMouseCoordinates" id="pId">Enter the portal??</p>';
      var speakingBubble = '<div class="speakingBubbleWrapper"><p class="speakingBubbleText"></p></div>';
      var shodow = '<div id="shodowing"></div>';

      $("body").append(shodow);
      $("#InnerDisplayHall").append(roomName, imgYoralina, imgRedeyes, secretDoorContainer, speakingBubble);
      $(".secretDoorContainer").append(secretPortal, textPortal);
    });
    console.log("scene1() is working");
  }


  hideObjects() {
    $(document).ready(function() {
      var monsterHand = '<img src="images/MonsterHand.png" id="monsterHand" draggable="false">';
      $("body").append(monsterHand);

      $(".tooltip p").css("display", "none");

      $("#RedEyes").hide();
      $(".secretDoorContainer").hide();

      $(".speakingBubbleWrapper").addClass("hidden");

      $("#shodowing").addClass("hidden");
    });
    console.log("hideObjects() is working");
  }


  playSoundEffect(src) {
    var audio = new Audio(`${src}`);
    audio.play();
  }


  portalIsClicked() {
    $(document).ready(function() {
      let index = 0;

      var x = document.getElementsByClassName("speakingBubbleWrapper")[0];

      $(".secretDoor").on("click", function(){

        index++;

        if( index <= 1 ) {
          room.yoralinaIsSpeaking(dialogs.dialog1);
        }
        // When the speakingBubble is gone, you can enter next room
        if ( index >= 2 && window.getComputedStyle(x).display === "none" ) {
          room.nextRoomEffect();
          console.log("Enter Next Room!");
        }

        console.log(index);
      });
    });
    console.log("portalIsClicked() is working");
  }


  // Not used
  showHand() {
    $("#monsterHand").animate({left: "-100"}, 1800);
  }


  // Not used
  switchBackgroundColor() {
    var scaryBackground = '<div id="scaryBackground"></div>';
    $("body").append(scaryBackground);

    let i = 0;
    let counter = 0;

    var playAnimation = setInterval( function() {
        var colorList = ["rgba(199, 13, 0, 0.7)", "rgba(0, 0, 0, 0)"];
        let scaryBackground = document.getElementById('scaryBackground');

        scaryBackground.style.backgroundColor = colorList[i];
        i = (i + 1) % colorList.length;

        counter++;
        console.log(counter);

        if (counter == 30) {
          clearInterval(playAnimation);
          console.log("Counter has stopped!" + counter);
          scaryBackground.remove();
        }
      }, 50);
  }


  // Not used
  switchBackgroundImage() {
    document.body.style.background = "#f3f3f3 url('images/redsea_wyb51czt.gif') no-repeat 100%";
    document.body.style.backgroundSize = "cover";
  }


  nextRoomEffect() {
    // $("#shodowing").removeClass("hidden");
    $("#shodowing").fadeIn(3000).fadeOut(3000);
    room.playSoundEffect("Sounds/echo-whoosh 0.5.wav");
  }


  yoralinaIsSpeaking(text) {
    $(".speakingBubbleWrapper").removeClass("hidden");
    // Accessing speak()-method from the Character.js class
    this.yoralina.speak(text);
  }


  nextDialog() {
    $(document).ready(function() {
      let index = 1;

      $(".speakingBubbleWrapper").on("click", function(){
        if( index >= dialogsValues.length )  {
          $(".speakingBubbleWrapper").addClass("hidden");
        }
        else {
          room.playSoundEffect("Sounds/MenuSelectionClick.wav");

          room.yoralinaIsSpeaking(dialogsValues[index]);
          index++;
        }
      });
    });
    console.log("nextDialog() is working");
  }


}


var dialogs = {
  dialog1: "STOP RIGHT THERE!!",
  dialog2: "I need to tell you something before you enter that place...",
  dialog3: "My name is YoraLina and I'm the headmaster of this place, so you should really know your place my dear...",
  dialog4: "Now you may go ahead but don't forget to be careful out there..."
};

//Convert dialogs-object to array of values
const dialogsValues = Object.values(dialogs);

const room = new Room("Hall");
