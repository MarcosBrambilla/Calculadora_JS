const calculadora = {
    // Variáveis do ambiente
    numberInput: "",
    resultado: 0,
    num1: 0,
    num2: 0,
    op: null,

    // Função para receber os números e mostrar na tela, concatenados.
    recebe_numeros(a) {
        this.numberInput += a;
        document.getElementById("resultado").innerText = this.numberInput;
    },

    // Função para pegar o tipo de operador e o segundo número.
    operacao(a) {
        this.num1 = this.numberInput;
        this.numberInput = "";
        this.op = a;
        document.getElementById("resultado").innerText = this.num1 + " " + this.op;
    },

    // Função para calcular o resultado.
    result() {
        this.num2 = this.numberInput;

        switch (this.op) {
            case '+':
                this.resultado = parseFloat(this.num1) + parseFloat(this.num2);
                break;

            case '-':
                this.resultado = parseFloat(this.num1) - parseFloat(this.num2);
                break;

            case '/':
                if (parseFloat(this.num2) === 0) {
                    document.getElementById("resultado").innerText = "Erro";
                    return;
                }
                this.resultado = parseFloat(this.num1) / parseFloat(this.num2);
                break;

            case '*':
                this.resultado = parseFloat(this.num1) * parseFloat(this.num2);
                break;
        }

        document.getElementById("resultado").innerText = this.resultado;
        this.num1 = this.resultado;
        this.num2 = 0;
        this.numberInput = this.resultado.toString();
    },

    // Função para limpar o cálculo
    limpa_calculo() {
        this.numberInput = "";
        this.num1 = 0;
        this.num2 = 0;
        this.op = null;
        document.getElementById("resultado").innerText = this.numberInput;
    }
};

// Eventos dos botões
document.getElementById("btnclr").addEventListener("click", function() {
    calculadora.limpa_calculo();
});

document.getElementById("btn1").addEventListener("click", function() {
    calculadora.recebe_numeros(1);
});

document.getElementById("btn2").addEventListener("click", function() {
    calculadora.recebe_numeros(2);
});

document.getElementById("btn3").addEventListener("click", function() {
    calculadora.recebe_numeros(3);
});

document.getElementById("btn4").addEventListener("click", function() {
    calculadora.recebe_numeros(4);
});

document.getElementById("btn5").addEventListener("click", function() {
    calculadora.recebe_numeros(5);
});

document.getElementById("btn6").addEventListener("click", function() {
    calculadora.recebe_numeros(6);
});

document.getElementById("btn7").addEventListener("click", function() {
    calculadora.recebe_numeros(7);
});

document.getElementById("btn8").addEventListener("click", function() {
    calculadora.recebe_numeros(8);
});

document.getElementById("btn9").addEventListener("click", function() {
    calculadora.recebe_numeros(9);
});

document.getElementById("btn0").addEventListener("click", function() {
    calculadora.recebe_numeros(0);
});

document.getElementById("more").addEventListener("click", function() {
    calculadora.operacao('+');
});

document.getElementById("less").addEventListener("click", function() {
    calculadora.operacao('-');
});

document.getElementById("multiplication").addEventListener("click", function() {
    calculadora.operacao('*');
});

document.getElementById("division").addEventListener("click", function() {
    calculadora.operacao('/');
});

document.getElementById("equal").addEventListener("click", function() {
    calculadora.result();
});
