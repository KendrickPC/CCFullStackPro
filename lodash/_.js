var _ = { 
  clamp(number, lower, upper) {
    if (number >= upper) {
      return upper;
    } else if (number <= lower) {
      return lower;
    } else {
      return number;
    }
  },
  inRange(number, start, end) {
    if (end === undefined) {
      end = start
      start = 0;
    }
    if (start > end) {
      var temp_start = start;
      var temp_end = end;
      start = temp_end;
      end = temp_start;
    }
    if (number >= start && number < end) {
      return true;
    } else {
      return false;
    }
  },
  words(str) {
    return str.split(' ')
  },
  // https://stackoverflow.com/questions/25828924/javascript-adding-white-space-to-left-of-string
  pad(str, target) {
    if (str.length > target) {
      return str
    }
    var paddingToAdd = target - str.length;
    var padToFrontAmount = Math.floor(paddingToAdd/2);
    var padToEndAmount = Math.ceil(paddingToAdd/2);
    
    let newString = '';
    newString += (' '.repeat(padToFrontAmount)) + str + (' '.repeat(padToEndAmount));
    return newString; 
  },
  has(object, key) {
    if (object[key] !== undefined) {
      return true;
    } else {
      return false;
    }
  },
  invert(object) {
    var newObj = {};
    for (key in object) {
      var originalValue = object[key]
      newObj[originalValue] = key;
    }
    return newObj;
  },
  findKey(obj, predicateFunc) {
    for (var key in obj) {
      var result = predicateFunc(obj[key])
      if (result === true) {
        return key;
      } else {
        return undefined;
      }
    }
  },
  drop(arr, n) {
    if (n === undefined) {
      n = 1;
    }
    let droppedArray = arr.slice(n, arr.length);
    return droppedArray
  },
  dropWhile(arr, predicateFunc) {
    let cb = (element, index) => {
      return !predicateFunc(element, index, arr);
    }
    let dropNumber = arr.findIndex(cb);
    let droppedArray = this.drop(arr, dropNumber);
    return droppedArray;
  },
  // https://stackoverflow.com/questions/7273668/how-to-split-a-long-array-into-smaller-arrays-with-javascript
  chunk(arr, size) {
    var result = [];
    if (size === undefined) {
      size === 1;
    }
    while(arr.length) {
      result.push(arr.splice(0, size));
    }
    return result;
  }

};






// Do not write or modify code below this line.
module.exports = _;