
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


  switchBackgroundImage(src) {
    document.body.style.background = `#f3f3f3 url(${src})`; //`#f3f3f3 url(${src}) no-repeat 100%`
    document.body.style.backgroundSize = "cover";
  }

}

// const room = new Room("Hall");
