
class Game {

  constructor() {
    this.rooms = [];
    this.rooms.push( new Room("Hall") );
    this.enterFirstRoom();
    this.rooms.push( new Minigames() );
    // this.enterMinigameOne();
  }

  enterFirstRoom() {
    this.rooms[0].scene1();
    this.rooms[0].hideObjects();
    this.rooms[0].nextDialog();
    this.rooms[0].portalIsClicked();
  }

  // enterMinigameOne() {
  //   // add elements
  //
  //   // hide elements
  //
  // }

}

// Start the application (run the main method (e.g game-constructor))
  new Game();


// const game = new Game();
// game.enterFirstRoom();
