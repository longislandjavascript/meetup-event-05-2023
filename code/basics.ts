class Person {
  constructor(private _name: string, public age: number) {}

  get name() {
    return this._name;
  }

  set name(name: string) {
    if (!name) {
      throw "You must pass a name";
    }
    this._name = name;
  }
}

// class Programmer extends Person {
//   constructor(name: string) {
//     super(name);
//   }
//   printName() {
//     console.log(this.name);
//   }
// }

const tyler = new Person("Tyler", 24);

console.log(tyler.name);
