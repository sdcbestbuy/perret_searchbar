const express = require('express');
const app = express();
const cors = require('cors');
const { getAllProdcuts } = require('../db/querys');


//Middleware
app.use(express.static("./client/dist"));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Routes
app.get('/api/get/products', (req, res) => {
    console.log(req.body);
  getAllProdcuts((err, products) => {
    if(err){
      console.log("err in server");
      res.status(404).send(err);
    } else {
      console.log("sucessful retrival of all products");
      res.status(200).send(products);
    }
  });
});


const port = 8008;
app.listen(port, () => {
 console.log(`SearchBar listening on port:${port}`);
});