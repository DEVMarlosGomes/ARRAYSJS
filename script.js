// Captura os elementos do HTML
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const showSelectedBtn = document.getElementById('show-selected');
const resultDiv = document.getElementById('result');

// Evento de clique no botão
showSelectedBtn.addEventListener('click', () => {
  const selectedIngredients = Array.from(checkboxes)
    .filter(checkbox => checkbox.checked) // Filtra os checkboxes selecionados
    .map(checkbox => checkbox.value); // Pega o valor de cada checkbox

  // Atualiza o conteúdo da área de resultado
  resultDiv.textContent = selectedIngredients.length > 0
    ? `Ingredientes selecionados: ${selectedIngredients.join(', ')}`
    : 'Nenhum ingrediente selecionado.';
});
