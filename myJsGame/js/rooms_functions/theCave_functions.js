
function startSecondRoom() {
  // Remove all objects from previous rooms
  removeObject("#InnerDisplayHall");
  removeObject("#InnerDisplayMinigamOne");

    // Create
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
    // Hide
    hideObjects(secondRoom.objectsList);
    // Show
    showObjectWithSelector("#InnerDisplayTheCaves");
    // Initial functions
    initialFunctionsSecondRoom();
}


function initialFunctionsSecondRoom() {
  secondRoom.switchBackgroundImage("images/YGFf.gif", 0);
  showCavesObjects();
  moveForward();
  moveBack();
}


function showCavesObjects() {
  // Caves Buttons
  showObjectWithSelector("#cave1Right");
  showObjectWithSelector("#cave1Forward");
  showObjectWithSelector("#cave2Forward");
  showObjectWithSelector("#cave8Forward");

  showObjectWithSelector(".backBtn");
  // Other
  showObjectWithSelector("#hoodedManLongDistance");
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

let path = ["#InnerDisplayTheCaves"];

const secondRoom = ROOMS.theCaves;
