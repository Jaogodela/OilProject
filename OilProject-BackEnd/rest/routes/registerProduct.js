const cors = require('cors'); 
// encher galão (nao esquecer)

module.exports = function (rest) {
    rest.post('/api/post/products/registerProduct', async (req, res) => {
        const response = req.body;
        console.log(response);
        res.status(200).send('a');
    })
}