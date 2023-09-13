let print = function (p1, p2, p3) {
  console.log(`${this.name} ${p1} ${p2} ${p3}`);
};

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

Person.prototype.father = {
  name: "Shibnath",
  print: function () {
    console.log(this.name);
  },
};

const avijit = new Person("Avijit", 26);

print.call(avijit, "Saha", "player_1", "Batsman");
avijit.father.print();
