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

async function postSellProducts(config) {
  const productOption = document.getElementById('ProductOption').value;
  const productSellClient = document.getElementById('productSellClient').value;
  const productQuantity = document.getElementById('productQuantity').value;
  const productUnitValue = document.getElementById('productValue').value;
  const productValue = productQuantity * productUnitValue;

  if (productSellClient === '' || productQuantity === '' || productValue === '' || productQuantity < 0 || productUnitValue < 0) {
      alert('Preencha todos os valores necessários com valores válidos!');
      return;
  }

  const sellProductsObj = {
      ProductOption: productOption,
      ProductSellClient: productSellClient,
      ProductQuantity: productQuantity,
      ProductValue: productValue,
      ProductUnitValue: productUnitValue
  };

  try {
      const response = await fetch(config.SELL_PRODUCTS, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(sellProductsObj)
      });
      console.log('Success:', await response.json());
  } catch (error) {
      console.error('Error:', error);
  }
}

document.getElementById('buttonSellProducts').addEventListener('click', async (event) => {
  event.preventDefault();
  const config = await loadConfig();
  if (config) {
      postSellProducts(config);
  }
});
