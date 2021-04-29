class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }
  getAverageRating() {
    let reducer = (accumulator, currentValue) => accumulator + currentValue;
    let sum = this.ratings.reduce(reducer);
    let average = sum / this.ratings.length;
    return average.toFixed(1);
  }
  addRating(rating) {
    if (rating < 1 || rating > 5) {
      console.log("Please enter a rating between 1 and 5.")
    } else {
      this.ratings.push(rating);
    }
  }
  set isCheckedOut(value) {
    return value;
  }
}

class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
    
  }
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(title, director, runtime) {
    super(title);
    this._director = director;
    this._runtime = runtime;
    this._movieCast = [];
  }
  get director() {
    return this._director;
  }
  get runtime() {
    return this._runtime;
  }
  get movieCast() {
    return this._movieCast;
  }
  addCastMember(castMember) {
    this.movieCast.push(castMember);
  }
}

class CD extends Media {
  constructor(title) {
    super(title);
    this._tracks = [];
  }
  get tracks() {
    return this._tracks;
  }
  addTracks(song) {
    this.tracks.push(song);
  }
  // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  shuffle() {
    let cdArray = this.tracks;
    function shuffleArray(cdArray) {
      for (let i = cdArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [cdArray[i], cdArray[j]] = [cdArray[j], cdArray[i]];
      }
      return cdArray;
    }
    console.log(shuffleArray(cdArray));
    
  }

}

let historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4)
historyOfEverything.addRating(5)
historyOfEverything.addRating(5)
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Speed', 'Jan de Bont', 116)
const inception = new Movie('Inception', 'Christopher Nolan', 'N/A')
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1)
speed.addRating(1)
speed.addRating(5)

console.log(speed.getAverageRating());
speed.addCastMember('Nicolas Cage');
console.log(speed);

let bts = new CD("BTS FOREVER");
bts.addTracks(1)
bts.addTracks(2)
bts.addTracks(3)
bts.addTracks(4)
bts.addTracks(5)
bts.addTracks(6)
bts.addTracks(7)
bts.addTracks(8)
bts.addTracks(9)

console.log(bts.shuffle());

class Catalog {
  constructor() {
    this._collection = [];
  }
  get collection() {
    return this._collection;
  }
  set collection(media) {
    this._collection.push(media)
  }
};



const mediaLibrary = new Catalog();
mediaLibrary.collection = bts;
mediaLibrary.collection = speed;
mediaLibrary.collection = historyOfEverything;
mediaLibrary.collection = inception;
console.log(mediaLibrary);