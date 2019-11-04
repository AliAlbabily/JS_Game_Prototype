
function startSecondRoom() {
  // Start content manipulation after 3 sec.
  setTimeout(function() {
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
    showObject(secondRoom.objectsList[0].selectors[0]);
    // Initial functions
    initialFunctionsSecondRoom();
  }, 3000);
}


function initialFunctionsSecondRoom() {
  secondRoom.switchBackgroundImage("images/YGFf.gif", 0);
  // FIXME: returns error "Uncaught (in promise) DOMException" when played without being delayed in setTimeout
  secondRoom.playSoundEffect("Sounds/cave themeb4.ogg", 1, 0);
  showCavesObjects();
  moveForward();
  moveBack();
  shinyThingIsClicked();
  secondRoom.zoomingInEffect("#hoodedManLongDistance", "#InnerDisplayTheCaves3", "#Cave3ZoomedIn");
  speakToHoodedMan();
  nextDialog2();
}


function showCavesObjects() {
  // Caves direction buttons
  showObject("#cave1Right");
  showObject("#cave1Forward");
  showObject("#cave2Forward");
  showObject("#cave8Forward");
  showObject(".backBtn");
  // Other stuff
  showObject("#shinyThing");
  showObject("#HoodedMan");
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
    showObject("#hoodedManLongDistance");
  });
}


function speakToHoodedMan() {
  let clicks = 0;

  $("#HoodedMan").on("click", function() {
    if(clicks < 1) {
      showObject(".speakingBubbleContainer");
      showObject(".speakingBubbleText2");
      hoodedMan.speak(".speakingBubbleText2", ROOMS.theCaves.dialogs[0]);
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
      secondRoom.playSoundEffect("Sounds/MenuSelectionClick.wav", 0.5);
      hoodedMan.speak(".speakingBubbleText2", ROOMS.theCaves.dialogs[index]);
      index++;
    }
  });
}


let path = ["#InnerDisplayTheCaves"];

const hoodedMan = ROOMS.theCaves.characters[0];
const secondRoom = ROOMS.theCaves;
