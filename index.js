// Class based inheritence

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }
}

let sakib = new Person("Sakib", 30);
sakib.name = "Rakib";

console.log(sakib.name);
sakib.eat();
