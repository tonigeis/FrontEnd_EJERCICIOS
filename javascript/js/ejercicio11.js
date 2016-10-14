var numeros = [];

numeros.push(parseInt(prompt("Primer número: ")));
numeros.push(parseInt(prompt("Segundo número: ")));
numeros.push(parseInt(prompt("Tercer número: ")));
numeros.push(parseInt(prompt("Cuarto número: ")));

var max = numeros[0];

for (i = 1; i < numeros.length; i++) {
	if (numeros[i] > max) {
		max = numeros[i];
	}
}

alert("El número más grande es " + max);