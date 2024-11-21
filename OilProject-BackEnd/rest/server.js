const express = require('express');
const cors = require('cors');
const addProductRoute = require('./routes/addProduct');
const configureStaticUploads = require('./routes/configureStaticUploads');
const mysql = require('mysql2');
const db = require('database.js'); 

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

addProductRoute(app);
configureStaticUploads(app);

app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor rodando em http://0.0.0.0:${port}`);
});
