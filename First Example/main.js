function Person(firstName, lastName, age) {
  this.firstName=firstName;
  this.lastName=lastName;
  this.age=age;
  function getAge(age){
    console.log(age);
  }
}
const person1 = new Person("Burak", "ESEN", 21);
person1.getAge;
const numberEx = 10;
// console.log(typeof numberEx);

console.log(person1);
