$(document).ready(function () {
    $.post("php/service.php",
  	{
      //user:"sergio",
    	type:"P1"
  	},
  	function(msg){
  		msg=JSON.parse(msg);
  		if (msg.length>0){
	  		var meg='<tr><td>*Usuario*</td><td>*Prueba*</td><td>*Puntaje*</td><td>*Fecha*</td></tr>';
	  		for(var i=0; i<msg.length;i++){
	  		   meg+='<tr><td>'+msg[i].name+'</td><td>'+msg[i].type+'</td><td>'+msg[i]['score']+'</td><td>'+msg[i]['date']+'</td></tr>';
	  		}
	    	$("#Restab").html(meg);
    	}
    	else{
    		$("#Restab").html('<tr><td>No hay registros</td></tr>');
    	}
  	});
});
