
class MinigameOne extends Minigames {

  constructor() {
    super();
  }


  showObjects() {
    $(document).ready(function() {
      var minigameOne = '<div id="DisplayM1"></div>';

        $("#InnerDisplayHall").append(minigameOne);
    });
  }


  hideObjects() {
    $(document).ready(function() {

    });
  }


  testPrint() {
    super.printSomething();
  }

}

const minigameone = new MinigameOne();
