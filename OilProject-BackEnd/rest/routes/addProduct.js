const multer = require('multer');
const { addProduct } = require('./functions/queries.js'); 

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});

const upload = multer({ storage });

module.exports = function (app) {
  app.post('/addProduct', upload.single('imageNF'), (req, res) => {
    const { file } = req;
    const { loja, marca, quantidade, preco, unit, dataHora } = req.body;
    console.log(req.body);
    
    if (!file || !loja || !marca || !quantidade || !preco || !unit || !dataHora) {
      return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
    }

    const productData = {
      loja,
      marca,
      quantidade,
      preco,
      unit,
      dataHora,
      imageNF: file.path
    };

    addProduct(productData, (err) => {
      if (err) {
        return res.status(500).json({ message: 'Erro ao adicionar produto.' });
      }
      res.status(201).json({ message: 'Produto adicionado com sucesso!' });
    });
  });
};
