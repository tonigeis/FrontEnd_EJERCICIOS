var numero, letra;

function isInteger(n) {
    return (typeof n == 'number' && /^-?\d+$/.test(n+''));
}

numero = parseFloat(prompt("Introduzca un número: "));

if (isInteger(numero) && numero <= 20 && numero >= 0) {
	if (19 <= numero && numero <= 20) {
		letra = "A";
	}
	else if (16 <= numero && numero <= 18) {
		letra = "B";
	}
	else if (12 <= numero && numero <= 15) {
		letra = "C";
	}
	else if (9 <= numero && numero <= 11) {
		letra = "D";
	}
	else if(0 <= numero && numero <= 8) {
		letra = "E";
	}

	alert("La calificación es " + letra);
}
else{
	alert("Debe introducir un número entero entre 0 y 20");
}