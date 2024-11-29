async function loadConfig() {
    try {
        const response = await fetch('../../../configRotas.json');
        if (!response.ok) {
            throw new Error('Erro ao carregar as configurações');
        }
        return await response.json();
    } catch (error) {
        console.error('Falha ao carregar o arquivo de configuração:', error);
    }
}

async function addProduct(config) {
    const formData = new FormData();
    const fileField = document.querySelector('input[type="file"]');
    const productPlace = document.getElementById('ProductPlace').value;
    const productMark = document.getElementById('ProductMark').value;
    const productsQuantity = document.getElementById('ProductsQuantity').value;
    const productsPrice = document.getElementById('ProductsPrice').value;
    const productsUnitPrice = (productsPrice / productsQuantity).toFixed(2);

    const today = new Date();
    const currentDateTime = today.toLocaleString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });

    if (productPlace && productMark && productsQuantity && productsPrice > 0) {
        formData.append('imageNF', fileField.files[0]);
        formData.append('loja', productPlace);
        formData.append('marca', productMark);
        formData.append('quantidade', productsQuantity);
        formData.append('preco', productsPrice);
        formData.append('unit', productsUnitPrice);
        formData.append('dataHora', currentDateTime);

        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }

        try {
            const response = await fetch(config.ADD_PRODUCTS, { // Certifique-se de usar a chave correta
                method: 'POST',
                body: formData
            });
            const result = await response.json();
            console.log('Success:', result);
        } catch (error) {
            console.error('Error:', error);
        }
    } else {
        alert('Por favor, preencha todos os campos obrigatórios e selecione uma foto.');
    }
}

document.getElementById('buttonAddProducts').addEventListener('click', async (event) => {
    event.preventDefault();
    const config = await loadConfig();
    if (config) {
        addProduct(config);
    } else {
        alert('Erro ao carregar as configurações. Por favor, tente novamente mais tarde.');
    }
});
