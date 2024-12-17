/* PRODUCT_OPTIONID
   OIL_GALAO_18l: 1,
   OIL_LATA_18L: 2,
   OIL_PET_900ML: 3, 
   OUTROS: 6,
*/

const buttonSellProducts = document.getElementById('buttonSellProducts');

async function loadConfig() {
    try {
        const response = await fetch('../../../configRotas.json');
        const configArray = await response.json();
        const apiEndpoints = configArray[0];
        const productCodes = configArray[1];
        return { apiEndpoints, productCodes };
    } catch (error) {
        console.error('Erro ao carregar as configurações:', error);
    }
}

async function postSellProducts(config) {
    const productOptionID = document.getElementById('ProductOption').value;
    const productSellClient = document.getElementById('productSellClient').value;
    const productQuantity = document.getElementById('productQuantity').value;
    const productUnitValue = document.getElementById('productValue').value;
    const productValue = productQuantity * productUnitValue;

    if (productSellClient === '' || productQuantity === '' || productValue === '' || productQuantity < 0 || productUnitValue < 0) {
        alert('Preencha todos os valores necessários com valores válidos!');
        return;
    }

    const sellProductsObj = {
        ProductOptionID: productOptionID,
        ProductSellClient: productSellClient,
        ProductQuantity: productQuantity,
        ProductUnitValue: productUnitValue,
        ProductTotalValue: productValue
    };
    console.log(sellProductsObj);

    try {
        const response = await fetch(config.apiEndpoints.SELL_PRODUCTS, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(sellProductsObj)
        });
        if (response.ok) {
            const result = await response.json();
            console.log('Success:', result);
            alert('Requisição concluída com sucesso!');
        } else {
            alert('Erro ao registrar a venda!');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Erro ao fazer a requisição. Por favor, tente novamente.');
    }
}

buttonSellProducts.addEventListener('click', async (event) => {
    event.preventDefault();
    const config = await loadConfig();
    if (config) {
        await postSellProducts(config);
    } else {
        alert('Erro ao carregar as configurações. Por favor, tente novamente mais tarde.');
    }
});
