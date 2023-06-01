abstract class Animal {
  constructor(public name: string) {}

  abstract makeSound(): void;
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }
  public makeSound() {
    console.log("Bark!");
  }
}

class Cat extends Animal {
  public makeSound() {
    console.log("Meow");
  }
}

new Dog("Marc").makeSound();
new Cat("Paul").makeSound();
