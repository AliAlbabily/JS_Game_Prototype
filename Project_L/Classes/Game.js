
class Game {

  constructor() {
    this.rooms = [];
    this.rooms.push( new Room("Hall") );
    this.enterFirstRoom();
  }

  enterFirstRoom() {
    this.rooms[0].scene1();
    this.rooms[0].hideObjects();
    this.rooms[0].portalIsClicked();
  }

}

// Start the application (run the main method (e.g game-constructor))
// new Game();


const game = new Game();
// game.enterFirstRoom();
