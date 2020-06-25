const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : process.env.RDS_HOSTNAME,
  user     : process.env.RDS_USERNAME,
  password : process.env.RDS_PASSWORD,
  port     : process.env.RDS_PORT,
  database : process.env.RDS_DB_NAME
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