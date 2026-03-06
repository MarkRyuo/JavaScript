

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



