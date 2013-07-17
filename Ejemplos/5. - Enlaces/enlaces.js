window.onload = iniciar;

function iniciar()
{
	var anchors = document.getElementsByTagName("a");
	
	for (var i = 0; i < anchors.length; i++)
	{
		var anchor = anchors[i];
		
		if (anchor.getAttribute("rel") != 'mostrarimagen')
			continue;
		
		// Se añader imagen después del enlace
		var image = document.createElement('img');
		image.src = 'arrow.png';
		anchor.appendChild(image);
		
		// Se añade imagen antes del enlace
		image = document.createElement('img');
		image.src = 'arrow_b.png';
		anchor.insertBefore(image, anchor.firstChild)
	}
}