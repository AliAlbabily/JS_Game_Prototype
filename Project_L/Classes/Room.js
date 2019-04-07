
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
    });

    console.log("hideObjects() is working");
  }


  showHand() {
    $(document).ready(function() {
      $(".secretDoor").on("click", function(){

        //Show the actual hand
        $("#monsterHand").animate({left: "-100"}, 1800);

        room.switchBackgroundColor();
        room.switchBackgroundImage();

        room.yoralinaIsSpeaking();

      });
    });
    console.log("showHand() is working");
  }


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


  switchBackgroundImage() {
    document.body.style.background = "#f3f3f3 url('images/redsea_wyb51czt.gif') no-repeat 100%";
    document.body.style.backgroundSize = "cover";
  }


  yoralinaIsSpeaking() {
    // Accessing speak()-method from the Character.js class
    this.yoralina.speak(dialogs.dialog1);
  }


}

var dialogs = {
  dialog1: "Wait... I need to tell you something before you enter that place...",
  dialog2: "STOP RIGHT THERE!!",
  dialog3: "Hej Monika!!",
  dialog4: "Hello! My name is YoraLina and Im the headmaster of this place. So you should really know your place my dear..."
};

const room = new Room("Hall");
