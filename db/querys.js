const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '70.121.184.146',
  user: 'root',
  password: 'duckDuckGoose',
  database: 'bestbuy_db',
  port: 3001
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