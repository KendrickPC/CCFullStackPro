class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
    this._testScores = [];
  }
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }
  get testScores() {
    return this._testScores;
  }
  set numberOfStudents(value) {
    if (value.isNaN()) {
      console.log('Invalid input: numberOfStudents must be set to a Number.')
    } else {
      this._numberOfStudents = value;
    }
  }
  quickFacts() {
    return `${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`
  }
  pickSubstituteTeacher(substituteTeachers) {
    let randomNumber = Math.floor(Math.random() * (substituteTeachers.length))
    return substituteTeachers[randomNumber];
  }
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
  average() {
    let reducer = (accumulator, currentValue) => accumulator + currentValue;
    let sum = this._testScores.reduce(reducer, 0);
    return sum / this._testScores.length;
  }
}

class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy, testScores) {
    super(name);
    this._numberOfStudents = numberOfStudents;
    this._pickupPolicy = pickupPolicy;
    this._level = 'primary';
    this._schoolOverview = this.quickFacts();
    this._testScores = testScores;
    this._averageTestScores = this.average();
  }
  get pickupPolicy() {
    return this._pickupPolicy;
  }
  set pickupPolicy(policy) {
    this._pickupPolicy = policy;
  }
}

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams, testScores) {
    super(name);
    this._numberOfStudents = numberOfStudents;
    this._sportsTeams = sportsTeams;
    this._level = 'high';
    this._schoolOverview = this.quickFacts();
    this._testScores = testScores;
    this._averageTestScores = this.average();
  }
  get sportsTeams() {
    return this._sportsTeams;
  }
  set sportsTeams(sports) {
    this._sportsTeams = sports;
  }
}

let lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.', [77, 88, 67, 78, 79])
console.log(lorraineHansbury);
console.log(lorraineHansbury.quickFacts())
console.log(lorraineHansbury.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

console.log('\n')
let alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'], [55, 77, 88, 67, 54]);
console.log(alSmith);
console.log(alSmith.sportsTeams);

class MiddleSchool extends School {
  constructor(name, numberOfStudents, testScores) {
    super(name);
    this._numberOfStudents = numberOfStudents;
    this._level = 'middle';
    this._schoolOverview = this.quickFacts();
    this._testScores = testScores;
    this._averageTestScores = this.average();
  }
}

console.log('\n')
let hyde = new MiddleSchool('Hyde', 1054, [100, 97, 95, 90]);
console.log(hyde);


class SchoolCatalog {
  constructor() {
    this._collection = [];
  }
  get collection() {
    return this._collection;
  }
  set collection(schoolName) {
    this._collection.push(schoolName);
  }
};

let schoolIndexes = new SchoolCatalog();
schoolIndexes.collection = hyde;
schoolIndexes.collection = lorraineHansbury;
schoolIndexes.collection = alSmith;
console.log(schoolIndexes);

console.log(schoolIndexes._collection[0]._testScores);