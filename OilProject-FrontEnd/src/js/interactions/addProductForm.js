async function loadConfig() {
    try {
        const response = await fetch('../../../config.json');
        if (!response.ok) {
            throw new Error('Erro ao carregar as configurações');
        }
        return await response.json();
    } catch (error) {
        console.error('Falha ao carregar o arquivo de configuração:', error);
    }
}

document.getElementById('buttonAddProducts').addEventListener('click', async (event) => {
    event.preventDefault();
    
    const config = await loadConfig();
    if (!config) {
        alert('Erro ao carregar as configurações. Por favor, tente novamente mais tarde.');
        return;
    }

    const formData = new FormData();
    const fileField = document.querySelector('input[type="file"]');
    const productPlace = document.getElementById('ProductPlace').value;
    const productMark = document.getElementById('ProductMark').value;
    const productsQuantity = document.getElementById('ProductsQuantity').value;
    const productsPrice = document.getElementById('ProductsPrice').value;
    const productsUnitPrice = (productsPrice / productsQuantity).toFixed(2); 

    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); 
    const year = today.getFullYear();
    const hours = String(today.getHours()).padStart(2, '0');
    const minutes = String(today.getMinutes()).padStart(2, '0');
    const seconds = String(today.getSeconds()).padStart(2, '0');
    const currentDateTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

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
            const response = await fetch(config.ADD_PRODUCT, {
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
});
