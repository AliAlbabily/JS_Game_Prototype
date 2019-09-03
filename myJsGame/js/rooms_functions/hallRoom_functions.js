
function initialFunctions() {
  bodyBackground();
  enterPassword();
  secretDoorIsClicked();
  nextDialog();
}


function bodyBackground() {
  $('body').css({
		'background-image' : 'url(images/GloomyEvilBordercollie-small.gif)',
		'background-repeat' : 'no-repeat',
		'background-size' : '100%'
	});
}


function enterPassword() {
  let keyPhrase = [];

	$(document).keyup(function(e) {
		//find out which key was pressed
		switch(e.keyCode) {
			case 65	:	console.log('a'); keyPhrase.push("a"); break;	// a
			case 66	:	console.log('b');	keyPhrase.push("b"); break;	// b
			case 67	:	console.log('c');	keyPhrase.push("c"); break;	// c
			case 68	:	console.log('d');	keyPhrase.push("d"); break;	// d
			case 69	:	console.log('e');	keyPhrase.push("e"); break;	// e
			case 70	:	console.log('f');	keyPhrase.push("f"); break;	// f
			case 71	:	console.log('g');	keyPhrase.push("g"); break;	// g
			case 72	:	console.log('h');	keyPhrase.push("h"); break;	// h
			case 73	:	console.log('i');	keyPhrase.push("i"); break;	// i
			case 74	:	console.log('j');	keyPhrase.push("j"); break;	// j
			case 75	:	console.log('k');	keyPhrase.push("k"); break;	// k
			case 76	:	console.log('l');	keyPhrase.push("l"); break;	// l
			case 77	:	console.log('m');	keyPhrase.push("m"); break;	// m
			case 78	:	console.log('n');	keyPhrase.push("n"); break;	// n
			case 79	:	console.log('o');	keyPhrase.push("o"); break;	// o
			case 80	:	console.log('p');	keyPhrase.push("p"); break;	// p
			case 81	:	console.log('q');	keyPhrase.push("q"); break;	// q
			case 82	:	console.log('r'); keyPhrase.push("r"); break;	// r
			case 83	:	console.log('s');	keyPhrase.push("s"); break;	// s
			case 84	:	console.log('t');	keyPhrase.push("t"); break;	// t
			case 85	:	console.log('u');	keyPhrase.push("u"); break;	// u
			case 86	:	console.log('v');	keyPhrase.push("v"); break;	// v
			case 87	:	console.log('w');	keyPhrase.push("w"); break;	// w
			case 88	:	console.log('x');	keyPhrase.push("x"); break;	// x
			case 89	:	console.log('y');	keyPhrase.push("y"); break;	// y
			case 90	:	console.log('z');	keyPhrase.push("z"); break;	// z
		}
	  console.log(keyPhrase.join(''));
	});

	$(document).on("keyup", function(event) {
		event.preventDefault();
		if (event.keyCode === 13) {
			if ( keyPhrase[0] == "h" ) { //&& keyPhrase[1] == "e" && keyPhrase[2] == "l" && keyPhrase[3] == "l" && keyPhrase[4] == "o"
		    console.log("Door Unlocked");

        room.playSoundEffect("Sounds/Panic-Mike_Koenig-717059030.mp3", 0.5);

				/*Set glitchy background*/
				$('body').css({
  				'background-image' : 'url(images/Static.gif.134cc0b6ab209a478edfaa338f3c3973.gif)',
  				'background-repeat' : 'no-repeat',
  				'background-size' : '100%'
  			});

				/*Set back normal background after 2.5sec */
				setTimeout(function() {
					$('body').css({
						'background-image' : 'url(images/GloomyEvilBordercollie-small.gif)',
						'background-repeat' : 'no-repeat',
						'background-size' : '100%'
					});
    		}, 2500);

				showSecretPortal();

				$(document).off("keyup");
				keyPhrase.splice(0, keyPhrase.length);
		  }
		  else {
	      console.log("Try again!");
				room.playSoundEffect("Sounds/lose sound 2 - 1_0.wav", 1);
				$("#RedEyes").fadeIn(900).fadeOut(900);
				keyPhrase.splice(0, keyPhrase.length);
		  }
		}
	});
}


function showSecretPortal() {
  showObject(".secretDoor");
  $(".secretDoorContainer").fadeIn({queue: false, duration: 2000}).animate({ top: "140px" }, 1200);
  $(".secretDoorContainer")
   .delay(500)
   .queue( function () {
     $(".secretDoorContainer").mouseenter(
       function(){ $(this).css({ "transition": "0.6s", "filter": "sepia(0%)"})
       }
     );
     $(".secretDoorContainer").mouseleave(
       function(){ $(this).css({ "transition": "0.6s", "filter": "sepia(100%)"})
       }
     );
   });
}


function nextRoomEffect() {
  $("#shadowing").fadeIn(3000).fadeOut(3000);
  room.playSoundEffect("Sounds/echo-whoosh 0.5.wav", 0.5);
  removeMainDisplay();
}


function removeMainDisplay() {
  $("#InnerDisplayHall")
  .delay(3000)
  .queue(function() {
    $(this).remove();
  });
}


function secretDoorIsClicked() {
  let index = 0;
  var x = document.getElementsByClassName("speakingBubbleWrapper")[0];

  $(".secretDoor").on("click", function() {
    index++;

    if (index <= 1) {
      showObject(".speakingBubbleWrapper");
      showObject(".speakingBubbleText");
      character.speak(ROOMS.hallRoom.dialogs[0]);
    }
    // When the speakingBubble is gone, you will be able to enter next room
    if (index >= 2 && window.getComputedStyle(x).display === "none") {
      console.log("Next room entered!");
      nextRoomEffect();

      // Start next room (Minigame1) ...
      startFirstMinigame();

    }
    console.log(index);
  });
}


function nextDialog() {
  let index = 1;

  $(".speakingBubbleWrapper").on("click", function(){
    if( index >= ROOMS.hallRoom.dialogs.length ) {
      hideObject(".speakingBubbleWrapper");
    }
    else {
      room.playSoundEffect("Sounds/MenuSelectionClick.wav", 0.5);
      character.speak(ROOMS.hallRoom.dialogs[index]);
      index++;
    }
  });
}

const character = ROOMS.hallRoom.characters[0];
const room = ROOMS.hallRoom;
