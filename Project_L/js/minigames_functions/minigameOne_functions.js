
function startFirstMinigame() {
  // Start content manipulation after 3 sec.
  setTimeout(function() {
    // Remove all objects from previous room
    removeObject("#InnerDisplayHall");
    // Create
    creatObject(firstMinigame.objectsList[0]);
    creatObject(firstMinigame.objectsList[1]);
    // Hide
    hideObjects(firstMinigame.objectsList);
    // Show
    showObject(firstMinigame.objectsList[1].selectors[0]);
    showObject(firstMinigame.objectsList[1].selectors[1]);
    showObject(firstMinigame.objectsList[1].selectors[2]);
    showObject(firstMinigame.objectsList[1].selectors[3]);
  }, 3000); // <-- Delay was 3000 before

  // Initial functions
  initialFunctionsMinigameOne();
}


function initialFunctionsMinigameOne() {
  firstMinigame.switchBackgroundImage("images/F43kZP.gif", 3000);
  startBattleBtnIsClicked();
}


function startBattleBtnIsClicked() {
  $(document).on("click", ".startBattleBtn", function() {
    hideObject(".startBattleBtn");
    startBattle();
  });
}


function startBattle() {
  printAllCharactersHp();
  //You attack manually
  attackEnemyBtnIsClicked();
}


function enemyAttacks() {
  setTimeout( function() {
    showObject(".attackEnemyBtn");

    let currentHp = hero.getHp();
    let damageDealt = 10;
    let updatedHp = hero.setHp(currentHp - damageDealt);
    updateHeroHp(updatedHp);
    updateBattleStatus("You took: " + damageDealt + " damage!", 0, "Red");

    enemyAttackingEffects();
  }, 1500);
}


function enemyAttacksWithSunFire() {
  setTimeout( function() {
    showObject(".attackEnemyBtn");

    let currentHp = hero.getHp();
    let damageDealt = 20;
    let updatedHp = hero.setHp(currentHp - damageDealt);
    updateHeroHp(updatedHp);
    updateBattleStatus("Dabious attacked you with SunFire!! You took: " + damageDealt + " damage!", 0, "Red");

    switchBackgroundImageWithEffects("images/burning_sun.gif");
    firstMinigame.playSoundEffect("Sounds/Comet.mp3", 0.06, 0);
  }, 1500);
}


function switchBackgroundImageWithEffects(src) {
  document.body.style.background = `#f3f3f3 url(${src})`;
  document.body.style.backgroundSize = "cover";
  document.body.style.transition = " all 1s";
  document.body.style.transitionDelay = " 0s";

  // Set background-image back to original image after 2 sec of activation
  setTimeout(function() {
    document.body.style.background = '#f3f3f3 url("images/F43kZP.gif")';
    document.body.style.backgroundSize = "cover";
    document.body.style.transition = " all 1s";
    document.body.style.transitionDelay = " 0s";
  }, 1400);
}


function updateHeroHp(newHp) {
  $(".heroHp").text("Hero's HP: " + newHp);
}


function enemyAttackingEffects() {
  let counter = 0;

  setTimeout(function() {
    firstMinigame.playSoundEffect("Sounds/EnemyAttacks.wav", 1, 0);
    $("#dabious").css({ "transition": "0.2s", "filter": "invert(100%)" });
    switchBackgroundColor();
  }, 0);

  let attacksEffect = setInterval(function() {
    counter++;
    console.log(counter);

    // 14 corresponds 1400 milliseconds
    if ( counter >= 4 ) {
      $("#dabious").css({ "transition": "0.2s", "filter": "invert(0%)" });
      clearInterval(attacksEffect);
    }
  }, 100);
}


function attackEnemyBtnIsClicked() {
  showObject(".attackEnemyBtn");
  let thresholdsCounter = 0;

  $(".attackEnemyBtn").on("click", function() {
    hideObject(".attackEnemyBtn");
    attackEnemy();
    updateBattleStatus("Daboius took: " + 15 + " damage!", 0, "#958484");

    if(hero.getHp() != 0 || hero.getHp() > 0) {
      if(hero.getHp() <= 90 && thresholdsCounter == 1) {
        thresholdsCounter++;
        enemyAttacksWithSunFire();
      }
      else {
        thresholdsCounter++;
        switchTurn();
      }
    }
    else {
      console.log("Game Over!");
      startSecondRoom();
    }
  });
}


function attackEnemy() {
  let currentHp = enemy.getHp();
  let damageDealt = 15;
  let updatedHp = enemy.setHp(currentHp - damageDealt);
  updateEnemyHp(updatedHp);
}


function updateEnemyHp(newHp) {
  $(".enemyHp").text("Enemy's HP: " + newHp);
}


function updateBattleStatus(text, delay, textColor) {
  setTimeout( function() {
    $("#battleStatus").text(text).css('color', textColor);
  }, delay);
}


function printAllCharactersHp() {
  showObject(".hpContainer");
  showObject(".heroHp");
  showObject(".enemyHp");
  $(".heroHp").text("Hero's HP: " + hero.getHp());
  $(".enemyHp").text("Enemy's HP: " + enemy.getHp());
}


function switchTurn() {
  //Dabious attacks automatically
  enemyAttacks();
}


function switchBackgroundColor() {
  var scaryBackground = '<div id="scaryBackground"></div>';
  $("body").append(scaryBackground);

  let i = 0;
  let counter = 0;

  var playAnimation = setInterval(function() {
    var colorList = ["rgba(255, 255, 255, 0.1)", "rgba(0, 0, 0, 0)"];  //rgba(199, 13, 0, 0.7)
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


const hero = ROOMS.minigameOne.characters[0];
const enemy = ROOMS.minigameOne.characters[1];
const firstMinigame = ROOMS.minigameOne;
