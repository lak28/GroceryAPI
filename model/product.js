//Database model of products

const mongoose = require("mongoose");
//schema of products
const productSchema = new mongoose.Schema(
  {
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required:true
      },
  

      category :String,

      info:String,

      price:Number,
      quantity:Number,

      created_at: {
       type: Date,
       default:Date.now()
    },
    modified_at: {
        type: Date,
        default:Date.now()
     }

  },
  {
    timeStamps: true,
  }
);

const Product = mongoose.model("Product",productSchema);

module.exports = Product;