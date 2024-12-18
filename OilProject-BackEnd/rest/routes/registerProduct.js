module.exports = function (rest) {
    rest.post('/api/post/products/registerProduct', async (req, res) => {
        res.status(200).send('a');
    })
}