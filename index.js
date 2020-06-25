"use strict";

var express = require('express');

var app = express();

var cors = require('cors');

var _require = require('./db/querys'),
    getAllProdcuts = _require.getAllProdcuts;

var port = process.env.PORT || 3001; //Middleware

app.use(express["static"]("./client/dist"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
})); //Routes

app.get('/api/get/products', function (req, res) {
  getAllProdcuts(function (err, products) {
    if (err) {
      console.log("err in server");
      res.sendStatus(404);
    } else {
      console.log("sucessful retrival of all products");
      res.status(200).send(products);
    }
  });
});
app.listen(port, function () {
  console.log("SearchBar listening on port:".concat(port));
});
