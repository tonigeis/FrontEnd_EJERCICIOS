function numeroParImpar(n){
	var resultado;

	if (n % 2 == 0) {
		resultado = "El número " + n + " es par";
	} 
	else {
		resultado = "El número " + n + " es impar";
	}

	return resultado;
}

var numero = prompt("Indica un número entero: ");

var resultado = numeroParImpar(numero);

alert(resultado);