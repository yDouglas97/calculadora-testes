let currentInput = "";

function addToDisplay(value) {
  // Verifica se o valor é um número ou operador e adiciona à expressão.
  currentInput += value;
  document.getElementById("display").value = currentInput;
}

function clearDisplay() {
  currentInput = "";
  document.getElementById("display").value = "";
}

function calculateResult() {
  try {
    // Avalia a expressão matemática inserida.
    const result = eval(currentInput);

    if (result === Infinity || result === -Infinity) {
      document.getElementById("display").value = "Erro: divisão por zero não é permitida.";
      currentInput = "";
    } else if (isNaN(result)) {
      document.getElementById("display").value = "Entrada inválida. Digite apenas números.";
      currentInput = "";
    } else {
      currentInput = result.toString();
      document.getElementById("display").value = currentInput;
    }
  } catch (error) {
    document.getElementById("display").value = "Entrada inválida. Digite apenas números.";
    currentInput = "";
  }
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}
