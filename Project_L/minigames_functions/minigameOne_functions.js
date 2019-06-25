
function startFirstMinigame() {
  this.content = ROOMS.minigameOne;

  // Create content after 4 sec.
  setTimeout(function() {
    // Create
    creatObject(this.content.objectsList[0]);
    creatObject(this.content.objectsList[1]);
  }, 3000);

  // Initial functions
  initialFunctions_minigame1();
}


function initialFunctions_minigame1() {
  switchBackgroundImageWithInterval();
  startBattleBtnIsClicked();            // <--- Not working ?!?
}


function startBattleBtnIsClicked() {
  $(".startBattleBtn").on("click", function() {
    hideObject(".startBattleBtn");
    startBattle();
  });
}


function startBattle() {
  enemyAttacks();
}


function enemyAttacks() {
  console.log("The enemy strikes first!");
  $("#battleStatus").text("The enemy strikes first!");
}


function switchBackgroundImageWithInterval() {
  setTimeout(function() {
    room.switchBackgroundImage("images/F43kZP.gif");
  }, 3000);
}
