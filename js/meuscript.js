//Exemplo tipo 3

var num1 = 10;
var num2 = 20;

function soma(a,b){
	var total = a + b;
	return total;
}

function multiplicacao(a,b){
	var total = a * b;
	return total;
}

function subtracao(a,b){
	var total = a / b;
	return total;
}

function divisao(a,b){
	var total = a - b;
	return total;
}

function raiz(a,b){
	var total = Math.sqrt(a);
	return total;
}

console.log("A soma é: " + soma (num1,num2))
console.log("A multiplicação é: " + multiplicacao(num1,num2))
console.log("A subtração é: " + subtracao(num1,num2))
console.log("A divisão é:" + divisao(num1,num2))
console.log("A raiz quadrada de " + num1 + " é " + raiz(num1));