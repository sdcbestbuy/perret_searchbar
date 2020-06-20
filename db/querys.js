const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'duckDuckGoose',
  database: 'bestbuy_db'
});

connection.connect();

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