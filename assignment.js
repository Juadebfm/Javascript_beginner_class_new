// Iterate 0 to 10 using for loop, do the same using while and do while loop
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// Iterate 10 to 0 using for loop, do the same using while and do while loop
// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }

// Iterate 0 to n using for loop
// const n = 40;
// for (let i = 1; i <= n; i++) {
//   console.log(i);
// }

//Write a loop that makes the following pattern using console.log():
// for (let i = 0; i <= 7; i++) {
//   console.log("#".repeat(i));
// }

//Use loop to print the following pattern:
// for (let i = 0; i <= 10; i++) {
//   console.log(`${i} x ${i} = ${i * i}`);
// }

//Using loop print the following pattern
// console.log("i    i^2   i^3");
// for (let i = 0; i <= 10; i++) {
//   console.log(`${i}   ${i ** 2}   ${i ** 3}`);
// }

// // Use for loop to iterate from 0 to 100 and print only even numbers
// for (let i = 2; i <= 100; i += 2) {
//   console.log(i);
// }

// Use for loop to iterate from 0 to 100 and print only odd numbers
// for (let i = 1; i <= 100; i += 2) {
//   console.log(i);
// }

// Use for loop to iterate from 0 to 100 and print only prime numbers
// function isPrime(num) {
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return num > 1;
// }

// for (let i = 0; i <= 100; i++) {
//   if (isPrime(i)) {
//     console.log(i);
//   }
// }

// Use for loop to iterate from 0 to 100 and print the sum of all numbers.
// let sum = 0;
// for (let i = 0; i <= 100; i++) {
//   sum = sum + i;
// }
// console.log(`The sum of all numbers from 0 - 100 is ${sum}`);

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
// let sumEven = 0;
// let sumOdd = 0;
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     sumEven += i;
//   } else {
//     sumOdd += i;
//   }
// }

// console.log(
//   `The sum of all even numbers from 0 - 100 is ${sumEven}. And The sum of all odd numbers from 0 - 100 is ${sumOdd}`
// );
