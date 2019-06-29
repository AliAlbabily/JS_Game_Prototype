
class Hero {

  constructor(name, hp) {
    this.name = name;
    this.hp = hp;
  }

  getName() {
    return this.name;
  }

  getHp() {
    return this.hp;
  }

  setHp(newHp) {
    this.hp = newHp;
    return this.hp;
  }

}
