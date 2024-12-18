const buttonAddProducts = document.getElementById('buttonAddProducts');

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
        formData.append('productPlace', productPlace);
        formData.append('productMark', productMark);
        formData.append('productQuantity', productsQuantity);
        formData.append('productPrice', productsPrice);
        formData.append('productUnitPrice', productsUnitPrice);
        formData.append('dateTime', currentDateTime);

        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }
        try {
            const response = await fetch(config.apiEndpoints.ADD_PRODUCTS, {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                const result = await response.json();
                console.log('Success:', result);
                alert('Produto adicionado com sucesso!');
            } else {
                alert('Erro ao adicionar o produto!');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Erro ao fazer a requisição. Por favor, tente novamente.');
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
