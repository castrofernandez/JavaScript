$(function() {
	iniciarPaginado();
    iniciarIndice();
    iniciarCapturaTeclas();
});

// Paginado

function iniciarPaginado() {
	var anterior = null;
	
    $(".transparencia").each(function() {
	    $(this).next().hide();
	    
	    if (anterior != null)
	    {
	    	$(this).find(".anterior").click(function() {
	    		var diapositivaActual = $(this).parent().parent();
	    		
	    		diapositivaActual.prev().show().addClass("actual");
	    		diapositivaActual.hide().removeClass("actual");
	    		
	    		actualizarIndice(diapositivaActual.prev().attr("indice"));
	    	});
	    }
	    else
	    	$(this).find(".anterior").css("visibility", "hidden");
	    
	    $(this).find(".posterior").click(function() {
	    	var diapositivaActual = $(this).parent().parent();
	    		
	    	diapositivaActual.next().show().addClass("actual");
	    	diapositivaActual.hide().removeClass("actual");
	    	
	    	actualizarIndice(diapositivaActual.next().attr("indice"));
	    });
	    
	    anterior = $(this);
    });
    
    anterior.find(".posterior").css("visibility", "hidden");
}

// índice

function iniciarIndice() {
	$("#indice").find("a").each(function () {
		$(this).click(function() {
			$(".transparencia").hide().removeClass("actual");
			$("#indice").find("a").removeClass("activo");
			
			$("#indice_" + $(this).attr("id")).show().addClass("actual");
			$(this).addClass("activo");
		});
	});
}

function actualizarIndice(indice) {
	$("#indice > a").removeClass("activo");
	$("#" + indice).addClass("activo");
}

// Captura de teclas

function iniciarCapturaTeclas() {
	$(document).keydown(function(e){
	    if (e.keyCode == 37) { 
	       simularClicIzquierdo();
	       return false;
	    }
	    else if (e.keyCode == 39) {
		    simularClicDerecho();
		    return false;
	    }
    });
}

function simularClicIzquierdo() {
	var e = $.Event("click");

	$(".actual").find(".anterior").trigger( e );
}

function simularClicDerecho() {
	var e = $.Event("click");
	
	var actual = $(".actual");

	if (actual.next().length)
		actual.find(".posterior").trigger( e );
}