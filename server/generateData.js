var faker = require('faker');
var database = { products: [] };
for(var i=1;i<100;i++){
    database.products.push({
        id:i,
        name:faker.commerce.productName(),
        description:faker.commerce.productDescription(),
        price:faker.commerce.price(),
        imageUrl:"https://loremflickr.com/320/240/",
        quantity:faker.datatype.number()
    })
}
console.log(JSON.stringify(database));