const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
  {
  image: { type: String, required: true },
name: { type: String, required: true },
    
    price:{type: Number, required: true},
    discount:{type: Number, required: true},
    rating:{type: Number, required: true},
    id:{type:Number}
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Product = mongoose.model('product', productSchema);
module.exports = Product;