const buttonSellProducts = document.getElementById('buttonSellProducts');

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
      ProductValue: productValue,
      ProductUnitValue: productUnitValue
  };

  try {
      const response = await fetch(config.SELL_PRODUCTS, {
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
