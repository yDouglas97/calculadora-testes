describe("Calculadora Simples", function() {

  beforeEach(function() {
    clearDisplay(); // Limpar antes de cada teste
  });

  it("Deve somar dois números corretamente", function() {
    addToDisplay('4');
    addToDisplay('+');
    addToDisplay('5');
    calculateResult();
    expect(document.getElementById("display").value).toBe('9');
  });

  it("Deve subtrair dois números corretamente", function() {
    addToDisplay('9');
    addToDisplay('-');
    addToDisplay('4');
    calculateResult();
    expect(document.getElementById("display").value).toBe('5');
  });

  it("Deve multiplicar dois números corretamente", function() {
    addToDisplay('3');
    addToDisplay('*');
    addToDisplay('5');
    calculateResult();
    expect(document.getElementById("display").value).toBe('15');
  });

  it("Deve dividir dois números corretamente", function() {
    addToDisplay('10');
    addToDisplay('/');
    addToDisplay('2');
    calculateResult();
    expect(document.getElementById("display").value).toBe('5');
  });

  it("Deve exibir erro ao tentar dividir por zero", function() {
    addToDisplay('10');
    addToDisplay('/');
    addToDisplay('0');
    calculateResult();
    expect(document.getElementById("display").value).toBe('Erro: divisão por zero não é permitida.');
  });

  it("Deve limpar a tela corretamente", function() {
    addToDisplay('7');
    clearDisplay();
    expect(document.getElementById("display").value).toBe('');
  });

  it("Deve validar entrada de letras como inválidas", function() {
    addToDisplay('a');
    addToDisplay('+');
    addToDisplay('b');
    calculateResult();
    expect(document.getElementById("display").value).toBe('Entrada inválida. Digite apenas números.');
  });

});
