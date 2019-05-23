const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order');
const isAuth = require('../middleware/isAuth');

router.get('/getall', orderController.getPizzas);
router.post('/createOrder',isAuth, orderController.createOrder);


module.exports = router;



