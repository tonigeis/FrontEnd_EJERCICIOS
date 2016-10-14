var factorial = 1;

var numero = parseInt(prompt("Introduzca un número: "));

for (var i = 2; i <= numero; i++) {
	factorial = factorial*i;
}

alert("El factorial es " + factorial);