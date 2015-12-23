var respuestas;
$(document).ready(function () {

	$.post("php/getPreguntas.php",
		        {
		            type:"P1"
		        },
		        function(msg){
		            msg=JSON.parse(msg);
		            if (msg.length>0){
		                respuestas=msg;
		            }
		            else{
		                alert("No se encontraron respuestas");
		            }
	}).done(function(){
		presentacionP1();
   	});

   		$('#Terminar').click(function(){
		var buenas=0;
		for	(index = 0; index < respuestas.length; index++) {
			if(document.querySelector('input[name="'+index+'"]:checked').value==respuestas[index].a){
				buenas++;
			}
		}
		$("#about").empty();
		$("#about").append('<p style="text-align:center">'+'Tu puntaje es de '+buenas+'/'+respuestas.length+'</p><br/><br/><br/>');


	    $.ajax({
            type: "POST",
            data:{	type:"P1", score:buenas, time:"-"},
            url: encodeURI("php/update.php"),
            cache: false,
            crossDomain: true,
            success: function(msg){
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
  			},
            async: false,
        })


	});


});

function presentacionP1() {
	$("#Cuerpo").empty();
	$("#Cuerpo").append('<form id="preguntas" method="POST">');
	for	(index = 0; index < respuestas.length; index++) {
		$("#Cuerpo").append('<p style="text-align:center">'+respuestas[index].pregunta+'</p><input type="radio" name="'+index+'" value="1" checked>'+respuestas[index].r1+'<br><input type="radio" name="'+index+'" value="2">'+respuestas[index].r2+'<br><input type="radio" name="'+index+'" value="3">'+respuestas[index].r3+'<br><input type="radio" name="'+index+'" value="4">'+respuestas[index].r4+'<br/><br/>');
	}
    $("#Cuerpo").append('</form>');

}

