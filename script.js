// function findLargest(arr) {
//   let smallst = arr[0]; // Step 1/

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < smallst) {
//       smallst = arr[i]; // Step 3
//     }
//   }

//   return smallst;
// }

// const numbers = [3, 7, 2, 9, 5];
// console.log(findLargest(numbers)); // Output: 9
// // findLargest(numbers); // Output: 9
// // console.log("Admin");

// Problem: Find the sum of all numbers in an array.
// Input: [1, 2, 3, 4] → Output: 10

function findSum(arr) {
  let sum;

  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);

    sum += arr[i];
    console.log(sum);
  }

  return sum;
}

const numbers = [1, 2, 3, 4];
findSum(numbers);
