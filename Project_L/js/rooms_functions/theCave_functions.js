
function startSecondRoom() {
  // Remove all objects from previous room
  // removeObject("#InnerDisplayHall");

    // Create
    creatObject(secondRoom.objectsList[0]);
    creatObject(secondRoom.objectsList[1]);
    creatObject(secondRoom.objectsList[2]);
    creatObject(secondRoom.objectsList[3]);
    creatObject(secondRoom.objectsList[4]);
    creatObject(secondRoom.objectsList[5]);
    // Hide
    hideObjects(secondRoom.objectsList); // Not working while display is set to block in CSS ??
    // Show
    showObjectWithSelector("#InnerDisplayTheCaves");

    // Initial functions
    initialFunctionsSecondRoom();
}


function initialFunctionsSecondRoom() {
  secondRoom.switchBackgroundImage("images/YGFf.gif", 0);
  switchBetweenCaves();

  // Caves Buttons
  showObjectWithSelector("#cave1Right");
  showObjectWithSelector("#cave1Forward");
  showObjectWithSelector("#cave2Forward");

  // showObjectWithSelector("#hoodedManLongDistance");
}

// Not used - old
// function switchBetweenCaves() {
//   let counter = 1;
//   $("div").on("click", function() {
//     counter++;
//     showObjectWithSelector("#InnerDisplayTheCaves" + `${counter}`);
//   });
// }


function switchBetweenCaves() {

  $("#cave1Right").on("click", function(){
    $("#InnerDisplayTheCaves").addClass("hidden");
    $("#InnerDisplayTheCaves2").removeClass("hidden");
  });

  $("#cave1Forward").on("click", function(){
    $("#InnerDisplayTheCaves").addClass("hidden");
    $("#InnerDisplayTheCaves8").removeClass("hidden");
  });

  $("#cave2Forward").on("click", function(){
    $("#InnerDisplayTheCaves2").addClass("hidden");
    $("#InnerDisplayTheCaves5").removeClass("hidden");
  });

}


const secondRoom = ROOMS.theCaves;
