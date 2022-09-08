const express = require("express");

const router = express.Router();
const postsApi = require("../../../controller/data_access/customer_controller");
router.use(express.json());
router.use(express.urlencoded({ extended: false }));


  //route to fetch customer details with max orders
router.get("/max", function (req, res) {
    console.log("customerList", req.body);
     postsApi.GetMaxOrder(req, res);
  });




module.exports = router;