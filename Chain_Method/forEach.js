

// If we change the original array; 
let prices = [2,4,6,8,10,12];

prices.forEach(function(price, index, arr){
    arr[index] = price * 0.5;
});

console.log(prices, typeof prices);


// If dont want to change the original value 

let newDiscount = [] ;

prices.forEach(function(price){
    newDiscount.push(price * 0.5);
});

console.log(`New Discount ${newDiscount}`);


