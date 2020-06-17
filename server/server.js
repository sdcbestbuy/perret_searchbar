const express = require('express');
const app = express();
const cors = require('cors');

//Middleware
app.use(express.static("./client/dist"));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


const port = 8008;
app.listen(port, () => {
 console.log(`SearchBar listening on port:${port}`);
});