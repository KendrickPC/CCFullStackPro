// Intermediate JS Coding Challenges

const reverseArray = (arr) => {
  var results = [];
  for (i=arr.length-1; i>=0; i--) {
   results.push(arr[i]);
  }
  return results;
}
// When you're ready to test your code, uncomment the below and run:
/* 
const sentence = ['sense.','make', 'all', 'will', 'This'];
console.log(reverseArray(sentence)) 
// Should print ['This', 'will', 'all', 'make', 'sense.'];
*/
const sentence = ['sense.','make', 'all', 'will', 'This'];
console.log(reverseArray(sentence));
// Should print ['This', 'will', 'all', 'make', 'sense.'];

const greetAliens = (aliensArray) => {
  for (var alien of aliensArray) {
    console.log(`Oh powerful ${alien}, we humans offer our unconditional surrender!`)
  }
}
const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
greetAliens(aliens);
// Should print:
// Oh powerful Blorgous, we humans offer our unconditional surrender! 
// Oh powerful Glamyx, we humans offer our unconditional surrender! 
// Oh powerful Wegord, we humans offer our unconditional surrender! 
// Oh powerful SpaceKing, we humans offer our unconditional surrender! 

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
const convertToBaby = (arr) => {
  var results = [];
  for (var animal of arr) {
    results.push('baby ' + animal)
  }
  return results;
}
console.log(convertToBaby(animals));

const numbers = [5, 3, 9, 30];
const smallestPowerOfTwo = arr => {
      let results = [];
      // The 'outer' for loop - loops through each element in the array
      for (let i = 0; i < arr.length; i++) {
            number = arr[i];
            // The 'inner' while loop - searches for smallest power of 2 greater than the given number
            j = 1;
            while (j < number) {                 
                  j = j * 2;
            }
            results.push(j);
      }
      return results
}
console.log(smallestPowerOfTwo(numbers)) 
// Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]

console.log("\nEat Pizza: ")
const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];
const politelyDecline = (veg) => {
  console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

const declineEverything = (arr) => {
  arr.forEach(politelyDecline)
}
declineEverything(veggies);

console.log("\nEat Healthy: ")
const fruits = ['apple', 'banana', 'raspberry', 'blueberry'];
const acceptEverything = (arr) => {
  arr.forEach(function(element) {
    const politelyAccept = (fruit) => {
      console.log(`Ok, I guess I will eat some ${fruit}.`)
    }
    politelyAccept(element);
  })
}
acceptEverything(fruits);

const numbers2 = [2, 7, 9, 171, 52, 33, 14]
const squareNums = (arr) => {
  return arr.map(function(element) {
    return element * element
  })
};
console.log(squareNums(numbers2));

const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];
const shoutGreetings = (arr) => {
  return arr.map(function(word) {
    return word.toUpperCase() + '!';
  })
}
console.log(shoutGreetings(greetings));

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]
const sortYears = (arr) => {
  return arr.sort(function(a, b) {
    return b - a;
  });
}
console.log(sortYears(years));

let arr1 = ['this', 'not this', 'nor this'];
let arr2 = ['thing 1', 'thing 2', 'this'];
const justCoolStuff = (arr1, arr2) => {
  return arr1.filter(function(element) {
    var arr3 = arr2.indexOf(element) > -1;
    return arr3;
  })
}
console.log(justCoolStuff(arr1, arr2));

// Using the Array.prototype.every method.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
const meal = [{name: 'arugula', source: 'plant'}, {name: 'tomatoes', source: 'plant'}, {name: 'lemon', source:'plant'}, {name: 'olive oil', source: 'plant'}];
// isTheDinnerVegan(meal); // Should return true
const isTheDinnerVegan = (arr) => {
  var results = [];
  for (dish of arr) {
    results.push(dish.source);
  }
  const isPlant = (element) => element === 'plant';
  return results.every(isPlant);
}
console.log(isTheDinnerVegan(meal));

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// Sorting arrays by the value of their properties.
const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];
const sortSpeciesByTeeth = (arrObj) => {
  return arrObj.sort(function (a, b) {
    return a.numTeeth - b.numTeeth;
  })
};
console.log(sortSpeciesByTeeth(speciesArray));


const dogFactory = (name, breed, weight) => {
  return {
    _name: name,
    get name() {
      return this._name;
    },
    set name(newName) {
      this._name = newName;
    },
    _breed: breed,
    get breed() {
      return this._breed;
    },
    set breed(newBreed) {
      this._breed = newBreed;
    },
    _weight: weight,
    get weight() {
      return this._weight;
    },
    set weight(newWeight) {
      this._weight = newWeight;
    },
    bark() {
      return 'ruff! ruff!'
    },
    eatTooManyTreats() {
      this._weight++
    }
  }
};
console.log(dogFactory('Joe', 'Pug', 27));
// Should return { name: 'Joe', breed: 'Pug', weight: 27 }
