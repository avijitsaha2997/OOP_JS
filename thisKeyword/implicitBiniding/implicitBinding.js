function Person(name, age) {
  this.name = name;
  this.age = age;
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

const avijit = new Person("Avijit", 26);

avijit.print();
avijit.father.print();
