var arr1 = [1, 2, 3, 4, 5, 7, 8, 9, 10, ]
var arr2 = [1, 2, 3, 4, 6, 77, 88, 9, 100]

var score = 0;

for (var i=0; i<arr1.length; i++) {
  for (var j=0; j<arr2.length; j++) {
    if (arr1[i] === arr2[j]) {
      score +=1
    }
  }
}
console.log(score);