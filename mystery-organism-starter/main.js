// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

let randomBase = returnRandBase();
let randomStrand = mockUpStrand();
let randomStrand2 = mockUpStrand();
const pAequorFactor = (num, arr) => {
  return {
    specimenNum: num,
    dna: arr,
    mutate() {
      let randomNum = Math.floor(Math.random()*15);
      while (randomBase === arr[randomNum]) {
        randomBase = returnRandBase();
      }
      if (randomBase !== arr[randomNum]) {
        arr.splice(randomNum, 1, randomBase)
      }
      return arr;
    },
    compareDNA() {
      var score = 0;
      for (var i=0; i<randomStrand.length;i++) {
        if (randomStrand[i] === randomStrand2[i]) {
          score += 1;
        }
      }
      var percentage = ((score/randomStrand.length) * 100).toFixed(2);
      return `specimen #1 and specimen #2 have %${percentage} DNA in common`
    },
    willLikelySurvive() {
      var sumOfCytosineAndGuanine = 0;
      for (dnaBase of arr) {
        if (dnaBase === 'C' || dnaBase === 'G') {
          sumOfCytosineAndGuanine += 1
        }
      }
      var percentage = sumOfCytosineAndGuanine/arr.length
      if (percentage >= 0.6) {
        return true;
      } else {
        return false;
      }
    }
  }
};

// 30 DNA strands that will likely survive in their natural environment.
var surviverStrands = [];
while (surviverStrands.length < 30) {
  var testStrand = mockUpStrand();
  if (pAequorFactor(1, testStrand).willLikelySurvive() === true) {
    surviverStrands.push(testStrand);
  } 
}

// console.log(surviverStrands);
// console.log(surviverStrands.length);



