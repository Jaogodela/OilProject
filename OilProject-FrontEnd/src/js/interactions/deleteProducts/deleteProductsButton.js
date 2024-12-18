const deleteButton = document.getElementById('delete');

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

async function deleteProducts(config) {
    const selectedIDs = getSelectedIds(); // a função getSelectedIDs está em functions/functionCheckbox e retorna um array

    console.log(selectedIDs);

    try {
        const response = await fetch(config.apiEndpoints.DELETE_PRODUCTS, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(selectedIDs)
        });
        if (response.ok) {
            const result = await response.json();
            console.log('Success:', result);
            alert('Saída registrada com sucesso!');
        } else {
            alert('Erro ao registrar saída do produto!');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

window.deleteProducts = deleteProducts(config);