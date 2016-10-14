var entradas, descuento;

function isInteger(n) {
    return (typeof n == 'number' && /^-?\d+$/.test(n+''));
}

entradas = parseFloat(prompt("Introduzca un número de entradas: "));

if (isInteger(entradas) && entradas > 0) {
	if (entradas == 1) {
		descuento = "0%";
	}
	else if (entradas == 2) {
		descuento = "10%";
	}
	else if (entradas == 3) {
		descuento = "15%";
	}
	else if (entradas == 4) {
		descuento = "20%";
	}
	else{
		descuento = "25%";
	}

	alert("Tiene un descuento del " + descuento);
}
else{
	alert("Debe introducir un número entero de entradas más grande que 0");
}