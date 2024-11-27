const buttonRemoveProducts = document.getElementById('buttonRemoveProducts');

function PostRemoveProducts() {
    const productValue = document.getElementById('ProductValue').value;
    const productRazao = document.getElementById('ProductRazao').value;
    const productQuantity = document.getElementById('ProductQuantity').value;
    const productOption = document.getElementById('ProductOption').value;
    
    // Adiciona verificação para campos vazios
    if (productValue === "" || productRazao === "" || productQuantity === "") {
        alert("Por favor, preencha todos os campos.");
        return; 
    }

    const removeProductObj = {
        ProductOption: productOption,
        ProductQuantity: productQuantity,
        ProductValue: productValue,
        ProductRazao: productRazao,
    };
    
    if (productValue < 0 || productRazao < 0 || productQuantity < 0) {
        alert("Preencha com um valor válido!")
    } else {
        console.log(removeProductObj);
    }
}

buttonRemoveProducts.addEventListener('click', PostRemoveProducts);
