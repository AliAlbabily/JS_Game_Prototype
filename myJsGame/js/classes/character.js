
class Character {

  constructor( name ) {
    this.name = name;
  }

  speak(text) {
    console.log(text);
    // $(".speakingBubbleText").text(text);
    $(".speakingBubbleText2").text(text);
  }

  getName() {
    return this.name;
  }

}
