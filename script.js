//variáveis do ambiente
let numberInput = "";
let resultado = 0;
let num1 = 0;
let num2 = 0;
let op;

//função para recer os números e mostra eles na tela, concatenados.
function recebe_numeros(a) {
    numberInput = '' + numberInput + a;
    document.getElementById("resultado").innerText = numberInput;
}

//função para pegar o tipo de operador e o segundo número.
function operacao(a){
                num1 = numberInput;
                numberInput = "";
                op = a;
                document.getElementById("resultado").innerText = num1 + op;
    
}

    function result() {
        switch (op) {
            case '+':
            num2 = numberInput
            resultado = parseFloat(num1) + parseFloat(num2);
            document.getElementById("resultado").innerText = resultado;
            num1 = resultado;
            num2 = 0;
            numberInput = resultado;
            break;

            case '-':
            num2 = numberInput
            resultado = parseFloat(num1) - parseFloat(num2);
            document.getElementById("resultado").innerText = resultado;
            num1 = resultado;
            num2 = 0;
            numberInput = resultado;
            break;

            case '/':
            num2 = numberInput
            resultado = parseFloat(num1) / parseFloat(num2);
            document.getElementById("resultado").innerText = resultado;
            num1 = resultado;
            num2 = 0;
            numberInput = resultado;
            break;

            case '*':
            num2 = numberInput
            resultado = parseFloat(num1) * parseFloat(num2);
            document.getElementById("resultado").innerText = resultado;
            num1 = resultado;
            num2 = 0;
            numberInput = resultado;
            break;
        }
}

// função para limpar o cálculo
function limpa_calculo(a) {
    numberInput = "";
    num1 = 0;
    num2 = 0;
    document.getElementById("resultado").innerText = numberInput;
}


