
	$('body').css({
								'background-image' : 'url(images/GloomyEvilBordercollie-small.gif)',
								'background-repeat' : 'no-repeat',
								'background-size' : '100%'
								});

	let keyPhrase = [];


	var redEyesSound = document.createElement("audio");
	redEyesSound.src = "Panic-Mike_Koenig-717059030.mp3";
	redEyesSound.volume = 0.1;
	redEyesSound.autoPlay = false;
	redEyesSound.preLoad = true;
	redEyesSound.controls = true;

	var pathLockedSound = document.createElement("audio");
	pathLockedSound.src = "lose sound 2 - 1_0.wav";
	pathLockedSound.volume = 0.1;
	pathLockedSound.autoPlay = false;
	pathLockedSound.preLoad = true;
	pathLockedSound.controls = true;


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

	  // keyPhrase.push(e.keyCode);

	  console.log(keyPhrase.join(''));

	});


	$("#RedEyes").hide();
	$(".secretDoorContainer").hide();
	$(".tooltip p").css("display", "none");


	$(document).on("keyup", function(event) {

		event.preventDefault();
		var img = document.getElementById("RedEyes");

		if (event.keyCode === 13) {

			if ( keyPhrase[0] == "h" && keyPhrase[1] == "e" && keyPhrase[2] == "l" && keyPhrase[3] == "l" && keyPhrase[4] == "o" ) {
		    console.log("Door Unlocked");
				redEyesSound.play();

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


			 $(".secretDoorContainer").fadeIn({queue: false, duration: 2000}).animate({ top: "140px" }, 1200);
			 $(".secretDoorContainer")
				  .delay(500)
				  .queue( function () {
				   		$(".secretDoorContainer").mouseenter(
									function(){ $(this).css({ "transition": "0.6s",
								 																		 "filter": "sepia(0%)"})
									}
							).mouseenter(
									function(){ $(".tooltip p").css({ "display": "block",
																										"position": "fixed",
																										"overflow": "hidden"});
									}
							);
							$(".secretDoorContainer").mouseleave(
									function(){ $(this).css({ "transition": "0.6s",
																										 "filter": "sepia(100%)"})
									}
							).mouseleave(
									function(){ $(".tooltip p").css("display", "none")
									}
							);
	  	 		});

					//****************************************************************

				   		// $(".secretDoorContainer").mouseenter(
							// 		function(){ $(".tooltip p").css({ "display": "block",
							// 																		  "position": "fixed",
							// 																			"overflow": "hidden"});
							// 		}
							// );
							// $(".secretDoorContainer").mouseleave(
							// 		function(){ $(".tooltip p").css("display", "none")
							// 		}
							// );

					//****************************************************************


				$(document).off("keyup");
				keyPhrase.splice(0, keyPhrase.length);
		  }
		  else {
		      console.log("Try again!");

					pathLockedSound.play();

					$("#RedEyes").fadeIn(900).fadeOut(900);

					keyPhrase.splice(0, keyPhrase.length);
					// $("#InnerDisplayHall").effect( "shake", {times:4}, 1000 );
		  }

		}
	});


	var tooltipP = document.getElementById('pId');

	window.onmousemove = function (e) {
    var x = e.clientX,
        y = e.clientY;
    tooltipP.style.top = (y + -255) + 'px';
    tooltipP.style.left = (x + -430) +'px';
	};


	// $('#lyrica').animate({opacity: 0.0, bottom: '100px'}, 2000, setInvisible);
 //
	// $("#lyricaOutside").delay(2000)
	// 									 .queue( function () {
	// 										 	$('#lyricaOutside').animate({bottom: '100px'}, setVisible);
	// 									 });
 //
 // function setInvisible() {
	//  $('#lyrica').css('visibility', 'hidden');
 // }
 //
 // function setVisible() {
	//  $('#lyrica').css('visibility', 'visible');
 // }
