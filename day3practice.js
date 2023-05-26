
//swapping numbers
let ar= [1, 2, 3, 4, 5, 6];

for (let i = 0; i < ar.length ; i += 2) {
  let temp = ar[i];
  ar[i] = ar[i + 1];
  ar[i + 1] = temp;
}

console.log(a);

//counting 0 and 1 in an Array


function countZeroesOnes(a) {
  let countZero = 0;
  let countOne = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] === 0) {
      countZero++;
    } else if (a[i] === 1) {
      countOne++;
    }
  }

  return { countZero, countOne };
}

let arrayi = [0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0];
let counts = countZeroesOnes(arrayi);
console.log("Count of 0:", counts.countZero);
console.log("Count of 1:", counts.countOne);


// divisible 2 and 5


function isDivisibleByTwoAndFive(number) {
  if (number % 2 === 0 && number % 5 === 0) {
    return true;
  } else {
    return false;
  }
}

let numb1 = 10;
let numb2 = 15;

console.log(num1 + " is divisible by 2 and 5:", isDivisibleByTwoAndFive(num1));
console.log(num2 + " is divisible by 2 and 5:", isDivisibleByTwoAndFive(num2));


// divisible by 5 number 

function isDivisibleByFive(number) {
  return number % 5 === 0;
}

let numbe1 = 10;
let numbe2 = 15;

console.log(num1 + " is divisible by 5:", isDivisibleByFive(numbe1));
console.log(num2 + " is divisible by 5:", isDivisibleByFive(numbe2));

//divisible by 5

 function isDivisibleByFive(number) {
  return number % 5 === 0;
}

let num1 = 10;
let num2 = 15;

console.log(num1 + " is divisible by 5:", isDivisibleByFive(num1));
console.log(num2 + " is divisible by 5:", isDivisibleByFive(num2));

// array [5,10,15,65,25,21,41,87,3,6,60,85]


function printNumbersDivisibleByFive(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 5 === 0) {
      console.log(array[i]);
    }
  }
}

let numbers = [5, 10, 15, 65, 25, 21, 41, 87, 3, 6, 60, 85];
printNumbersDivisibleByFive(numbers);


// write a function in javascript of array=[1,2,3,-3,-5,-6,-7] replace negative numbers with 0

function replaceNegativeWithZero(arra) {
  for (let i = 0; i < arra.length; i++) {
    if (arra[i] < 0) {
      arra[i] = 0;
    }
  }
}

let arra = [1, 2, 3, -3, -5, -6, -7];
replaceNegativeWithZero(arra);
console.log(arra);

//array counting how many positive numbers

function countPositiveNumbers(arr) {
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if (arr[i] > 0) {
      count++;
    }
  }

  return count;
}

let arr= [0, 1, 2, -2, -5, -8, 6, 4, -8, -7, -9, -6];
let positiveCount = countPositiveNumbers(arr);
console.log("Number of positive numbers:", positiveCount);


//simple interst 

function calculateSimpleInterest(principal, rate, time) {
  let interest = (principal * rate * time) / 100;
  return interest;
}

let principalAmount = 1000;
let interestRate = 5;
let timePeriod = 2;

let simpleInterest = calculateSimpleInterest(principalAmount, interestRate, timePeriod);
console.log("Simple Interest:", simpleInterest);


// compound interst


function calculateCompoundInterest(principal, rate, time, frequency) {
  let compoundInterest = principal * Math.pow((1 + rate / frequency), (frequency * time)) - principal;
  return compoundInterest;
}

let principalAmount = 1000;
let interestRate = 5;
let timePeriod = 2;
let compoundingFrequency = 12;

let compoundInterest = calculateCompoundInterest(principalAmount, interestRate, timePeriod, compoundingFrequency);
console.log("Compound Interest:", compoundInterest);


//area of circle
function calculateCircleArea(radius) {
  let area = Math.PI * Math.pow(radius, 2);
  return area;
}

let radius = 5;

let circleArea = calculateCircleArea(radius);
console.log("Area of the circle:", circleArea);


//average of 3 numbers

function calculateAverage(num1, num2, num3) {
  let sum = num1 + num2 + num3;
  let average = sum / 3;
  return average;
}

let number1 = 10;
let number2 = 20;
let number3 = 30;

let average = calculateAverage(number1, number2, number3);
console.log("Average:", average);


// max number between 2 numbers


function findMaxNumber(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

let number1 = 10;
let number2 = 20;

let maxNumber = findMaxNumber(number1, number2);
console.log("Maximum number:", maxNumber);







