var num1, num2;

num1 = prompt("Introduce un número: ");

if (!isNaN(num1)) {
	num2 = prompt("Introduce otro número: ");

	if (!isNaN(num2)) {
		if (num1 > num2) {
			alert("El número " + num1 + " es mayor que " + num2);
		}
		else if (num2 > num1) {
			alert("El número " + num2 + " es mayor que " + num1);
		}
		else{
			alert("Los números son iguales");
		}

		res = parseFloat(num1) + parseFloat(num2);
		alert("El resultado es " + res);
	}
	else {
		alert(num2 + " no es un número");
	}
}
else {
	alert(num1 + " no es un número");
}