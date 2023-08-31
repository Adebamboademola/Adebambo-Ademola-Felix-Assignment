// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};

/**
 * @param {Number} destination is the stopping number
 * @returns number the sum of the numbers from 1 to destination
 */
function sumOfNumbersTo(destination) {
  let sum = 0;

  for (let i = 1; i <= destination; i++) {
    sum += i;
  }

  return sum;
}

assignment.sumOfNumbersTo = sumOfNumbersTo;

// Usage example:
const destination = 10;
const sum = assignment.sumOfNumbersTo(destination);
console.log(`Sum of numbers from 1 to ${destination} is: ${sum}`);


// assignment.sumOfNumbersTo = sumOfNumbersTo;

/**
 * Challenge - 2
 *
 * Calculate count, sum and put in an array the even numbers from 1 to a destination. Object keys are count, sum, arrayOfEvenNumbers.
 *
 * If you did Challenge - 2, remove the comment in the line just after this function
 *
 * @param {Number} destination the stopping number
 * @returns the object containing count, sum, arrayOfEvenNumbers from 1 to destination
 */
function countEvenNumbersWithin(destination) {
    let sum = 0;
    let count = 0;
    let arrayOfEvenNumbers = [];
  
    for (let i = 1; i <= destination; i++) {
      if (i % 2 === 0) {
        arrayOfEvenNumbers.push(i);
        sum += i;
        count++;
      }
    }
  
    return {
      count,
      sum,
      arrayOfEvenNumbers
    };
  }
  
  assignment.countEvenNumbersWithin = countEvenNumbersWithin;
  
  const destination1 = 10;
  const result1 = assignment.sumOfNumbersTo(destination1);
  console.log(`Challenge 1: Sum of numbers from 1 to ${destination1} is ${result1}`);
  
  const destination2 = 20;
  const result2 = assignment.countEvenNumbersWithin(destination2);
  console.log(`Challenge 2: Even numbers from 1 to ${destination2} - Count: ${result2.count}, Sum: ${result2.sum}, Array: ${result2.arrayOfEvenNumbers}`);


// assignment.countEvenNumbersWithin = countEvenNumbersWithin;

/**
 * Challenge - 3
 *
 * Given an array of numbers representing temperatures in Celsius,
 * convert each number to Fahrenheit and return a new array containing the converted
 * temperatures in Fahrenheit. Decimal figures in the converted values in Fahrenheit should be removed.
 * E.g 51.21 should just be 51 (hint: Math.trunc(...) function)
 *
 * If you did Challenge - 3, remove the comment in the line just after this function
 *
 * See https://www.thoughtco.com/celcius-to-farenheit-formula-609227 for the conversion formula
 *
 * @param {Array} arrayOfNumbers the array containing temperatures in Celsius to be converted
 * @returns Array the converted temperatures in Fahrenheit
 */
function celsiusToFahrenheit(arrayOfNumbers) {
    let result = [];

    return result;
}

// assignment.celsiusToFahrenheit = celsiusToFahrenheit;

// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================
