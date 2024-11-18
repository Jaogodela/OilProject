let selectedIds = [];

function toggleDeleteButton() {
  const checkboxes = document.querySelectorAll('.product-checkbox');
  const headerContainer = document.getElementsByClassName("header-container")[0];
  let deleteButton = document.getElementById('delete');
  
  if (Array.from(checkboxes).some(checkbox => checkbox.checked)) {
    if (!deleteButton) {
      deleteButton = document.createElement('button');
      deleteButton.id = 'delete';
      deleteButton.classList.add('btn', 'btn-delete'); // Adicionando as classes de estilo
      deleteButton.innerHTML = `
        <span class="mdi mdi-delete mdi-24px"></span>
        <span class="mdi mdi-delete-empty mdi-24px"></span>
        <span>Delete</span>
      `;
      headerContainer.appendChild(deleteButton);
    }
  } else {
    if (deleteButton) {
      headerContainer.removeChild(deleteButton);
    }
  }
}

function getSelectedIds() {
  const checkboxes = document.querySelectorAll('.product-checkbox');
  selectedIds = Array.from(checkboxes)
    .filter(checkbox => checkbox.checked)
    .map(checkbox => checkbox.getAttribute('data-id'));
  return selectedIds;
}

document.querySelectorAll('.product-checkbox').forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    toggleDeleteButton();
    getSelectedIds();
  });
});

window.getSelectedIds = getSelectedIds;
