const express = require('express');
const app = express();
const cors = require('cors');
const { getAllProdcuts } = require('./db/querys');
const port = process.env.PORT || 3001;

//Middleware
app.use(express.static("./client/dist"));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Routes
app.get('/api/get/products', (req, res) => {
  getAllProdcuts((err, products) => {
    if(err){
      console.log("err in server");
      res.sendStatus(404);
    } else {
      console.log("sucessful retrival of all products");
      res.status(200).send(products);
    }
  });
});

app.listen(port, () => {
 console.log(`SearchBar listening on port:${port}`);
});