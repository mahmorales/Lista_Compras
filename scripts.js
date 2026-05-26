//Capturando os elementos principais do HTML pelo id
const itemInput = document.getElementById('item-input');
const btnAdd = document.getElementById('btn-add');
const shoppingList = document.getElementById('shopping-list');
const alertMessage = document.getElementById('alert-message');

// Função para mostrar e esconder o alerta
function showAlert() {
  // Remove a classe que esconde o alerta (faz ele aparecer)
  alertMessage.classList.remove('alert-hidden');
  
  // O setTimeout espera um tempo (em milissegundos) para executar uma ação
  setTimeout(() => {
    alertMessage.classList.add('alert-hidden'); // Coloca a classe de volta para esconder
  }, 3000); // 3000 ms = 3 segundos
}

// Ouvindo o clique no botão de adicionar
btnAdd.addEventListener('click', () => {
  const itemName = itemInput.value.trim(); // Pega o texto e remove os espaços em branco nas pontas

  // Se o campo estiver vazio, não faz nada (para a execução aqui)
  if (itemName === '') {
    return; 
  }

  // Cria um novo elemento <li> do zero
  const li = document.createElement('li');
  li.classList.add('list-item'); // Adiciona a classe CSS nele

  // Preenche o <li> com o HTML do checkbox, do texto e do botão de lixeira
  li.innerHTML = `
    <input type="checkbox" class="item-checkbox">
    <span class="item-name">${itemName}</span>
    <button class="btn-remove" aria-label="Remover item">🗑️</button>
  `;

  // Adiciona esse novo <li> dentro da nossa <ul>
  shoppingList.appendChild(li);

  // Limpa o campo de texto para o próximo item
  itemInput.value = ''; 
});

// Ouvindo cliques dentro da lista inteira
shoppingList.addEventListener('click', (event) => {
  const target = event.target; // Descobre exatamente onde o usuário clicou
  const listItem = target.closest('.list-item'); // Encontra o <li> inteiro daquela linha

  // 1. Se clicou no botão de remover (ou no ícone dentro dele)
  if (target.classList.contains('btn-remove') || target.closest('.btn-remove')) {
    listItem.remove(); // Apaga o <li> do HTML
    showAlert(); // Chama a função que criamos no Passo 2
  }

  // 2. Se clicou no checkbox
  if (target.classList.contains('item-checkbox')) {
    listItem.classList.toggle('completed'); // Adiciona ou remove a classe "completed"
  }
});
