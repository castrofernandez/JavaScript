window.onload = iniciar;
window.onkeypress = cerrar;

function iniciar()
{
	crearVisor();
	registrarManejadores();
}

function crearVisor()
{
	var overlaid = document.createElement('div');
	overlaid.id = 'sobrepuesto';
	overlaid.style.display = 'none';
	document.body.appendChild(overlaid);
	
	var frame = document.createElement('div');
	frame.id = 'marco';
	overlaid.appendChild(frame);
	
	var image = document.createElement('image');
	image.src = 'img/large.png';
	frame.appendChild(image);
	
	var p = document.createElement('p');
	frame.appendChild(p);
	
	var a = document.createElement('a');
	a.id = 'cerrar';
	p.appendChild(a);
	a.appendChild(document.createTextNode('Cerrar'));
	a.onclick = cerrar;
}

function cerrar()
{
	document.getElementById('sobrepuesto').style.display = 'none';
}

function registrarManejadores()
{
	var anchors = document.getElementsByTagName('a');
	
	for (var i = 0; i < anchors.length; i++)
	{
		var anchor = anchors[i];
		
		if (anchor.getAttribute('rel') != 'ampliable')
			continue;
		
		anchor.onclick = function() 
		{ 
			mostrarCargando();
			
			var overlaid = document.getElementById('sobrepuesto');
			overlaid.style.display = 'block';
			
			var image = document.createElement('image');
			image.src = this.href;
			image.onload = imagenLista;
			
			return false; 
		};
	}

	return false;
}

var loader = null;

function mostrarCargando()
{
	if (loader == null)
	{
		loader = document.createElement('image');
		loader.src = 'loader.gif';
	}

	var frame = document.getElementById('marco');		
	frame.removeChild(frame.firstChild);
	frame.insertBefore(loader, frame.firstChild);	
	
	posicionarDiv(frame);
}

var imageToShow = null;

function imagenLista()
{
	imageToShow = this;
	
	window.setTimeout(cargarImagen, 1000);
}

function cargarImagen()
{
	var frame = document.getElementById('marco');		
	frame.removeChild(frame.firstChild);
	frame.insertBefore(imageToShow, frame.firstChild);	
	
	posicionarDiv(frame);
}

// Centrado de la caja en pantalla
function posicionarDiv(frame)
{
	frame.style.marginLeft = -1 * frame.scrollWidth / 2 + 'px';
	frame.style.marginTop = -1 * frame.scrollHeight / 2 + 'px';
}
