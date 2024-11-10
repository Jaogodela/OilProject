const produtos = [
  { nome: "Soya", quantidade: 10, preco: "50,00", unit: "3,90", data: "08/11/2024", hora: "10:30" },
  { nome: "Cocamar", quantidade: 5, preco: "30,00", unit: "4,75", data: "07/11/2024", hora: "14:00" },
  { nome: "Liza", quantidade: 20, preco: "45,00", unit: "4,50", data: "11/10/2024", hora: "16:45" },
  { nome: "Soya", quantidade: 10, preco: "50,00", unit: "2,56", data: "08/11/2024", hora: "10:30" },
  { nome: "Cocamar", quantidade: 5, preco: "30,00", unit: "3,94", data: "07/11/2024", hora: "14:00" },
];

const productContainer = document.getElementById('productContainer');
const filterInput = document.getElementById('filterInput');
const filterDate = document.getElementById('filterDate');
const filterTime = document.getElementById('filterTime');
const filterClear = document.getElementById('filterClear'); 

const headerRow = document.createElement('div');
headerRow.classList.add('product-row', 'product-header');
headerRow.innerHTML = `
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

  productContainer.innerHTML = headerRow.outerHTML; 

  produtosFiltrados.forEach(produto => {
    const row = document.createElement('div');
    row.classList.add('product-row');
    row.innerHTML = `
      <p class="product-column">${produto.nome}</p>
      <p class="product-column">${produto.quantidade}</p>
      <p class="product-column">R$ ${produto.preco}</p>
      <p class="product-column">R$ ${produto.unit}</p>
      <p class="product-column">${produto.data}</p>
      <p class="product-column">${produto.hora}</p>
    `; // em memórias: <input type="checkbox" class="product-checkbox"> 
    productContainer.appendChild(row);
  });
}

function applyFilters() {
  const filterText = filterInput.value.toLowerCase();
  const filterDateValue = filterDate.value;
  const filterTimeValue = filterTime.value;

  const produtosFiltrados = produtos.filter(produto => {
    const matchNome = produto.nome.toLowerCase().includes(filterText);
    const matchData = filterDateValue ? produto.data === filterDateValue : true;
    const matchHora = filterTimeValue ? produto.hora === filterTimeValue : true;
    return matchNome && matchData && matchHora;
  });

  renderProducts(produtosFiltrados);
}

function clearFilters() {
  filterInput.value = ''; 
  filterDate.value = ''; 
  filterTime.value = ''; 
  applyFilters(); 
}

filterClear.addEventListener('click', clearFilters);

renderProducts(produtos);