
class MinigameOne extends Minigames {

  constructor() {
    super();
  }


  showObjects() {
    $(document).ready(function() {
      var minigameOneDisplay = '<div id="DisplayM1" class="display"></div>';

      $("body").append(minigameOneDisplay);
    });
  }


  // hideObjects() {
  //   $(document).ready(function() {
  //
  //   });
  // }


  testPrint() {
    super.printSomething();
  }

}

const minigameone = new MinigameOne();
