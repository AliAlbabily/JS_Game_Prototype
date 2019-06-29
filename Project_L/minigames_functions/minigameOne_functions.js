
function startFirstMinigame() {
  this.content = ROOMS.minigameOne;

  // Start content manipulation after 3 sec.
  setTimeout(function() {
    // Create
    creatObject(this.content.objectsList[0]);
    creatObject(this.content.objectsList[1]);
    // Hide
    hideObjects(firstMinigame.objectsList);
    // Show
    showObject(firstMinigame.objectsList[1].selectors[0]);
    showObject(firstMinigame.objectsList[1].selectors[1]);
    showObject(firstMinigame.objectsList[1].selectors[2]);
    showObject(firstMinigame.objectsList[1].selectors[3]);
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
  printAllCharactersHp();
  //The enemy attacks automatically
  enemyAttacks();
  //You attack manually
  attackEnemyBtnIsClicked();
}


function enemyAttacks() {
  console.log("The enemy strikes first!");
  $("#battleStatus").text("The enemy strikes first!");

  enemyAttackingEffects();
}


function enemyAttackingEffects() {
  let counter = 0;

  setTimeout(function() {
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


function attackEnemyBtnIsClicked() {
  showObject(".attackEnemyBtn");
  $(".attackEnemyBtn").on("click", function() {
    console.log(enemy.getHp());
    attackEnemy();
  });
}


function attackEnemy() {
  let currentHp = enemy.getHp();
  let damageDealt = 15;

  let updatedHp = enemy.setHp(currentHp - damageDealt);
  console.log(currentHp);
  updateEnemyHp(updatedHp);
}


function updateEnemyHp(newHp) {
  $(".enemyHp").text("Enemy's HP: " + newHp);
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

function printAllCharactersHp() {
  showObject(".hpContainer");
  showObject(".heroHp");
  showObject(".enemyHp");
  $(".heroHp").text("Hero's HP: " + hero.getHp());
  $(".enemyHp").text("Enemy's HP: " + enemy.getHp());
}

function switchBackgroundImageWithInterval() {
  setTimeout(function() {
    room.switchBackgroundImage("images/F43kZP.gif");
  }, 3000);
}

const hero = ROOMS.minigameOne.characters[0];
const enemy = ROOMS.minigameOne.characters[1];
const firstMinigame = ROOMS.minigameOne;
