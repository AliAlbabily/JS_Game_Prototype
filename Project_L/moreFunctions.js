
$(document).ready(function(){

  $("#MagicalButton").click(function(){

      var lable = $("#MagicalButton").text();

      var obj = document.createElement("audio");
      obj.src = "FX141.wav";
      obj.volume = 0.1;
      obj.autoPlay = false;
      obj.preLoad = true;
      obj.controls = true;



      if ( lable == "SHOW YOURSELF LYRICA!!" ) {
        obj.play();

        $("#EvilLyrica").removeClass("hidden");
        $("#MagicalButton").text('HIDE!!');

        $('body').css({
                        'background-image' : 'url(images/Thunders.gif)',
                      'background-repeat' : 'no-repeat',
                      'background-size' : '100%'  /* '100% 100%' makes the backgound-image disappear when clicking on the button */
                      });

        $("#MagicalButton, #lyrica").addClass("unvisible");
      }

      else {
        $("#EvilLyrica").addClass("hidden");
        $("#MagicalButton").text("SHOW YOURSELF LYRICA!!");
      }

      $("#InnerDisplay").addClass("border-glow");
      $("#InnerDisplay").css({
                    'background-image' : 'url(images/Internet-Down.gif)',
                    'background-repeat' : 'no-repeat',
                    'background-size' : '100%'
                    });
  });

  let mouseEnterTimes = 0;

  $( "#EvilLyrica" ).click( function() {
    $('#OuterChatDisplay').removeClass("unvisible");

    $("#speakTo").addClass("hidden");
  });


  // If mouseenter on EvilLyrica % mouseleave


    $("#EvilLyrica").on('mouseenter', function() {
    mouseEnterTimes += 1;

    // if ( mouseEnterTimes > 1) {
    //   $("#speakTo").addClass("hidden").off();
    // }
    // else {
      $("#speakTo").removeClass("hidden");
    // }

  });

  $("#EvilLyrica").on("mouseleave", function(){
      $("#speakTo").addClass("hidden");
  });





});
