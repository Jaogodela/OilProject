document.getElementById('addMore').addEventListener('click', function() {
  const elements = [
    document.getElementById('ProductQuantityLabel'),
    document.getElementById('ProductsQuantitySecond'),
    document.getElementById('ProductMarkLabel'),
    document.getElementById('ProductMarkSecond')
  ];

  elements.forEach(element => {
    if (element) {
      if (element.style.display === 'none') {
        element.style.display = 'block';
        setTimeout(() => element.classList.add('show'), 10);
      } else {
        element.classList.remove('show');
        setTimeout(() => element.style.display = 'none', 500); // Match this delay with the CSS transition duration
      }
    } else {
      console.error('Elemento não encontrado:', element);
    }
  });
});
