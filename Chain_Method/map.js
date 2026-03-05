

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


const discounts = products.map((product) => {
    if(product.price > 0.5)
    return {
        ...product,
        price: product.price * 0.5,
    };
});

//console.log(discounts);

const newProduct = products.map((product) => {
    let category ;
    let newPrice = product.price * 0.5;
    if(newPrice >= 20000){
        category = "High";
    }else if(newPrice >= 10000){
        category = "Mid";
    }else {
        category = "Low";
    }
    return {
        ...product,
        price: newPrice,
        category: category
    }
})

console.log(newProduct)