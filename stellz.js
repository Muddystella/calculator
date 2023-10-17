let currentInput = '';

function appendDisplay(value) {
    currentInput = currentInput + value;
    document.getElementById('input1').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('input1').value = currentInput;
    document.getElementById('input2').value = currentInput;
}

function calculate() {
    currentInput = eval(currentInput);
    document.getElementById("input2").value = currentInput;
}