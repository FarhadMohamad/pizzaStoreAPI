const { pizzas } = require('../data/pizzas');

exports.calcOrder = (pizzaID, size, quantity) => {
const pizzaIDnumber = parseInt(pizzaID);
const quantityNumber = parseInt(quantity);
const picos = pizzas[0];
const pizza = picos[pizzaIDnumber];
console.log(pizza.sizes[size]);
let total = pizza.sizes[size] * quantityNumber;

    return total;
};