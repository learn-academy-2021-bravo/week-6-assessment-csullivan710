// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their names capitalized.

// // a) Create a test with an expect statement using the variable provided.
 

// describe("nameJob", () => {


   test("returns an array with a sentence about each person with their names capitalized", () => {


    expect(nameJob()).toEqual(["Ford Prefect is a hitchhiker.", 
    "Zaphod Beeblebrox is a president of the galaxy.", 
    "Arthus Dent is a radio employee."])
  })


var people = [
  { name: "ford prefect", occupation: "hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "radio employee" }
]
// // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is a president of the galaxy.", "Arthus Dent is a radio employee."]



// // b) Create the function that makes the test pass.

// Declare a function named nameJob
// input array of objects
const nameJob = (arrOfObj) => {
  //initiate  variable as a place holder
  let newSentence = []
//iterate through array and capitilize the first character in the name
  arrOfObj.forEach((obj) => {
    let capName = obj.name
//turn names into an array with split
    .split(" ")
    .map((strName) => {
//grab letter at index 0 and capitalize
      return `${strName[0].toUpperCase()}${strName.slice(1)}`
    })
//join words
    .join(" ")
//push into empty array
    newSentence.push(`${capName} is a ${obj.occupation}.`)
  })
//output a sentence
  return newSentence
}





// // --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// // a) Create a test with an expect statement using the variables provided.

var hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false];
// Expected output: [ 2, 0, -1, 0 ]
var hodgepodge2 = [5, "Hola", 43, -34, "greetings", true];
// Expected output: [ 2, 1, -1 ]

describe("num3", () => {
  test("should take in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
    expect(num3(hodgepodge1)).toEqual([2, 0, -1, 0]);
    expect(num3(hodgepodge2)).toEqual([2, 1, -1]);
  });
});

// b) Create the function that makes the test pass.

//create function to take in array of mixed data
const num3 = (arr) => {
  return arr
//oop through the array with map
    .map((elem) => {
  //check the data type currently being looped through
      if (typeof elem === "number") {
  //if it is a number do a % by 3 and only capture the result
        return elem % 3;
      }
    })
//then filter out the non-number data types
//return filtered array
    .filter((elem) => typeof elem === "number");
};

// // --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

var cubeAndSum1 = [2, 3, 4];
// Expected output: 99
var cubeAndSum2 = [0, 5, 10];
// Expected output: 1125

// a) Create a test with an expect statement using the variables provided.
describe("cubedSum", () => {
  test("should take in an array of numbers and returns the sum of all the numbers cubed.", () => {
    expect(cubedSum(cubeAndSum1)).toEqual(99);
    expect(cubedSum(cubeAndSum2)).toEqual(1125);
  });
});

// b) Create the function that makes the test pass.


//create a function that takes in an array of numbers
const cubedSum = (arrOfNums) => {
//create a variable that start with 0
  let sum = 0;
//map through the array
  arrOfNums.map((num) => {
//cube each number by 3 add the result the sum variable
    sum += num ** 3;
  });
//return the sum variable
  return sum;
};