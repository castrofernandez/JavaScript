if (window.attachEvent)
	window.attachEvent('load', iniciar);
else
	window.addEventListener('load', iniciar, false);
	
function iniciar() {
	new Calculadora();
}

function Calculadora() {
	var valor = 0;
	var resultado = 0;
	var operacion;
	
	var memoria = 0;
	
	iniciarBotones();
	mostrarEnPantalla();
	
	function pulsarDigito() {
		var digito = this.valor;
	
		resultado *= 10;
		resultado += digito;
		
		mostrarEnPantalla();
	}
	
	function pulsarOperador() {
		operacion = this.id;
		
		valor = resultado;
		
		switch(operacion) {
			case "boton_signo":
				resultado = resultado * -1;
				mostrarEnPantalla();
				break;
			case "boton_raiz":
				resultado = Math.sqrt(resultado);
				mostrarEnPantalla();
				break;
			default:
				resultado = 0;
		}
	}
	
	function pulsarIgual() {
		switch(operacion) {
			case "boton_suma":
				resultado = valor + resultado;
				break;
			case "boton_resta":
				resultado = valor - resultado;
				break;
			case "boton_multiplicacion":
				resultado = valor * resultado;
				break;
			case "boton_division":
				resultado = valor / resultado;
				break;
		}
		
		mostrarEnPantalla();
	}
	
	function eliminarUltimoDigito() {
		resultado = parseInt(resultado / 10);
		
		mostrarEnPantalla();
	}
	
	function vaciarPantalla() {
		resultado = 0;
		
		mostrarEnPantalla();
	}
	
	function mostrarEnPantalla() {
		var pantalla = document.getElementById('contenido_pantalla');
	
		pantalla.innerHTML = resultado;
	}
	
	function limpiarMemoria() {
		memoria = 0;
		ocultarEtiquetaMemoria();
	}
	
	function recuperarMemoria() {
		resultado = memoria;
		mostrarEnPantalla();
	}
	
	function memoriaMas() {
		memoria = memoria + resultado;
		mostrarEtiquetaMemoria();
	}
	
	function memoriaMenos() {
		memoria = memoria - resultado;
		mostrarEtiquetaMemoria();
	}
	
	function mostrarEtiquetaMemoria() {
		document.getElementById('memoria').style.visibility = 'visible';
	}
	
	function ocultarEtiquetaMemoria() {
		document.getElementById('memoria').style.visibility = 'hidden';
	}
	
	function iniciarBotones() {
		for (var i = 0; i <= 9; i++) {
			var digito = document.getElementById('boton_' + i);
			digito.valor = i;
			
			digito.onclick = pulsarDigito;
		}
		
		document.getElementById('boton_C').onclick = eliminarUltimoDigito;
		document.getElementById('boton_AC').onclick = vaciarPantalla;
		
		document.getElementById('boton_suma').onclick = pulsarOperador;
		document.getElementById('boton_resta').onclick = pulsarOperador;
		document.getElementById('boton_multiplicacion').onclick = pulsarOperador;
		document.getElementById('boton_division').onclick = pulsarOperador;
		document.getElementById('boton_signo').onclick = pulsarOperador;
		document.getElementById('boton_raiz').onclick = pulsarOperador;
		
		document.getElementById('boton_igual').onclick = pulsarIgual;
		
		document.getElementById('boton_MC').onclick = limpiarMemoria;
		document.getElementById('boton_MR').onclick = recuperarMemoria;
		document.getElementById('boton_MMas').onclick = memoriaMas;
		document.getElementById('boton_MMenos').onclick = memoriaMenos;
	}
}