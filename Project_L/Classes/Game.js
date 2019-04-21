
class Game {

  constructor() {
    this.rooms = [];
    this.rooms.push( new Room("Hall") );
    this.enterFirstRoom();
    this.rooms.push( new MinigameOne() );
    this.startFirstMinigame();
  }

  enterFirstRoom() {
    this.rooms[0].scene1();
    this.rooms[0].hideObjects();
    this.rooms[0].nextDialog();
    this.rooms[0].portalIsClicked();
  }

  startFirstMinigame() {
    // add elements
    // hide elements
    this.rooms[1].testPrint();
  }

}

// Start the application (run the main method (e.g game-constructor))
  new Game();


// const game = new Game();
// game.enterFirstRoom();
