const express = require("express");

const router = express.Router();


console.log("Router loaded");
//convert received data to JSON
router.use(express.json());
router.use(express.urlencoded({ extended: false }));
//path to api
router.use("/api", require("./api"));


// router.get('/',homeController.home);
// router.use('/users',require('./users'));

module.exports = router;
