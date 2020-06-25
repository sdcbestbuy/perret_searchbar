const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'duckDuckGoose',
  database: 'bestbuy_db',
  port: 3306
});

connection.connect((err) => {
  if(err){
    console.log("error connectiong to db", err);
  } else {
    console.log("connected to db");
  }
});

const getAllProdcuts = (cb) => {
  connection.query('SELECT * FROM products', (err, data) => {
    if(err){
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};

//REMEBER TO ESCAPE USER INPUTS BEFORE EXPORTING
module.exports = {
  getAllProdcuts
};