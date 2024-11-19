const filterClear = document.getElementById('filterClear');

function clearFilters() {
  filterInput.value = ''; 
  filterDate.value = ''; 
  filterTime.value = ''; 
  filterLoja.value = '';
  renderProducts(produtos);
}

filterClear.addEventListener('click', clearFilters);


