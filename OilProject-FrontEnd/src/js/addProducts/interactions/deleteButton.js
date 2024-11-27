const deleteProductsButton = document.getElementById("delete");

function deleteProducts() {
  const deleteProductsBox = document.createElement('div');
  deleteProductsBox.classList.add('delete-products-box');
  deleteProductsBox.innerHTML = `
    <button class="close-btn">&times;</button>
    <p>Deseja realmente excluir os produtos selecionados?</p>
    <div class="header-buttons">
    <button class="btn-delete-empty">Não</button>
    <button class="btn-delete-confirm">Sim</button>
    </div>`;
  console.log("foi");

  document.body.appendChild(deleteProductsBox);
  const btnDeleteEmpty = document.querySelector('.btn-delete-empty');
  btnDeleteEmpty.addEventListener('click', () => {
    document.body.removeChild(deleteProductsBox);
  });
  const closeBtn = deleteProductsBox.querySelector('.close-btn');
  closeBtn.addEventListener('click', () => {
    document.body.removeChild(deleteProductsBox);
  });
}

window.renderProducts = deleteProducts;
