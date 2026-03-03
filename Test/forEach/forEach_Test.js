

// Part 1 
// Print Everything 

const fruits = ["apple", "banana", "mango", "orange"];

fruits.forEach(function(fruit, index, arr){
    console.log(arr[index] = index + ":" + fruit)

});



/**
 *
 * This is the ouput we need: 
0: apple
1: banana
2: mango
3: orange
 * 
 * 
 */