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

