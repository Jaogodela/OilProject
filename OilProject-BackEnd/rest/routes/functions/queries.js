function addProduct({ loja, marca, quantidade, preco, unit, dataHora, imageNF }, callback) {
  const query = `INSERT INTO produtos (loja, marca, quantidade, preco, unit, dataHora, imageNF) VALUES (?, ?, ?, ?, ?, ?, ?)`;
  const values = [loja, marca, quantidade, preco, unit, dataHora, imageNF];

  db.query(query, values, (err, results) => {
    if (err) {
      console.error('Erro ao inserir produto:', err);
      return callback(err);
    }
    callback(null, results);
  });
}

function getProducts(callback) {
  const query = `SELECT * FROM produtos`;

  db.query(query, (err, results) => {
    if (err) {
      console.error('Erro ao buscar produtos:', err);
      return callback(err);
    }
    callback(null, results);
  });
}

module.exports = {
  addProduct,
  getProducts,
};
