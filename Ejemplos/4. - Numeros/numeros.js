window.onload = iniciar;

function iniciar()
{
	document.getElementById('generarTexto').onclick = generarTexto;
	document.getElementById('mostrar').onclick = mostrarHTML;
}

// Mostrar texto con estilo
function generarTexto()
{
	ocultarHTML();
	
	// Texto tecleado
	var text = document.getElementById('texto').value;
	
	// Div en el que mostrar el texto
	var content = document.getElementById('contenido');
	content.innerHTML = '';
	
	// Arrays de estilo
	var fontFamilies = ['times', 'arial', 'courier', 'helvetica', 'tahoma'];
	var verticalAlign = ['text-top', 'text-bottom', 'middle'];
	var fontStyles = ['normal', 'italic', 'oblique'];
	var fontWeights = ['normal', 'bold', 'bolder', 'lighter'];
	
	// Bucle para recorrer los caractares
	for(var i = 0; i < text.length; i++)
	{
		var span = document.createElement('span');
		
		// Fuente
		var fontFamilyIndex = Math.round(Math.random() * (fontFamilies.length - 1));
		span.style.fontFamily = fontFamilies[fontFamilyIndex];
		span.textContent = text[i];
		
		// Tamaño de la fuente
		var fontSize = Math.round(Math.random() * 2 + 1);
		span.style.fontSize = fontSize + 'em';
		
		// Alineación vertical
		var vertical = Math.round(Math.random() * 3); 
		span.style.verticalAlign = verticalAlign[vertical];
		
		// Estilo de fuente
		var fontStyle = Math.round(Math.random() * (fontStyles.length - 1));
		span.style.fontStyle = fontStyles[fontStyle];
		
		// Grosor de fuente
		var fontWeight = Math.round(Math.random() * (fontWeights.length - 1));
		span.style.fontStyle = fontWeights[fontWeight];
		
		content.appendChild(span);
	}
}

// Mostrar HTML
function mostrarHTML()
{
	ocultarHTML();
	
	var sourceCode = document.getElementById('contenido').innerHTML;
	
	sourceCode = sourceCode.replace(/</g, '&lt;');
	sourceCode = sourceCode.replace(/>/g, '&gt;');
	
	document.getElementById('codigo').innerHTML = sourceCode;
}

// Ocultar HTML
function ocultarHTML()
{
	document.getElementById('codigo').innerHTML = '';
}