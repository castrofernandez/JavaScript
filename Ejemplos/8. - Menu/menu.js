$(

   function () {

          $("#menu").hide();

          $("#boton").toggle (
          					function () { 
          								
          								$("#menu").fadeIn(2000, 
          								
          								                function(){ 
          										                    $("#boton").html("Ocultar menú");
          								                          }
          								                 ) 
          								}, 
          					
          					function () { 
          					
          					            $("#menu").fadeOut(2000, 
          					            
          					                              function(){ 
          					                                        $("#boton").html("Mostrar menú");
          					                                        }
          					                              ) 
          					             }
          					              
          					   ); //toggle


$("#menu > li > ul").hide();  

$("#menu > li").hover (

					function () { $(this).children("ul").slideDown(600, "easeOutBounce");  },

                    function () { $(this).children("ul").slideUp(400)  }  

				);



}





)

