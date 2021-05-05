class ShiftCipher {
  constructor(num) {
    this._num = num;
  }
  get num() {
    return this._num;
  }
  encrypt(string) {
    var results = '';
    for (var i=0; i <string.length; i++) {
      if ( (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) || (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) ) {
        let newCharCode = string.charCodeAt(i) + this.num;
        if (newCharCode > 90 && string.charCodeAt(i) < 91) {
          newCharCode = (newCharCode % 90) + 64;
        } else if (newCharCode > 122 && string.charCodeAt(i) > 96) {
          newCharCode = (newCharCode % 122) + 96;
        }
        let newShiftedLetters = String.fromCharCode(newCharCode);
        results += newShiftedLetters;
      } else {
        results += string[i];
      }
    }
    return results.toUpperCase();
  }
  decrypt(string) {
    var results = '';
    for (var i=0; i< string.length; i++) {
      if ( (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) || (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) ) {
        let newCharCode = string.charCodeAt(i) - this.num;
        if (newCharCode < 65 && string.charCodeAt(i) <=90) {
          newCharCode = 91 - (65 % newCharCode)
        } else if (newCharCode < 97 && string.charCodeAt(i) > 96) {
          newCharCode = 123 - (97 % newCharCode);
        }
        let newShiftedLetters = String.fromCharCode(newCharCode);
        results += newShiftedLetters;
      } else {
        results += string[i];
      }
    }
    return results.toLowerCase();
  }

};

const cipher = new ShiftCipher(2);
// console.log(cipher.encrypt('I love to code!'));
// returns 'K NQXG VQ EQFG!'
// console.log(cipher.encrypt('i <3 my puppy'));
// return 'K <3 OA RWRRA'

// console.log(cipher.decrypt('K <3 OA RWRRA'));
// console.log(cipher.decrypt('abc xyz'))
// // console.log(cipher.decrypt('OA RWRRA'))
// console.log(cipher.decrypt('oa rwrra!'))
// console.log(cipher.decrypt('K <3 OA RWRRA'));

// returns 'i <3 my puppy'

/*
console.log("A".charCodeAt(0)); // 65
console.log("Z".charCodeAt(0)); // 90

console.log("a".charCodeAt(0)); // 97
console.log("z".charCodeAt(0)); // 122
*/