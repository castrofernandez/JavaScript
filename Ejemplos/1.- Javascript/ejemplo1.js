//MANEJO BÁSICO DE VARIABLES Y CONDICIONALES
function calcularResultado(element){
	var op1 = document.getElementById('op1').value;
	var op2 = document.getElementById('op2').value;
	var operacion = element.innerHTML;

	//Comprobaciones de operaciones
	if(op1 == "" || op2 == ""){
		//Comprobamos que se hayan introducido los dos operandos
		alert("Debes introducir dos operandos");
		actualizarResultado(0);
	}else if((operacion == "/" || operacion == '%') && op2 == 0){
		//Comprobamos que no estemos haciendo una división por cero
		alert("No se puede realizar una división por cero");
		actualizarResultado(0);
	}else{
		//Si todo va bien, calculamos la operacion
		var resultado = calculadora(parseInt(op1), parseInt(op2), operacion);
		actualizarResultado(resultado);
	}
}


//OPERACIONES ARITMÉTICAS BÁSICAS
function calculadora(op1, op2, operacion){
	var resultado = 0;
	switch(operacion){
		case "+":
			resultado = op1 + op2;
			break;
		case "-":
			resultado = op1 - op2;
			break;
		case "*":
			resultado = op1 * op2;
			break;
		case "/":
			resultado = (op1 / op2).toFixed(2);
			break;
		case "%":
			resultado = op1 % op2;
			break;
	}
	almacenarOperacion(op1, op2, operacion, resultado);
	return resultado;
}


//ACCESO Y MODIFICACIÓN DE ELEMENTOS DEL DOM
function actualizarResultado(resultado){
	var resultadoP = document.getElementById('resultado');
	resultadoP.innerHTML = resultado;
}


//MANEJO DE EVENTOS DE RATÓN
function ratonEntra(element){
	var clase_operacion = document.getElementById('clase_operacion')
	clase_operacion.innerHTML = "Operación " + element.innerHTML;
}
function ratonSale(){
	var clase_operacion = document.getElementById('clase_operacion')
	clase_operacion.innerHTML = "Selecciona operación";
}


//ALMACENAMIENTO DE INFORMACIÓN CON ARRAYS
var operaciones = new Array();
function almacenarOperacion(op1, op2, operacion, resultado){
	var operacion = op1 + " " + operacion + " " + op2 + " = " +  resultado;
	operaciones.push(operacion);
}


//BUCLES BÁSICOS
function actualizarOperaciones(){
	var div = document.getElementById("mostrar_resultados");
	div.innerHTML = "";
	if(operaciones.length == 0){
		alert("Aún no se ha realizado ninguna operación");
	}else{
		for(var i = 0; i < operaciones.length; i++){
			div.innerHTML += "<p>Operación " + (i+1) + " : " + operaciones[i] +"</p>"
		}
	}
}
