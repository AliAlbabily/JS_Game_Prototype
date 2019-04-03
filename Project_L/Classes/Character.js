
class Character {

  constructor( name ) {
    this.name = name;
  }

  speak(text) {
    console.log(text);
    $(".speakingBubbleText").text(text);
  }

  getName() {
    return this.name;
  }

}
