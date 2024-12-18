const express = require('express');
const cors = require('cors');
const addProductRoute = require('./routes/addProduct');
const outflowProductRoute = require('./routes/outflowProduct');
const sellProductRoute = require('./routes/sellProduct');
const registerProductRoute = require('./routes/registerProduct');
const relatoryProductRoute = require('./routes/relatoryProduct');
const deleteProductRoute = require('./routes/deleteProduct');
const helloworld = require('./routes/helloworld');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

addProductRoute(app);
outflowProductRoute(app);
sellProductRoute(app);
registerProductRoute(app);
relatoryProductRoute(app);
deleteProductRoute(app);
helloworld(app);

app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor rodando em http://0.0.0.0:${port}`);
});
