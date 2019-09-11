
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
        new Hero("Hero", 40),
        new Enemy("Dadious", 30)
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
        { // Cave 1 / index 0
          container: "body",
          elements: [
            '<div id="InnerDisplayTheCaves" class="caveDisplayStyling"></div>'
          ],
          selectors: [
            "#InnerDisplayTheCaves"
          ]
        },
        { // Cave 1 / objects / index 1
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
        { // Cave 2 / index 2
          container: "body",
          elements: [
            '<div id="InnerDisplayTheCaves2" class="caveDisplayStyling"></div>'
          ],
          selectors: [
            "#InnerDisplayTheCaves2"
          ]
        },
        { // Cave 2 / objects / index 3
          container: "#InnerDisplayTheCaves2",
          elements: [
            '<image src="images/arrow_forward.png" id="cave2Forward" draggable="false">',
            '<div class="backBtn">BACK</div>'
          ],
          selectors: [
            "#cave2Forward",
            ".backBtn"
          ]
        },
        { // Cave 5 / index 4
          container: "body",
          elements: [
            '<div id="InnerDisplayTheCaves5" class="caveDisplayStyling"></div>'
          ],
          selectors: [
            "#InnerDisplayTheCaves5"
          ]
        },
        { // Cave 5 / objects / index 5
            container: "#InnerDisplayTheCaves5",
            elements: [
              '<div class="backBtn">BACK</div>',
              '<img src="images/shining thing.gif" id="shinyThing" draggable="false">'
            ],
            selectors: [
              ".backBtn",
              '#shinyThing'
            ]
        },
        { // Cave 8 / index 6
          container: "body",
          elements: [
            '<div id="InnerDisplayTheCaves8" class="caveDisplayStyling"></div>'
          ],
          selectors: [
            "#InnerDisplayTheCaves8"
          ]
        },
        { // Cave 8 / objects / index 7
          container: "#InnerDisplayTheCaves8",
          elements: [
            '<image src="images/arrow_forward.png" id="cave8Forward" draggable="false">',
            '<div class="backBtn">BACK</div>'
          ],
          selectors: [
            "#cave8Forward",
            ".backBtn"
          ]
        },
        { // Cave 3 / index 8
          container: "body",
          elements: [
            '<div id="InnerDisplayTheCaves3" class="caveDisplayStyling"></div>'
          ],
          selectors: [
            "#InnerDisplayTheCaves3"
          ]
        },
        { // Cave 3 / objects / index 9
          container: "#InnerDisplayTheCaves3",
          elements: [
            '<image src="images/hooded_ghost.png" id="hoodedManLongDistance" draggable="false">',
            '<div class="backBtn">BACK</div>'
          ],
          selectors: [
            "#hoodedManLongDistance",
            ".backBtn"
          ]
        },
        { // Cave 3 - Zoomed in / Objects / index 10
          container: "body",
          elements: [
            '<div id="Cave3ZoomedIn" class="caveDisplayStyling"></div>'
          ],
          selectors: [
            "#Cave3ZoomedIn"
          ]
        },
        { // Cave 3 - Zoomed in / Objects / index 11
          container: "#Cave3ZoomedIn",
          elements: [
            '<image src="images/HoodedMan.png" id="HoodedMan" draggable="false">',
            '<div class="speakingBubbleContainer"><p class="speakingBubbleText2"></p></div>'
          ],
          selectors: [
            "#HoodedMan",
            ".speakingBubbleContainer",
            ".speakingBubbleText2"
          ]
        }
      ],
      //dialogs
      [
        "I'm not here for that thing you just took..",
        "There is something else I wanted to speak with you about..",
        "As you can see behind me lies the exit of this area. But before you keep on your journey, I want to warn you of something dangerous that you might encounter further ahead. Just keep moving when you see shadows..",
        "Goodluck..."
      ],
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
