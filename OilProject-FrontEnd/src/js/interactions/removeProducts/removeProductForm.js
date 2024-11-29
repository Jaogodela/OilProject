async function loadConfig() {
    try {
        const response = await fetch('../../../configRotas.json');
        return await response.json();
    } catch (error) {
        console.error('Erro ao carregar as configurações:', error);
    }
}

async function postRemoveProducts(config) {
    const productOption = document.getElementById('ProductOption').value;
    const productQuantity = document.getElementById('ProductQuantity').value;
    const productRazao = document.getElementById('ProductRazao').value;

    if (productRazao === "" || productQuantity === "" || productRazao < 0 || productQuantity < 0) {
        alert("Preencha todos os campos com valores válidos!");
        return;
    }

    const removeProductObj = { 
        ProductOption: productOption, 
        ProductQuantity: productQuantity, 
        ProductRazao: productRazao 
    };
    console.log(removeProductObj);
    try {
        const response = await fetch(config.REMOVE_PRODUCTS, { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(removeProductObj)
        });
        console.log('Success:', await response.json());
    } catch (error) {
        console.error('Error:', error);
    }
}

document.getElementById('buttonRemoveProducts').addEventListener('click', async (event) => {
    event.preventDefault();
    const config = await loadConfig();
    if(config) {
        postRemoveProducts(config);
    }
});
