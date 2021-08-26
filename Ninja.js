class Ninja {
  constructor(name, health, speed, strength) {
    this.name = name;
    this.health = health;
    if (speed) {
      this.speed = speed;
    } else {
      this.speed = 3;
    }
    if (strength) {
      this.strength = strength;
    } else {
      this.strength = 3;
    }
  }

  //ninja methods
  sayName() {
    console.log(`My name is ${this.name}`);
  }

  showStats() {
    console.log(
      `Name:${this.name} - Health:${this.health} - Speed:${this.speed} - Strength:${this.strength}`
    );
  }

  drinkSake() {
    this.health += 10;
  }
}

class Sensei extends Ninja {
  constructor(name) {
    super(name, 200, 10, 10);
  }

  speakWisdom() {
    console.log("Be kind to yourself, you're doing better than you think!");
    this.drinkSake();
  }
}

const ninja1 = new Ninja("Hyabusa", 100, 4);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

const ninja2 = new Sensei("Goku");
ninja2.sayName();
ninja2.showStats();
ninja2.speakWisdom();
ninja2.showStats();
