const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var OrderSchema = new mongoose.Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  size: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  pizzaID: {
    type: String,
    required: true,
  },
  dip: {
    type: String,
    required: true,
  },
  total: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  createdOn: {
    type: String,
    required: true,
    type : Date,
    default: Date.now
   }
});


var Order = mongoose.model('Order', OrderSchema);
module.exports = Order;

