const num = 100;
console.log("Before:", num);

const numExpo = num.toExponential(3);
console.log("After - exponential:", numExpo);

const numFloat = num.toPrecision(6);
console.log("After - 6 digits:", numFloat);

const numString = num.toString;
console.log("After - convert to string, check if not a number:", isNaN(numString));