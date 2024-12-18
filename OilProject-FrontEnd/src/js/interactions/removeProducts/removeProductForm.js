/* PRODUCT_OPTIONID
   OIL_GALAO_18l: 1,
   OIL_LATA_18L: 2,
   OIL_PET_900ML: 3, 
   OUTROS: 6,
*/

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

async function postRemoveProducts(config) {
    const productOptionID = document.getElementById('ProductOption').value;
    const productQuantity = document.getElementById('ProductQuantity').value;
    const productRazao = document.getElementById('ProductRazao').value;

    if (productRazao === "" || productQuantity === "" || productRazao < 0 || productQuantity < 0) {
        alert("Preencha todos os campos com valores válidos!");
        return;
    }

    const removeProductObj = { 
        ProductOptionID: productOptionID, 
        ProductQuantity: productQuantity, 
        ProductRazao: productRazao 
    };
    console.log(removeProductObj);

    try {
        const response = await fetch(config.apiEndpoints.OUTFLOW_PRODUCTS, { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(removeProductObj)
        });
        if (response.ok) {
            const result = await response.json();
            console.log('Success:', result);
            alert('Saída registrada com sucesso!');
        } else {
            const errorText = await response.text();
            console.error('Erro:', errorText);
            alert('Erro ao registrar saída do produto!');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Erro ao fazer a requisição. Por favor, tente novamente.');
    }
}

buttonRemoveProducts.addEventListener('click', async (event) => {
    event.preventDefault();
    const config = await loadConfig();
    if (config) {
        await postRemoveProducts(config);
    } else {
        alert('Erro ao carregar as configurações. Por favor, tente novamente mais tarde.');
    }
});
