function isInt(n) 
{
    return n != "" && !isNaN(n) && Math.round(n) == n;
}

var letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T']

var dni, numero_dni, letra_dni, resto;

dni = prompt("Indique su DNI: ");

numero_dni = dni.substr(0,8);
letra_dni = dni.substr(8,1);

if (dni.length == 9 && isInt(numero_dni) && isNaN(letra_dni)) {
	resto = numero_dni % 23;
		
	if (letra_dni == letras[resto]) {
		alert("El número y la letra del DNI son correctos");
	}
	else{
		alert("La letra indicada no es correcta");
	}
}
else {
	alert("Debe indicar 9 caracteres, 8 números y una letra");
}