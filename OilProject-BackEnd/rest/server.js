const express = require('express');
const cors = require('cors');
const addProductRoute = require('./routes/addProduct');
const removeProductRoute = require('./routes/removeProduct');
const sellProductRoute = require('./routes/sellProduct');
const configureStaticUploads = require('./routes/staticUploads');
const helloworld = require('./routes/helloworld');
const mysql = require('mysql2');
const db = require('./database');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

addProductRoute(app);
removeProductRoute(app);
sellProductRoute(app);
configureStaticUploads(app);
helloworld(app);

app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor rodando em http://0.0.0.0:${port}`);
});
