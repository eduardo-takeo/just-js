// Higher Order functions

//Functions that operate on other functions, either by taking them as arguments or by returning them

function sumTwoNumbers(a, b) {
  return a + b;
}

function sumTen(a) {
  return a + 10;
}

function sumTwoNumbersPlusTen(a, b) {
  return sumTen(a) + b;
}

const result = sumTwoNumbersPlusTen(10, 20);
console.log(result);
