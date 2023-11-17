function appendToResult(value) {
    const resultInput = document.getElementById('result');
    resultInput.value += value;
}

function clearResult() {
    const resultInput = document.getElementById('result');
    resultInput.value = '';
}

function calculateResult() {
    const resultInput = document.getElementById('result');
    try {
        resultInput.value = eval(resultInput.value);
    } catch (error) {
        resultInput.value = 'Error';
    }
}