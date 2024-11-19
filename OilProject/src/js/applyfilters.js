function applyFilters() {
  const filterText = filterInput.value.toLowerCase();
  const filterDateValue = filterDate.value;
  const filterTimeValue = filterTime.value;
  const filterLojas = filterLoja.value;

  const produtosFiltrados = produtos.filter(produto => {
    const matchMarca = produto.marca.toLowerCase().includes(filterText);
    const matchLoja = filterLojas ? produto.loja === filterLojas : true;
    const matchData = filterDateValue ? produto.data === filterDateValue : true;
    const matchHora = filterTimeValue ? produto.hora === filterTimeValue : true;
    return matchMarca && matchLoja && matchData && matchHora;
  });

  renderProducts(produtosFiltrados);
}
filterLoja.addEventListener('change', applyFilters);

window.applyFilters = applyFilters;

// FILTRO DE DATA NÃO FUNCIONA FIX ESSA BOSTA
