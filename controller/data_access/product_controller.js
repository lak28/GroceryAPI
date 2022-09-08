const path = require("path");
const Product=require('../../model/product');

const mongoose = require("mongoose");



//Function to get all Products

module.exports.GetProduct =async function (req, res) {
    console.log( req.params);
      const result = await Product.find({});
      console.log(result);
      if(result.length > 0){
        res.status(200).send({
            Productlist:result
        })
      }else{
        res.status(204).send({
            message:"No customer registered"
        })
      };
    }


    
    //for creating products
module.exports.createProduct = function (req, res) {
    console.log('body',req.body);
    Product.create(
      { _id:mongoose.Types.ObjectId(),
        category: req.body.category,
        info: req.body.info,
        price:req.body.price,
        quantity:req.body.qty,
         created_at:Date.now(),
         modified_at:Date.now()},
      function (err, product) {
        if (err) {
          return res.status(500).send({
            message: "Error! Product is not created",
            data: err,
          });
        }
        if (product) {
          return res.status(200).send({
            message: "Product Created",
            data: product,
          });
        } else {
          return res.status(400).send ({
            message: "Product not created",
          });
        }
      }
    );
  };


  //API to update Product
  module.exports.updateProduct=function(req,res){
    Product.findById({ _id: req.params.id }, function (err, product) {
        if (err) {
            return res.status(404).send({
                message: "Error! Product not found",
                data: err,
              });
        }
    
        if (product) {
          const _category = req.body.category;
          const _info =req.body.info;
          const _price = req.body.price;
          const _quantity =req.body.quantity;
        
          Product.updateOne(
            { _id: req.params.id },
            { category:_category,
                info: _info,
                price:_price,
                quantity:_quantity,
                modified_at:Date.now()},
            function (err, product) {
              if (err) {
                return res.status(500).send({
                    message: "Error! Product not updated",
                    data: err,
                  });
              }
              return res.status(200).send({
                message: "Product Updated",
                data: product,
              });
            }
          );
        }else{
            return res.status(404).send({
                message: "Product not Found",
              });

        }
      });
  }

