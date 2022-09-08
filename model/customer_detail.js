//Database model of Customer

const mongoose = require("mongoose");
//schema of customer
const customerDetailSchema = new mongoose.Schema(
  {
    _id: {
        type: mongoose.Schema.Types.ObjectId,
      },

    name :String,

    email:String,

    phoneNo:String,

      created_at: {
       type: Date,
       default:Date.now()
    }

  },
  {
    timeStamps: true,
  }
);

const CustomerDetail = mongoose.model("CustomerDetail", customerDetailSchema);

module.exports = CustomerDetail;