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
const buttonRequestRelatory = document.getElementById('buttonRequestRelatory');

async function postRequestRelatory(config) {
    const relatoryOption = document.getElementById('ProductOption').value;
    const url = config.apiEndpoints.RELATORY_PRODUCTS.replace('${type}', relatoryOption); 

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            const result = await response.json();
            console.log('Success:', result);
            alert('Relatório obtido com sucesso!');
        } else {
            alert('Erro ao obter o relatório!');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Erro ao fazer a requisição. Por favor, tente novamente.');
    }
}

buttonRequestRelatory.addEventListener('click', async (event) => {
    event.preventDefault();
    const config = await loadConfig();
    if (config) {
        await postRequestRelatory(config);
    } else {
        alert('Erro ao carregar as configurações. Por favor, tente novamente mais tarde.');
    }
});
