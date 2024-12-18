module.exports = function (rest) {
    rest.post('/api/post/products/deleteProduct', (req, res) => {
        const content = req.body;
        console.log(content);
        console.log(content.length);
        res.status(200).send()

    })
}