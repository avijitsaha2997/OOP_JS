function Person(name, age) {
  const prsonObject = Object.create(Person.prototype);

  prsonObject.name = name;
  prsonObject.age = age;

  return prsonObject;
}

Person.prototype = {
  eat() {
    console.log(`${this.name} is eating rice.`);
  },
};

const sakib = Person("Sakib Hasan", 35);

console.log(sakib.name);

sakib.eat();

// Without new keyword we need to create an object with Object.create() method and return the object in the constructor function
