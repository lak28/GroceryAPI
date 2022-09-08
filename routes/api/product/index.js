const express = require("express");

const router = express.Router();
const postsApi = require("../../../controller/data_access/product_controller");
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

//route to fetch products list
router.get("/", function (req, res) {
  console.log("router req", req.body);
  postsApi.GetProduct(req, res);
});

//route to create new product
router.post("/new", function (req, res) {
    console.log("router req", req.body);
    postsApi.createProduct(req, res);
  });

  //route to send notifications
router.put("/:id", function (req, res) {
    console.log("router req", req.body);
     postsApi.updateProduct(req, res);
  });


module.exports = router;