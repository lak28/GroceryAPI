const path = require("path");
const CustomerDetail=require('../../model/customer_detail');
const Order=require('../../model/order');
const OrderList=require('../../model/order_list');
const mongoose = require("mongoose");



//Function to get all customers

module.exports.GetCustomer =async function (req, res) {
    console.log( req.params);
      const result = await CustomerDetail.find({});
      console.log(result);
      if(result.length > 0){
        res.status(200).send({
            list:result
        })
      }else{
        res.status(204).send({
            message:"No customer registered"
        })
      };
    }




 //function to get a single user by its ID   
module.exports.GetCustomerById =async function (req, res) {
var userId = req.params.id ;
   if(userId.length === 24){
    const result = await CustomerDetail.findById({ _id: req.params.id });
      console.log(result);
      if(result!=null){
        res.status(200).send({
            Customer:result
        })
      }else{
        res.status(404).send({
            message:"Customer not found"
        })
      };
    }else{
        res.status(400).send({
            message:"Invalid customer Id"
        })
    }
    }


    //for creating questions
module.exports.createCustomer = function (req, res) {
    console.log('body',req.body);
    CustomerDetail.create(
      { _id:mongoose.Types.ObjectId(),
        name: req.body.name,
         email: req.body.email,
         phoneNo:req.body.phoneNo,
         created_at:Date.now()},
      function (err, customer) {
        if (err) {
          return res.status(500).send({
            message: "Error! Customer is not created",
            data: err,
          });
        }
        if (customer) {
          return res.status(200).send({
            message: "Customer Created",
            data: customer,
          });
        } else {
          return res.status(400).send ({
            message: "Customer not created",
          });
        }
      }
    );
  };



 //function to get a single user by its ID   
 module.exports.GetOrderByCustomerId =async function (req, res) {
    var userId = req.params.id ;
       if(userId.length === 24){
        const result = await Order.find({c_id:req.params.id});
          console.log(result);
          if(result!=null){
            res.status(200).send({
                Order:result
            })
          }else{
            res.status(404).send({
                message:"Order not found"
            })
          };
        }else{
            res.status(400).send({
                message:"Invalid customer Id"
            })
        }
        }


        module.exports.GetMaxOrder =async function (req, res) {
            console.log('inside ');
                const result = await OrderList.aggregate([ {"$addFields":{"ordersize":{"$size":"$order"}}},
                {"$sort":{"ordersize":-1}},
                {"$facet":{"maxordersize":[{"$limit":1}]}}
            ]);
                  console.log(result);
                  console.log('cid',result[0].maxordersize[0].c_id.toString());
                  if(result!=null){
                    var cust_id=result[0].maxordersize[0].c_id.toString();
               
                        const data = await CustomerDetail.findById({ _id:cust_id});
                          console.log(data);
                          if(data!=null){
                            res.status(200).send({
                                Customer:data
                            })
                          }else{
                            res.status(404).send({
                                message:"Customer not found"
                            })
                          };
                     
                  }else{
                    res.status(404).send({
                        message:"no orders list available"
                    })
                  };
                }
                