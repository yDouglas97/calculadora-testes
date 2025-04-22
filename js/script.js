let currentInput = "";
let isResultDisplayed = false; // Novo controle de estado

// Função para alternar entre os temas
function toggleTheme() {
  // Verifica se o body já tem a classe 'dark-mode'
  const body = document.body;
  body.classList.toggle('dark-mode');

  // Salva a preferência do tema no localStorage
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
}

// Função para carregar o tema salvo
function loadTheme() {
  const savedTheme = localStorage.getItem('theme'); // Recupera o tema salvo
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode'); // Adiciona a classe 'dark-mode' se o tema for escuro
  } else {
    document.body.classList.remove('dark-mode'); // Caso contrário, remove a classe
  }
}

// Função para adicionar valores ao display
function addToDisplay(value) {
  // Se um resultado foi exibido e o usuário digitar um número ou operador, começamos do zero
  if (isResultDisplayed) {
    clearDisplay(); // Limpa tudo antes de continuar
    isResultDisplayed = false;
  }

  currentInput += value;
  document.getElementById("display").value = currentInput;
}

// Função para limpar o display
function clearDisplay() {
  currentInput = "";
  document.getElementById("display").value = "";
  isResultDisplayed = false; // Reset também a flag
}

// Função para calcular o resultado
function calculateResult() {
  try {
    const result = eval(currentInput); // Avalia a expressão

    // Checa se o resultado é infinito ou inválido
    if (result === Infinity || result === -Infinity) {
      document.getElementById("display").value = "Erro: divisão por zero não é permitida.";
      currentInput = "";
    } else if (isNaN(result)) {
      document.getElementById("display").value = "Entrada inválida. Digite apenas números.";
      currentInput = "";
    } else {
      currentInput = result.toString(); // Salva o resultado, mas ele pode ser substituído se o usuário digitar algo novo
      document.getElementById("display").value = currentInput;
      isResultDisplayed = true; // Ativa a flag de que um resultado foi exibido
    }
  } catch (error) {
    document.getElementById("display").value = "Entrada inválida. Digite apenas números.";
    currentInput = "";
  }
}

// Carrega o tema salvo assim que a página for carregada
loadTheme();
