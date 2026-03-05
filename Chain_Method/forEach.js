

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


const products = [
  { name: "Laptop", price: 55000, color: "Silver" },
  { name: "Smartphone", price: 25000, color: "Black" },
  { name: "Headphones", price: 3500, color: "White" },
  { name: "Keyboard", price: 1200, color: "Black" },
  { name: "Mouse", price: 800, color: "Gray" },
  { name: "Monitor", price: 9000, color: "Black" },
  { name: "Tablet", price: 18000, color: "Gold" },
  { name: "Speaker", price: 2200, color: "Blue" },
  { name: "Webcam", price: 1500, color: "Black" },
  { name: "Microphone", price: 2700, color: "Red" },
  { name: "Power Bank", price: 1300, color: "White" },
  { name: "Smartwatch", price: 7000, color: "Space Gray" }
];

products.forEach((product, index, arr) => {
    let category;

    if(product.price >= 20000){
        category = "High";
    }else if(product.price >= 10000){
        category = "Mid";
    }else {
        category = "Low";
    }

    return {
        ...product,
        category: category
    }
})


console.log(products)