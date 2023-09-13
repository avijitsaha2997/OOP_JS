function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype = {
  eat() {
    console.log(`${this.name} is eating`);
  },
};

const sakib = new Person("Sakib", 35);

console.log(sakib.name);

sakib.eat();

// With new keyword we dont need to create an object with Object.create() method and return the object in the constructor function
