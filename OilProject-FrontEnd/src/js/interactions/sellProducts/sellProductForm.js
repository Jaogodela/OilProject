const buttonSellProducts = document.getElementById('buttonSellProducts');

function PostSellProducts() {
  const productOption = document.getElementById('ProductOption').value;
  const productSellClient = document.getElementById('productSellClient').value;
  const productQuantity = document.getElementById('productQuantity').value;
  const productUnitValue = document.getElementById('productValue').value;
  const productValue = productQuantity * productUnitValue;
  if(productSellClient === '' || productQuantity === '' || productValue === '') {
    alert('Preencha todos os valores necessários!');
    return;
  }
  const sellProductsObj = {
    ProductOption: productOption,
    ProductSellClient: productSellClient,
    ProductQuantity: productQuantity,
    ProductValue: productValue,
    ProductUnitValue: productUnitValue
  }
  console.log(sellProductsObj);
}

buttonSellProducts.addEventListener('click', PostSellProducts);
