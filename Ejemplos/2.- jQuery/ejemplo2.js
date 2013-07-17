//MANEJO BÁSICO DE VARIABLES Y CONDICIONALES
function cargarBotonesCalculadora(){
	$('.operacion').click(function(){
		var op1 = $('#op1').val();
		var op2 = $('#op2').val();
		var operacion = $(this).html();

		//Comprobaciones de operaciones
		if(op1 == "" || op2 == ""){
			//Comprobamos que se hayan introducido los dos operandos
			actualizarResultado(0);
			alert("Debes introducir dos operandos");
		}else if((operacion == "/" || operacion == '%') && op2 == 0){
			//Comprobamos que no estemos haciendo una división por cero
			actualizarResultado(0);
			alert("No se puede realizar una división por cero");
		}else{
			//Si todo va bien, calculamos la operacion
			var resultado = calculadora(parseInt(op1), parseInt(op2), operacion);
			actualizarResultado(resultado);
		}
	});
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
	$('#resultado span').fadeOut(function(){
		$('#resultado span').html(resultado);
		$('#resultado span').fadeIn();

	});
}

//MANEJO DE EVENTOS DE RATÓN
function cargarEfectosRaton(){
	$('.operacion').mouseover(function(){
		$('#clase_operacion').html("Operación " + $(this).html());
	});
	$('.operacion').mouseout(function(){
		$('#clase_operacion').html("Selecciona operación");
	});
}


//ALMACENAMIENTO DE INFORMACIÓN CON ARRAYS
var operaciones = new Array();
function almacenarOperacion(op1, op2, operacion, resultado){
	var operacion = op1 + " " + operacion + " " + op2 + " = " +  resultado;
	operaciones.push(operacion);
}


//BUCLES BÁSICOS
function actualizarOperaciones(){
	$('#mostrar_resultados').fadeOut('fast', function(){
		if(operaciones.length == 0){
			$(this).html("Aún no se ha realizado ninguna operación");
		}else{
			var oldHtml = "";
			for(var i = 0; i < operaciones.length; i++){
				oldHtml += "<p>Operación " + (i+1) + " : " + operaciones[i] +"</p>";
			}
			$(this).html(oldHtml);
		}
		$(this).fadeIn('fast');
	});
}
