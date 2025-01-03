module.exports = function (rest) {
    rest.post('/api/post/products/deleteProduct', (req, res) => {
        const content = req.body;
        console.log(content);
        res.status(200).send()

    })
}