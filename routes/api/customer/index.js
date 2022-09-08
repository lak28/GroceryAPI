const express = require("express");

const router = express.Router();
const postsApi = require("../../../controller/data_access/customer_controller");
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

//route to fetch customer list
router.get("/", function (req, res) {
  console.log("customerList", req.body);
  postsApi.GetCustomer(req,res);
});

//route to fetch customer by its ID
router.get("/:id", function (req, res) {
  console.log("customerList", req.body);
  postsApi.GetCustomerById(req,res);
});

 //route to create new customer
    router.post("/new", function (req, res) {
      console.log("customerList", req.body);
      postsApi.createCustomer(req, res);
    });


//route to fetch specific customer order list
router.get("/order/:id", function (req, res) {
    console.log("customerList", req.body);
    postsApi.GetOrderByCustomerId(req,res);
  });







module.exports = router;