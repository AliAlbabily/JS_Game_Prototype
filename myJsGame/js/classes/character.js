
class Character {

  constructor( name ) {
    this.name = name;
  }

  speak(selectedTextObject, text) {
    console.log(text);
    $(selectedTextObject).text(text);
  }

  getName() {
    return this.name;
  }

}
