
const ROOMS = {
    hallRoom: new Room(
      //name
      "Main Hall",
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
            '<div id="battleStatusContainer"><span id="battleStatus"></span></div>',
            '<div class="hpContainer"><span class="enemyHp"></span><span class="heroHp"></span></div>',
            '<div class="attackEnemyBtn">ATTACK!!</div>'
          ],
          selectors: [
            ".startBattleBtn",
            "#dabious",
            "#battleStatusContainer",
            "#battleStatus",
            ".hpContainer",
            ".enemyHp",
            ".heroHp",
            ".attackEnemyBtn"
          ]
        }
      ],
      //dialogs
      ["Prepare to die human..."],
      //characters
      [
        new Hero("Hero", 100),
        new Enemy("Badious", 200)
      ],
      //initFunction
      function() {
        console.log("...");
      }
    ),
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
    theCaves: new Room(
      //name
      "The Caves",
      //objectList
      [
        {
          container: "body",
          elements: [
            '<div id="InnerDisplayTheCaves"></div>'
          ],
          selectors: [
            "#InnerDisplayTheCaves"
          ]
        },
        {
          container: "#InnerDisplayTheCaves",
          elements: [
            '<image src="images/arrow.png" id="cave1Right" draggable="false">',
            '<image src="images/arrow_forward.png" id="cave1Forward" draggable="false">'
          ],
          selectors: [
            "#cave1Right",
            "#cave1Forward"
          ]
        },
        {
          container: "body",
          elements: [
            '<div id="InnerDisplayTheCaves2"></div>'
          ],
          selectors: [
            "#InnerDisplayTheCaves2"
          ]
        },
        {
          container: "#InnerDisplayTheCaves2",
          elements: [
            '<image src="images/arrow_forward.png" id="cave2Forward" draggable="false">',
            '<div>BACK</div>'
          ],
          selectors: [
            "#cave2Forward",
            "#back"
          ]
        },
        {
          container: "body",
          elements: [
            '<div id="InnerDisplayTheCaves5"></div>'
          ],
          selectors: [
            "#InnerDisplayTheCaves5"
          ]
        },
        { // index 5
          container: "body",
          elements: [
            '<div id="InnerDisplayTheCaves8"></div>'
          ],
          selectors: [
            "#InnerDisplayTheCaves8"
          ]
        },
        {
          container: "body",
          elements: [
            '<div id="InnerDisplayTheCaves3"></div>'
          ],
          selectors: [
            "#InnerDisplayTheCaves3"
          ]
        },
        {
          container: "#InnerDisplayTheCaves3",
          elements: [
            '<image src="images/hooded_ghost.png" id="hoodedManLongDistance" draggable="false">'
          ],
          selectors: [
            "#hoodedManLongDistance"
          ]
        }
      ],
      //dialogs
      ["haha"],
      //characters
      [
        new Character("Hooded Person")
      ],
      //initFunction
      function() {
        console.log("...");
      }
    ) // <----- Add " , " here when creating a new room or minigame
}
