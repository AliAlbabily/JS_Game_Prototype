
class Game {

  constructor() {
    // "ROOMS" is an object existing in "room.js"
    this.rooms = ROOMS;

    this.startRoom(shadowing , this.rooms.hallRoom);
  }

  // Starting up the game by runinng the first room.
  // Can also activate and deactivate other rooms.
  // roomsMaganger() {
  //   this.startFirstRoom(this.rooms.hallRoom, true);
  // }

  // effect (Argument 1) : is an object, ex. {container: "body", elements: ['<div></div>']}
  // room (Argument 2) : is a whole room class
  startRoom(effect, room) {
    // Create
    creatObject(room.objectsList[0]);
    creatObject(room.objectsList[1]);
    creatObject(effect);
    // Hide
    hideEffectObject(shadowing);
    hideObjects(room.objectsList);
    // Show
    showObject(room.objectsList[0].selectors[0]);
    // Initial functions
    initialFunctions();
  }

}

  // Start the application (run the main method (e.g game-constructor))
  new Game();
