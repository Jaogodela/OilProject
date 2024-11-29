const buttonRemoveProducts = document.getElementById('buttonRemoveProducts');

function PostRemoveProducts() {
    const productOption = document.getElementById('ProductOption').value;
    const productQuantity = document.getElementById('ProductQuantity').value;
    const productRazao = document.getElementById('ProductRazao').value;
    
    // Adiciona verificação para campos vazios
    if (productRazao === "" || productQuantity === "") {
        alert("Por favor, preencha todos os campos.");
        return; 
    }

    const removeProductObj = {
        ProductOption: productOption,
        ProductQuantity: productQuantity,
        ProductRazao: productRazao,
    };
    
    if (productRazao < 0 || productQuantity < 0) {
        alert("Preencha com um valor válido!")
    } else {
        console.log(removeProductObj);
    }
}

buttonRemoveProducts.addEventListener('click', PostRemoveProducts);
