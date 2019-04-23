
class Game {

  constructor() {
    this.rooms = [];
    this.rooms.push( new Room("Hall") );
    this.enterFirstRoom();
    this.rooms.push( new MinigameOne() );

    this.checkRooms();

    // this.startFirstMinigame();
  }

  enterFirstRoom() {
    this.rooms[0].showObjects();
    this.rooms[0].hideObjects();
    this.rooms[0].nextDialog();
    this.rooms[0].portalIsClicked();
    // this.startFirstMinigame();
  }

  // startFirstMinigame() {
  //   this.rooms[1].testPrint();
  // }

  checkRooms() {
    console.log(this.rooms);
  }

}

// Start the application (run the main method (e.g game-constructor))
  // First way
  new Game();

  //Second way
  // const game = new Game();
