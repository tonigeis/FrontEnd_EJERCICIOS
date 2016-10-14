var num1, num2, res;

num1 = prompt("Introduce un número");

if (!isNaN(num1)) {
	num2 = prompt("Introduce otro número");

	if (!isNaN(num2)) {
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