const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  products: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
      stock: { type: Number, },
      productImage: { type: String },
      color: { type: String },
      size: { type: String },
      brand: { type: String },
      category: { type: String },
      name:{type:String},
      couponDiscount : {type:Number},
      offerPrice:{type:Number},
    }
  ],
  Amount:{type:Number,default:0 },
  totalPrice: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
},{timestamps : true});

module.exports = mongoose.model('Cart', cartSchema);
