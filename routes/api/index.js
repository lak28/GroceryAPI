const express = require("express");

const router = express.Router();
//convert received data to json
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

//path to client
router.use("/customer", require("./customer"));
//path to user
router.use("/product", require("./product"));
router.use("/order", require("./order"));




module.exports = router;
