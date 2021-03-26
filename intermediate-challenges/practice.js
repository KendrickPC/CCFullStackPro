const factorial = (int) => {
  if (int === 1) {
    return 1;
  }
  return factorial(int-1) * int;
}
console.log(factorial(6));

const subLength = (str, letter) => {
  var position1 = str.indexOf(letter);
  var position2 = str.indexOf(letter, position1 + 1);
  var position3 = str.indexOf(letter, position2 + 1);
  if (position1 === -1) {
    return 0
  } else if (position3 !== -1) {
    return 0
  } else {
    return position2 - position1 + 1;
  }
}
console.log(subLength('Saturday', 'a')); // returns 6
console.log(subLength('summer', 'm')); // returns 2
console.log(subLength('digitize', 'i'));
console.log(subLength('cheesecake', 'k'));
console.log(subLength('nose', 'z'));

// https://stackoverflow.com/questions/15069587/is-there-a-way-to-join-the-elements-in-an-js-array-but-let-the-last-separator-b
const groceries = (arr) => {
  let result = [];
  for (var food of arr) {
    result.push(food.item);
  }
  if (result.length === 1) {
    return result.join('')
  } else if (result.length === 2) {
    result.splice(result.length-1, 0,'and');
    return result.join(' ');
  } else {
    return result.slice(0, -1).join(', ')+' and '+result.slice(-1);
  }
}
console.log(groceries( [{item: 'Cheese Balls'}] ));
console.log(groceries( [{item: 'Bread'}, {item: 'Butter'}] ));
console.log(groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] ));

