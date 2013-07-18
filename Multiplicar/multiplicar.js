var DURACION_PARTIDA = 10;

if (window.attachEvent)
	window.attachEvent('load', iniciar);
else
	window.addEventListener('load', iniciar, false);
	
function iniciar() {
	var op1 = document.getElementById("operando1");
	var op2 = document.getElementById("operando2");
	var resultado = document.getElementById("resultado");
	var tiempo = document.getElementById("tiempo");
	var calificacion = document.getElementById("calificacion");
	var historial = document.getElementById("historial");

	var intervalo = null;
	var partida = null;

	function lanzarMultiplicar() {
		intervalo = setTimeout(
						function() { partida = new Multiplicar(op1, op2, resultado, tiempo, calificacion, historial, lanzarMultiplicar) },
						1000
		);
	}
	
	tiempo.onclick = function() {
		if (intervalo == null) {
			lanzarMultiplicar();
		} else {
			clearInterval(intervalo);
			
			if (partida != null) 
				partida.parar();
			
			intervalo = null;
			tiempo.innerHTML = "INICIAR";
			tiempo.className = "circulo texto-iniciar";
		}
	}
}

function Multiplicar(op1, op2, resultado, tiempo, calificacion, historial, retorno) {
	var operando1 = Math.floor(Math.random() * 9 + 1);
	var operando2 = Math.floor(Math.random() * 9 + 1);
	
	var respuesta = 0;
	
	var instante = DURACION_PARTIDA;
	
	op1.innerHTML = operando1;
	op2.innerHTML = operando2;
	resultado.innerHTML = "?";
	tiempo.innerHTML = DURACION_PARTIDA;
	tiempo.className = "circulo";
	calificacion.innerHTML = "";
	calificacion.className = "circulo sin-resolver";
	
	var intervalo = setInterval(temporizador, 1000);
	
	document.body.onkeydown = function(e) {
		if (e.keyCode >= 48 && e.keyCode <= 57 && respuesta < 10) {
			var numero = e.keyCode - 48;
			
			respuesta = respuesta * 10 + numero;
		} else if (e.keyCode == 8) {
			respuesta = parseInt(respuesta / 10);
		} else if (e.keyCode == 13) {
			parar();
			
			mostrarResultado();
			incluirEnHistorial();
			
			retorno();
		}
		
		resultado.innerHTML = respuesta == 0 ? "?" : respuesta;
	}
	
	function temporizador() {
		instante--;
		
		if (instante == 0) {
			parar();
			

			
			incluirEnHistorial();
			
			retorno();
		}
			
		tiempo.innerHTML = instante;
	}
	
	function mostrarResultado() {
		var resultado = comprobar();
			
		calificacion.innerHTML = resultado.texto;
		calificacion.className = "circulo " + resultado.clase;
	}
	
	this.parar = function() {
		parar();
		op1.innerHTML = op2.innerHTML = resultado.innerHTML = "?";
	}

	function parar() {
		clearInterval(intervalo);
		document.body.onkeydown = null;
	}
	
	function comprobar() {
		var correcto = respuesta == operando1 * operando2;
		var calificacionClase, calificacionTexto;
		
		if (correcto) {
			calificacionClase = "bien";
			calificacionTexto = "BIEN";	
		} else {
			calificacionClase = "mal";
			calificacionTexto = "MAL";	
		}
		
		return { clase: calificacionClase, texto: calificacionTexto };
	}
	
	function incluirEnHistorial() {
		var resultado = comprobar();
	
		var br = document.createElement("br");
		br.className = "clear";
	
		historial.insertBefore(br, historial.firstChild);
		historial.insertBefore(crearDiv("circulo-mini calificacion-mini " + resultado.clase, resultado.texto), historial.firstChild);
		historial.insertBefore(crearDiv("circulo-mini", operando1 * operando2), historial.firstChild);
		historial.insertBefore(crearDiv("circulo-mini", "="), historial.firstChild);
		historial.insertBefore(crearDiv("circulo-mini", operando2), historial.firstChild);
		historial.insertBefore(crearDiv("circulo-mini", "X"), historial.firstChild);
		historial.insertBefore(crearDiv("circulo-mini", operando1), historial.firstChild);
	}
	
	function crearDiv(clase, valor) {
		var div = document.createElement("div");
		div.className = clase;
		div.innerHTML = valor;
		
		return div;
	}
}