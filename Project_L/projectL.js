
// var x = 15;
// var y = 5;
// var z = x + y;
//
// document.getElementById("GerFram10").innerHTML = z;


// document.getElementById("ExempelText").innerHTML = text;


var text = "Rather Impressive...   What a shame that you have managed to see through me right from the start.";
var soFar = "";

var visible = document.querySelector(".visible");
var invisible = document.querySelector(".invisible");

function showText() {

  invisible.innerHTML = text;
  var t = setInterval( function() {
    soFar = soFar + text.substr(0, 1),
    text = text.substr(1);

    visible.innerHTML = soFar;
    invisible.innerHTML = text;

    if (text.length === 0) clearInterval(t);
  } , 50)

}
