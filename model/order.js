//model of order

const mongoose = require("mongoose");

//schema for order
const orderSchema = new mongoose.Schema(
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            required:true
          },
          c_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref:"CustomerDetail",
            required:true
          },
      products: [
        { 
          type: mongoose.Schema.Types.ObjectId,
          ref: "Options",
        },
      ],
      total_price: {
        type: Number,
      },
      payment_info: {
        type: String,
      },
      
      ordered_at: {
        type: Date,
        default:Date.now()
     },
    },
    {
      timestamps: true,
    }
  );
  

  
const Order = mongoose.model("Order",orderSchema);

module.exports = Order;