interface ISoundMaker {
  makeSound(): void;
}

class Barker implements ISoundMaker {
  makeSound() {
    console.log("Bark!");
  }
}

class Meower implements ISoundMaker {
  makeSound() {
    console.log("Purr");
  }
}

export class Animal {
  constructor(private soundMaker: ISoundMaker, public name: string) {}
  makeSound() {
    this.soundMaker.makeSound();
  }
}

const paulTheDog = new Animal(new Barker(), "Paul");
const marcTheCat = new Animal(new Meower(), "Marc");

[paulTheDog, marcTheCat].forEach((animal) => animal.makeSound());
