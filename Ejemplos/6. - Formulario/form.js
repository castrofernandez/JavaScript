function validacion()
{
	var unfilled = document.getElementsByTagName('input');
	
	for (var i = 0; i < unfilled.length; i++)
	{
		var input = unfilled[i];
		
		var field_class = 'empty';
		
		// Solo se validan campos de texto vacíos
		if (input.getAttribute('type') != 'text' || input.value != '')
			field_class = 'field';
		
		input.parentNode.parentNode.className = field_class;
	}

	return false;
}