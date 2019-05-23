const Order = require('../models/order');
const User = require('../models/user');
const pizzas = require('../data/pizzas');
const { validationResult } = require('express-validator/check');


exports.getPizzas = (req, res, next) => {
  return res.json(pizzas.pizzas);
}
exports.createOrder = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error('Validation failed, entered data is incorrect.');
    error.statusCode = 422;
    throw error;
  }
  const order = new Order({
      creator: req.userId,
      size: req.body.size,
      address: req.body.address,
      dip: req.body.dip,
      quantity:req.body.quantity,
      total: "total"

  });
  order
    .save()
    .then(result => {
      
      return User.findById(req.userId);
    })
    .then(user => {
        console.log(req.userId)
      creator = user;
      user.orders.push(order);
      return user.save();
    })
    .then(result => {
      res.status(201).json({
        message: 'order created successfully!',
        order: order
      });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};




