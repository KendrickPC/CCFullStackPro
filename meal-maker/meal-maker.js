'use strict';

const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  set appetizers(appetizersData) {
    this._courses.appetizers.push(appetizersData);
  },
  get mains() {
    return this._courses.mains;
  },
  set mains(mainsData) {
    this._courses.mains.push(mainsData);
  },
  get desserts() {
    return this._courses.desserts;
  },
  set desserts(dessertsData) {
    this._courses.desserts.push(dessertsData);
  },
  get courses() {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts
    }
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    var dish = {
      name: dishName,
      price: dishPrice
    }
    this._courses[courseName].push(dish)
  },
  getRandomDishFromCourse(courseName) {
    var dishes = this._courses[courseName];
    var randomGenerator = Math.floor(Math.random() * dishes.length);
    return dishes[randomGenerator];
  },
  generateRandomMeal() {
    var appetizer = this.getRandomDishFromCourse('appetizers');
    var main = this.getRandomDishFromCourse('mains');
    var dessert = this.getRandomDishFromCourse('desserts')
    var totalPrice = (appetizer.price + main.price + dessert.price).toFixed(2);
    return `The appetizer is ${appetizer.name}, the main course is ${main.name}, and the dessert is ${dessert.name}. The total price is $${totalPrice}.`
  }

};

menu.addDishToCourse('appetizers', 'butter biscuits', 2.95);
menu.addDishToCourse('appetizers', 'salad', 4.95);
menu.addDishToCourse('appetizers', 'fried calamari', 6.95)

menu.addDishToCourse('mains', 'steak tacos', 13.95);
menu.addDishToCourse('mains', 'shrimp pasta', 15.95);
menu.addDishToCourse('mains', 'lasagna', 14.95)

menu.addDishToCourse('desserts', 'apple pie', 4.95)
menu.addDishToCourse('desserts', 'chocolate cake', 4.95)
menu.addDishToCourse('desserts', 'cheesecake', 4.95)

console.log(menu.generateRandomMeal());




/*
//Testing getRandomDishFromCourse and addDishToCourse function
menu.addDishToCourse('appetizers', 'butter biscuits', 0.00);
menu.addDishToCourse('appetizers', 'shrimp pasta', 15.95);
menu.addDishToCourse('appetizers', 'chocolate multon cake', 7.95)
console.log(menu.courses);

// console.log(menu.getRandomDishFromCourse('appetizers'))
*/

// console.log(menu.courses);

/*
Testing for _courses property's get method
console.log(menu.courses); 
*/

/*
// Testing for getter and setter methods

menu.appetizers = 'salad';
menu.appetizers = 'biscuits';
// console.log(menu._courses.appetizers);
menu.mains = 'shrimp pasta';
// console.log(menu._courses.appetizers);
menu.desserts = 'apple pie'
// console.log(menu._courses.desserts);
*/

