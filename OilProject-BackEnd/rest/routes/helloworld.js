module.exports = function (rest) {
  
rest.get('/', async (req, res) => {
    res.status(200).send('Operante');
})}