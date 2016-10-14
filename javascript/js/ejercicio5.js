var num1, num2;

num1 = prompt("Introduce un número num1: ");

if (!isNaN(num1)) {
	num2 = prompt("Introduce un número num2: ");

	if (!isNaN(num2)) {
		if (num1 <= num2) {
			alert("num1 no es mayor que num2");
		}

		if (num2 > 0) {
			alert("num2 es positivo");
		}

		if (num1 < 0 || num1 != 0) {
			alert("num1 es negativo o distinto de cero");
		}

		if (num1 ++ < num2) {
			alert("Incrementar en 1 unidad el valor de num1 no lo hace mayor o igual que num2");
		}
	}
	else {
		alert(num2 + " no es un número");
	}
}
else {
	alert(num1 + " no es un número");
}