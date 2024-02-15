// Create a Constructor function for product. Each product has property: name, category (string), hasDiscount (bool) and price. Create an array of 15 products. Now answer the following requirements:

function Product(name, category, hasDiscount, price) {
    this.name = name;
    this.category = category;
    this.discount = hasDiscount;
    this.price = price;
}

let products = [
    new Product("Bread", "Food", false, 4),
    new Product("Cheese", "Food", true, 30),
    new Product("Yogurt", "Food", false, 3),
    new Product("Eggs", "Food", false, 5),
    new Product("Beef", "Food", true, 80),
    new Product("Apple", "Food", true, 1),
    new Product("Bannana", "Food", true, 2),
    new Product("Shampoo", "Cosmetics", false, 20),
    new Product("Face cream", "Cosmetics", true, 70),
    new Product("Eye cream", "Cosmetics", false, 25),
    new Product("Face mask", "Cosmetics", true, 35),
    new Product("Bag", "Accessories", true, 100),
    new Product("Scarf", "Accessories", true, 50),
    new Product("Umbrella", "Accessories", false, 40),
    new Product("Earings", "Accessories", false, 200),
    new Product("Necklace", "Accessories", false, 350),
];

// Find all products with price greater than 20.
console.log("Products with price greater than 20:");
products.filter(product => product.price > 20).forEach(p => console.log(p.name));

// Get the names of all products of Category Food, that are on discount.
console.log("Products of category Food, that are on discount:");
products.filter(product => product.category === "Food" && product.discount === true).forEach(p => console.log(p.name));

// Get the price of all products that are on discount.
console.log("Price of all products that are on discount:");
console.log(products.filter(product => product.discount === true).map(product => product.price));

// Find the name and price of all products with name starting with a vowel, that are not on discount.
console.log("Name and price of all products with name starting with a vowel, that are not on discount");
products.filter(product => product.discount === false && ["A", "E", "I", "O", "U"].includes(product.name.charAt(0))).forEach(p => console.log(`${p.name} ${p.price}$`));