$(document).ready(function () {
	$('#buttonDonar').click(function () {
	    //Cambiar la imagen y registrar informacion del cliente
	    $.ajax({
	        type: "POST",
	        url: encodeURI("count.php"),
	        cache: false,
	        dataType: "text",
	        success: function(msg){
	            var res=$.trim(msg);
	            if (res=="True"){
	               $('#buttonDonar').text("Lo siento, ya has donado");
	               $('#buttonDonar').attr('class', 'btn btn-danger btn-large');
	            }
	            else{
	            	$('#buttonDonar').text("Gracias por donar");
	            	$('#buttonDonar').attr('class', 'btn btn-success btn-large');
	            	$("#botonesDonar").append('<br/><br/><a  class="page-scroll btn btn-warning btn-large" href="#mapS">Ir a mapa de donaciones</a>');
	            	init();
	            }
	        },
	        error: function(XMLHttpRequest, textStatus, errorThrown) {
	            alert("Ajax tardo en responder, vuelva a intentarlo");
	            console.log(errorThrown.Message);
	        },
	        async: false,
	    });
	});
});