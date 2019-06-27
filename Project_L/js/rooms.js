
const ROOMS = {
    hallRoom: new Room(
      //name
      "Hall",
      //objectList
      [
        {
          container: "#InnerDisplayHall",
          elements: [
            '<img src="images/lyrica.png" class="lyrica" draggable="false">',
            '<img src="images/268676961000211.png" id="RedEyes" draggable="false">',
            '<div class="secretDoorContainer"></div>',
            '<div class="speakingBubbleWrapper"><p class="speakingBubbleText"></p></div>'
          ],
          selectors: [
            ".lyrica",
            "#RedEyes",
            ".secretDoorContainer",
            ".speakingBubbleWrapper",
            ".speakingBubbleText"
          ]
        },
        {
          container: ".secretDoorContainer",
          elements: [
            '<img src="images/pic5abfb86bb2efe7_original_70089075.gif" class="secretDoor" draggable="false">'
          ],
          selectors: [
            ".secretDoor"
          ]
        }
      ],
      //dialogs
      ["STOP RIGHT THERE!!",
      "I need to tell you something before you enter that place...",
      "My name is YoraLina and I'm the headmaster of this place...",
      "Now you may go ahead and don't forget to be careful out there..."],
      //characters
      [new Character("Yoralina")],
      //initFunction
      function() {
        console.log("Test");
      }
    ),
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
    minigameOne: new Room(
      //name
      "Minigame1",
      //objectList
      [
        {
          container: "body",
          elements: [
            '<div id="InnerDisplayMinigamOne"></div>'
          ],
          selectors: [
            "#InnerDisplayMinigamOne"
          ]
        },
        {
          container: "#InnerDisplayMinigamOne",
          elements: [
            '<div class="startBattleBtn">START BATTLE!!</div>',
            '<img src="images/Dabious.png" id="dabious" draggable="false">',
            '<div id="battleStatusContainer"><span id="battleStatus"></span></div>'
          ],
          selectors: [
            ".startBattleBtn",
            "#dabious",
            "#battleStatusContainer",
            "#battleStatus"
          ]
        }
      ],
      //dialogs
      ["Prepare to die human..."],
      //characters
      [],
      //initFunction
      function() {
        console.log("...");
      }
    ) // <----- Add " , " here when creating a new room or minigame
}
