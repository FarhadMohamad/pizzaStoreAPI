const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var PizzaSchema = new mongoose.Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  }
});


var Pizza = mongoose.model('Pizza', PizzaSchema);
module.exports = Pizza;

