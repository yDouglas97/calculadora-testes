let currentInput = "";
let isResultDisplayed = false; // Novo controle de estado

function addToDisplay(value) {
  // Se um resultado foi exibido e o usuário digitar um número ou operador, começamos do zero
  if (isResultDisplayed) {
    clearDisplay(); // Limpa tudo antes de continuar
    isResultDisplayed = false;
  }

  currentInput += value;
  document.getElementById("display").value = currentInput;
}

function clearDisplay() {
  currentInput = "";
  document.getElementById("display").value = "";
  isResultDisplayed = false; // Reset também a flag
}

function calculateResult() {
  try {
    const result = eval(currentInput);

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
