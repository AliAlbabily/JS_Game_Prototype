
function startSecondRoom() {
  // setTimeout(function() {
    // Remove all objects from previous rooms
    removeObject("#InnerDisplayHall");
    removeObject("#InnerDisplayMinigamOne");
    // Create
    for(let i = 0; i < secondRoom.objectsList.length; i++) {
      creatObject(secondRoom.objectsList[i]);
    }
    // Hide
    hideObjects(secondRoom.objectsList);
    // Show
    showObjectWithSelector("#InnerDisplayTheCaves");
    // Initial functions
    initialFunctionsSecondRoom();
  // }, 3000);
}


function initialFunctionsSecondRoom() {
  secondRoom.switchBackgroundImage("images/YGFf.gif", 0);
  // FIXME: returns error "Uncaught (in promise) DOMException" when played without being delayed in setTimeout
  // secondRoom.playSoundEffect("Sounds/cave themeb4.ogg", 1, 0);
  showCavesObjects();
  moveForward();
  moveBack();
  shinyThingIsClicked();
  secondRoom.zoomingInEffect("#hoodedManLongDistance", "#InnerDisplayTheCaves3", "#Cave3ZoomedIn");
  speakToHoodedMan();
  nextDialog2();
}


function showCavesObjects() {
  // Caves buttons
  showObjectWithSelector("#cave1Right");
  showObjectWithSelector("#cave1Forward");
  showObjectWithSelector("#cave2Forward");
  showObjectWithSelector("#cave8Forward");
  showObjectWithSelector(".backBtn");
  // Other stuff
  showObjectWithSelector("#shinyThing");
  showObjectWithSelector("#HoodedMan");
}


function switchCaves(currentCave, nextCave) {
  $(currentCave).addClass("hidden");
  $(nextCave).removeClass("hidden");
}


function moveForward() {
  $("#cave1Right").on("click", function(){
    path.push("#InnerDisplayTheCaves2");
    switchCaves("#InnerDisplayTheCaves", "#InnerDisplayTheCaves2");
  });

  $("#cave1Forward").on("click", function(){
    path.push("#InnerDisplayTheCaves8");
    switchCaves("#InnerDisplayTheCaves", "#InnerDisplayTheCaves8");
  });

  $("#cave2Forward").on("click", function(){
    path.push("#InnerDisplayTheCaves5");
    switchCaves("#InnerDisplayTheCaves2", "#InnerDisplayTheCaves5");
  });

  $("#cave8Forward").on("click", function(){
    path.push("#InnerDisplayTheCaves3");
    switchCaves("#InnerDisplayTheCaves8", "#InnerDisplayTheCaves3");
  });
}


function moveBack() {
  $(".backBtn").on("click", function(){
    switchCaves( path[path.length - 1], path[path.length - 2] );
    path.pop();
  });
}


function shinyThingIsClicked() {
  $("#shinyThing").on("click", function() {
    $(this).remove();
    showObjectWithSelector("#hoodedManLongDistance");
  });
}


function speakToHoodedMan() {
  let clicks = 0;

  $("#HoodedMan").on("click", function() {
    if(clicks < 1) {
      showObject(".speakingBubbleContainer");
      showObjectWithSelector(".speakingBubbleText2");
      hoodedMan.speak(ROOMS.theCaves.dialogs[0]);
    }
    clicks++;
  });
}

function nextDialog2() {
  let index = 1;

  $(".speakingBubbleContainer").on("click", function(){
    if( index >= ROOMS.theCaves.dialogs.length ) {
      hideObject(".speakingBubbleContainer");
    }
    else {
      room.playSoundEffect("Sounds/MenuSelectionClick.wav", 0.5);
      character.speak(ROOMS.theCaves.dialogs[index]);
      index++;
    }
  });
}


let path = ["#InnerDisplayTheCaves"];

const hoodedMan = ROOMS.theCaves.characters[0];
const secondRoom = ROOMS.theCaves;
