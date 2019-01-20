// Import Database Models
const db = require("../models");

//Syncing our sequelize models
db.sequelize.sync().then(function () {
  db.product.bulkCreate([{

  product_name: "Camera",
  department_name: "Electronics",
  price: 99.50,
  stock_quantity: 19
},
{
  product_name: "Chrome Book 19 inch",
  department_name: "Electronics",
  price: 299.00,
  stock_quantity: 50
},
{
  product_name: "Radar Pro",
  department_name: "Electronics",
  price: 199.99,
  stock_quantity: 35
},
{
  product_name: "Private Advisor",
  department_name: "Books",
  price: 7.99,
  stock_quantity: 110
},
{
  product_name: "Synthetic Engine Oil 5W-40 1 Quart",
  department_name: "Auto",
  price: 27.00,
  stock_quantity: 40
},
{
  product_name: "Windshield Wiper driver side",
  department_name: "Auto",
  price: 29.00,
  stock_quantity: 38
},
{
  product_name: "Frozen Toy set",
  department_name: "Entertainment",
  price: 195.98,
  stock_quantity: 10
},
{
  product_name: "Monopoly Board Game",
  department_name: "Entertainment",
  price: 14.99,
  stock_quantity: 15
},
{
  product_name: "Riding Lawn Mower",
  department_name: "Home Goods",
  price: 299.00,
  stock_quantity: 5
},
{
  product_name: "Paint Mixer",
  department_name: "Home Goods",
  price: 55.99,
  stock_quantity: 35
}
]).then(function (data) {
  console.log('Data successfully added!');
}).catch(function (error) {
  console.log('Error', error)
});
});