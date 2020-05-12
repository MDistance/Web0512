//

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.job = function () {
  console.log('play basketball');
};

let person = new Person('kobe',  43);
person.job();
person.toString()
console.log(person.xxx);
person.xxx();
