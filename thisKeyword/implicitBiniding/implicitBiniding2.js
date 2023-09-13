function Person(name, age) {
  const obj = Object.create(Person.prototype);

  obj.name = name;
  obj.age = age;

  return obj;
}

Person.prototype.print = function () {
  console.log(this.name);
};

Person.prototype.father = {
  name: "Shibnath",
  print: function () {
    console.log(this.name);
  },
};

const avijit = Person("Avijit", 26);

avijit.print();
avijit.father.print();
