

/** 
 * Test 01: Double the Number 
 */

const arr = [1, 2, 3, 4, 5];

const newArr = arr.map((array) => {
    // logic 
    return array * 2 ;
})

console.log(newArr);

// Ouput : [2, 4, 6, 8, 10]; 


/**
 * Test 02: Convert Names to Uppercase
 */

const names = ["jhon", "mark", "moda"];

// Using the map can we transform the names to uppercase 
const upperNames = names.map((name) => {
    return name.toUpperCase()
});

console.log(upperNames);

// Output: ["JHON", "MARK", "MODA"]

/**
 * Test 03
 * Add "Hello" Before Each Name
 * Add "Hello " before every name.
 */

const addToNames = names.map((name) => {
    // Each name has a Hello in the first 
    return `Hello ${name}`;
});

console.log(addToNames)

// Ouput ["Hello jhon", "Hello mark", "Hello moda" ];


/**
 * 
 * Test04
 * Get String Lengths
 * Return the length of each word
 * 
 */

const words = ["sun", "galaxy", "star"];

const wordsCount = words.map((word) => {
    return word.length;
}) 

console.log(wordsCount)


/**
 * Test 05
 * Convert Numbers to Strings
 * Turn numbers into strings.
 */

const numbers = [1, 2, 3];

const convertNumbersToStr = numbers.map((number) => number.toString())

console.log(convertNumbersToStr);


/**
 * Test 06 
 * 
 */