
//Model of orders list
const mongoose = require("mongoose");

//schema for orders list
const orderListSchema = new mongoose.Schema(
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
      orders: [
        { 
          type: mongoose.Schema.Types.ObjectId,
          ref: "Options",
        },
      ],
  
    },
    {
      timestamps: true,
    }
  );
  

  
const OrderList = mongoose.model("OrderList",orderListSchema);

module.exports = OrderList;