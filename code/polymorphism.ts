export class Animal {
  constructor(public name: string) {}
  public move(): void;
  public move(distance: number): void;
  public move(distance?: number): void {
    if (typeof distance === "number") {
      console.log("Moving");
    }
    console.log("moving also");
  }
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

const animals: Animal[] = [new Dog("Marc"), new Cat("Paul")];

animals.forEach((animal) => {
  if (animal instanceof Dog) {
    animal.makeSound();
  }
});

let name = "Tyler";
