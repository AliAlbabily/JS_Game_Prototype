
function startFirstMinigame() {
  this.content = ROOMS.minigameOne;

  // Create content after 4 sec.
  setTimeout(function() {
    // Create
    creatObject(this.content.objectsList[0]);
    creatObject(this.content.objectsList[1]);
  }, 3000);

  // Initial functions
  initialFunctionsMinigameOne();
}


function initialFunctionsMinigameOne() {
  switchBackgroundImageWithInterval();
  startBattleBtnActivates();
}


function startBattleBtnActivates() {
  $(document).on("click", ".startBattleBtn", function() {
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

  enemyAttackingEffects();
}


function enemyAttackingEffects() {
  let counter = 0;

  setTimeout(function(){
    firstMinigame.playSoundEffect("Sounds/EnemyAttacks.wav", 1);
    $("#dabious").css({ "transition": "0.2s", "filter": "invert(100%)" });

    switchBackgroundColor();

    console.log("1.5sec passed by...");
  }, 1000); //1500

  let attacksEffect = setInterval(function() {;
    counter++;
    console.log(counter);

    if ( counter >= 14 ) {
      $("#dabious").css({ "transition": "0.2s", "filter": "invert(0%)" });
      clearInterval(attacksEffect);
    }
  }, 100);
}


function switchBackgroundColor() {
  var scaryBackground = '<div id="scaryBackground"></div>';
  $("body").append(scaryBackground);

  let i = 0;
  let counter = 0;

  var playAnimation = setInterval(function() {
    var colorList = ["rgba(255, 255, 255, 0.3)", "rgba(0, 0, 0, 0)"];  //rgba(199, 13, 0, 0.7)
    let scaryBackground = document.getElementById('scaryBackground');

    scaryBackground.style.backgroundColor = colorList[i];
    i = (i + 1) % colorList.length;

    counter++;
    console.log(counter);

    if (counter == 20) {
      clearInterval(playAnimation);
      console.log("Counter has stopped!" + counter);
      scaryBackground.remove();
    }
  }, 50);
}


function switchBackgroundImageWithInterval() {
  setTimeout(function() {
    room.switchBackgroundImage("images/F43kZP.gif");
  }, 3000);
}

const firstMinigame = ROOMS.minigameOne;
