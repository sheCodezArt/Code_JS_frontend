class Car {
  /*constructor(name, age, occupation) {
    name = this.name;
    age =this.age;
    occupation = this.occupation;
  }
  
  introSelf() {
    console.log(`I am ${this.name} and I am ${this.age} years old. I work as a ${occupation}.`);
  }*/
  
  constructor(model, brand, year) {
    this.model = model;
    this.brand = brand;
    this.year = year;
  }
  
  
  
}

const car = new Car("Sam", "Sammie", "2020");

console.log(`My car model is ${car.model}, its brand is ${car.brand} and it was in the year ${car.year}`);
