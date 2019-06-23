class Room {

  // name : String, the name of the room

  // Objects
  // example of Objects : [ {container: String, elements: [Strings]} ]
  // container is a CSS-Selector of the elements that we are going to append to
  // Elements is a list of Strings of HTML-Elements

  //dialogs : [Strings], where Strings are normal dialogs

  //characters : [Character],

  //initFunction : Function, this function will initilize the rooms

  constructor(name, objectsList, dialogs, characters, initFunction) {
    this.name = name;
    this.objectsList = objectsList;
    this.dialogs = dialogs;
    this.characters = characters;
    this.initFunction = initFunction;
  }

  // showAllObjects() {
  //   this.objectsList.forEach( function(object) {
  //     addToScreen(object);
  //   });
  //   console.log("showObjects() is done");
  // }

  // cssSelectors : [String], where String is a valid CSS selector
  // hideObjects(selectorsObject, effect) {
  //   selectorsObject.forEach(function(selector){
  //     $(selector).addClass("hidden");
  //   });
  //   hideFromScreen(effect);
  //   console.log("hideObjects() is working");
  // }


  playSoundEffect(src) {
    var audio = new Audio(src);
    audio.volume = 0.5;
    audio.preLoad = true;
    audio.play();
  }


  // Not used
  // showHand() {
  //   $("#monsterHand").animate({
  //     left: "-100"
  //   }, 1800);
  // }


  // Not used
  // switchBackgroundColor() {
  //   var scaryBackground = '<div id="scaryBackground"></div>';
  //   $("body").append(scaryBackground);
  //
  //   let i = 0;
  //   let counter = 0;
  //
  //   var playAnimation = setInterval(function() {
  //     var colorList = ["rgba(199, 13, 0, 0.7)", "rgba(0, 0, 0, 0)"];
  //     let scaryBackground = document.getElementById('scaryBackground');
  //
  //     scaryBackground.style.backgroundColor = colorList[i];
  //     i = (i + 1) % colorList.length;
  //
  //     counter++;
  //     console.log(counter);
  //
  //     if (counter == 30) {
  //       clearInterval(playAnimation);
  //       console.log("Counter has stopped!" + counter);
  //       scaryBackground.remove();
  //     }
  //   }, 50);
  // }


  // Not used
  // switchBackgroundImage() {
  //   document.body.style.background = "#f3f3f3 url('images/redsea_wyb51czt.gif') no-repeat 100%";
  //   document.body.style.backgroundSize = "cover";
  // }


  // nextRoomEffect() {
  //   $("#shodowing").fadeIn(3000).fadeOut(3000);
  //   room.playSoundEffect("Sounds/echo-whoosh 0.5.wav");
  //   room.removeMainDisplay();
  //
  //   // do stuff
  // }


  // removeMainDisplay() {
  //   $("#InnerDisplayHall")
  //     .delay(3000)
  //     .queue(function() {
  //       $(this).remove();
  //     });
  // }
  
}

// const room = new Room("Hall");
