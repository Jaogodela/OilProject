const deleteButton = document.getElementById('delete');

async function loadConfig() {
    try {
        const response = await fetch('../../../configRotas.json');
        return await response.json();
    } catch (error) {
        console.error('Erro ao carregar as configurações:', error);
    }
}

async function deleteProducts(config) {
    const selectedIDs = getSelectedIds(); // the function getSelectedIDs is in functions/functionCheckbox (returns a array)

    console.log(selectedIDs);

    try {
        const response = await fetch(config.DELETE_PRODUCTS, { 
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
        alert('Erro ao fazer a requisição. Por favor, tente novamente.');
    }
}

window.deleteProducts = deleteProducts(config);