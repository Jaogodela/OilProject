const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});

const upload = multer({ storage });

module.exports = function (app) {
  app.post('/addProduct', upload.single('imageNF'), (req, res) => {
    const { file } = req;
    const { loja, marca, quantidade, preco, unit, dataHora } = req.body;

    if (!file || !loja || !marca || !quantidade || !preco || !unit || !dataHora) {
      return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
    }

    console.log(req.body); // Log dos dados recebidos

    res.status(201).json({ message: 'Produto adicionado com sucesso!' });
  });
};
