const produtos = [
  { id: 1, loja: "Rappi", marca: "Soya", quantidade: 12, preco: "55,00", unit: "4,60", data: "08/11/2024", hora: "10:30" },
  { id: 2, loja: "Ifood", marca: "Cocamar", quantidade: 8, preco: "28,00", unit: "3,50", data: "07/11/2024", hora: "14:00" },
  { id: 3, loja: "Rappi", marca: "Liza", quantidade: 15, preco: "60,00", unit: "4,00", data: "10/10/2024", hora: "18:00" },
  { id: 4, loja: "Uber", marca: "Soya", quantidade: 7, preco: "35,00", unit: "5,00", data: "09/11/2024", hora: "12:15" },
  { id: 5, loja: "Ifood", marca: "Cocamar", quantidade: 6, preco: "33,00", unit: "5,50", data: "06/11/2024", hora: "16:45" },
  { id: 6, loja: "Rappi", marca: "Liza", quantidade: 10, preco: "50,00", unit: "5,00", data: "11/10/2024", hora: "20:00" },
  { id: 7, loja: "Uber", marca: "Soya", quantidade: 5, preco: "25,00", unit: "5,00", data: "08/11/2024", hora: "11:30" },
  { id: 8, loja: "Ifood", marca: "Cocamar", quantidade: 9, preco: "27,00", unit: "3,00", data: "07/11/2024", hora: "14:30" },
  { id: 9, loja: "Rappi", marca: "Liza", quantidade: 18, preco: "81,00", unit: "4,50", data: "09/10/2024", hora: "10:00" },
  { id: 10, loja: "Uber", marca: "Soya", quantidade: 11, preco: "60,00", unit: "5,45", data: "10/11/2024", hora: "15:45" },
  { id: 11, loja: "Rappi", marca: "Cocamar", quantidade: 10, preco: "45,00", unit: "4,50", data: "08/10/2024", hora: "09:30" },
  { id: 12, loja: "Ifood", marca: "Soya", quantidade: 12, preco: "48,00", unit: "4,00", data: "07/10/2024", hora: "13:00" },
  { id: 13, loja: "Uber", marca: "Liza", quantidade: 8, preco: "38,00", unit: "4,75", data: "09/11/2024", hora: "12:45" },
  { id: 14, loja: "Rappi", marca: "Cocamar", quantidade: 7, preco: "32,00", unit: "4,57", data: "10/11/2024", hora: "17:15" },
  { id: 15, loja: "Ifood", marca: "Soya", quantidade: 9, preco: "36,00", unit: "4,00", data: "06/11/2024", hora: "15:30" },
  { id: 16, loja: "Uber", marca: "Liza", quantidade: 11, preco: "55,00", unit: "5,00", data: "11/11/2024", hora: "16:00" },
  { id: 17, loja: "Rappi", marca: "Cocamar", quantidade: 5, preco: "25,00", unit: "5,00", data: "12/11/2024", hora: "11:00" },
  { id: 18, loja: "Ifood", marca: "Soya", quantidade: 14, preco: "70,00", unit: "5,00", data: "07/11/2024", hora: "14:45" },
  { id: 19, loja: "Uber", marca: "Liza", quantidade: 20, preco: "80,00", unit: "4,00", data: "10/11/2024", hora: "09:00" },
  { id: 20, loja: "Rappi", marca: "Cocamar", quantidade: 13, preco: "39,00", unit: "3,00", data: "09/11/2024", hora: "13:30" }
];

const productContainer = document.getElementById('productContainer');
const filterInput = document.getElementById('filterInput');
const filterDate = document.getElementById('filterDate');
const filterTime = document.getElementById('filterTime'); 
const filterLoja = document.getElementById('filterLoja');
const selectElement = document.getElementById('quantitySelection');

const headerRow = document.createElement('div');
headerRow.classList.add('product-row', 'product-header');
headerRow.innerHTML = `
  <p class="product-cell">Selecionar</p>
  <p class="product-cell">ID</p>
  <p class="product-cell">LOJA</p>
  <p class="product-column">MARCA</p>
  <p class="product-column">QUANTIDADE</p>
  <p class="product-column">PREÇO TOTAL</p>
  <p class="product-column">PREÇO UNITÁRIO</p>
  <p class="product-column">DATA</p>
  <p class="product-column">HORA</p>
`;

if (!productContainer.querySelector('.product-header')) {
  productContainer.appendChild(headerRow);
}

function renderProducts(produtosFiltrados) {
  const itemsPerPage = parseInt(selectElement.value, 10) || 10; 
  productContainer.innerHTML = headerRow.outerHTML; 

  produtosFiltrados.slice(0, itemsPerPage).forEach(produto => {
    const row = document.createElement('div');
    row.classList.add('product-row');
    row.innerHTML = `
      <input type="checkbox" class="product-checkbox" data-id="${produto.id}">
      <p class="product-column">${produto.id}</p>
      <p class="product-column">${produto.loja}</p>
      <p class="product-column">${produto.marca}</p>
      <p class="product-column">${produto.quantidade}</p>
      <p class="product-column">R$ ${produto.preco}</p>
      <p class="product-column">R$ ${produto.unit}</p>
      <p class="product-column">${produto.data}</p>
      <p class="product-column">${produto.hora}</p>
    `; 
    productContainer.appendChild(row);
  });
}

selectElement.addEventListener('change', () => renderProducts(produtos));

window.renderProducts = renderProducts;

renderProducts(produtos);
