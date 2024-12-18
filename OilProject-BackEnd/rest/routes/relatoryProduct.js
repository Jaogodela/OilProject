function relatoryHandler(type) {
    if (type === "inflow") {
        console.log('Inflow relatory');
    } else if (type === "outflow") {
        console.log('Outflow relatory');
    } else if (type === "sale") {
        console.log('Sales relatory');
    } else if (type === "register") {
        console.log('Register gallons relatory');
    } else {
        console.log('Modelo de relatório não encontrado')
    }
}

module.exports = function (rest) {
    rest.get('/api/get/products/relatory/:type', async (req, res) => {
        const type = req.params.type;
        relatoryHandler(type);
        res.status(200).send(`Relatório para o tipo: ${type}`);
    });
}
