
function startSecondRoom() {
  setTimeout(function() {
    // Remove all objects from previous rooms
    removeObject("#InnerDisplayHall");
    removeObject("#InnerDisplayMinigamOne");
    // Create
    // FIXME: loop through numbers when creating new objects
    creatObject(secondRoom.objectsList[0]);
    creatObject(secondRoom.objectsList[1]);
    creatObject(secondRoom.objectsList[2]);
    creatObject(secondRoom.objectsList[3]);
    creatObject(secondRoom.objectsList[4]);
    creatObject(secondRoom.objectsList[5]);
    creatObject(secondRoom.objectsList[6]);
    creatObject(secondRoom.objectsList[7]);
    creatObject(secondRoom.objectsList[8]);
    creatObject(secondRoom.objectsList[9]);
    creatObject(secondRoom.objectsList[10]);
    creatObject(secondRoom.objectsList[11]);
    // Hide
    hideObjects(secondRoom.objectsList);
    // Show
    showObjectWithSelector("#InnerDisplayTheCaves");
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
}


function showCavesObjects() {
  // Caves buttons
  showObjectWithSelector("#cave1Right");
  showObjectWithSelector("#cave1Forward");
  showObjectWithSelector("#cave2Forward");
  showObjectWithSelector("#cave8Forward");
  showObjectWithSelector(".backBtn");
  // Other buttons
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


let path = ["#InnerDisplayTheCaves"];
const secondRoom = ROOMS.theCaves;
