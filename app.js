//Main server file
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerDocument = require("./config/swagger.json");

app.listen(port, () => {
  console.log("listening on port", port);
});


const db = require('./config/mongoose');

// use express router
app.use("/", require("./routes"));



//convert received data to JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/apiDocs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
