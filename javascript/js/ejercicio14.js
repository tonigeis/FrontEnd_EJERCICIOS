function MayusculasMinusculas (mensaje){
	var resultado;

	if (mensaje == mensaje.toUpperCase()) {
		resultado = "La cadena está formada solamente por letras mayúsculas";
	}
	else if (mensaje == mensaje.toLowerCase()) {
		resultado = "La cadena está formada solamente por letras minúsculas";
	}
	else {
		resultado = "La cadena está formada por letras mayúsculas y minúsculas";
	}

	return resultado;
}

var cadena = prompt("Escriba una cadena de texto: ");
var resultado = MayusculasMinusculas(cadena);

alert(resultado);