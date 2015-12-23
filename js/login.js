var redirect=false;
$(document).ready(function () {
	$('#loginbutton').click(function(){
		  $.ajax({
            type: "POST",
            data:{	user:$("#user").val(), password:$("#pass").val()},
            url: encodeURI("php/log.php"),
            cache: false,
            crossDomain: true,
            success: function(msg){
		  		msg=JSON.parse(msg);
		  		if (msg.length>0){
			  		alert("Bienvenido "+msg[0].name+"!");
			  		window.location="menu.html";
			  		redirect=true;
		    	}
		    	else{
		    		alert("Usuario o contraseña incorrecto");
		    	}
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
     				alert("Ajax tardo en responder, vuelva a intentarlo");
     				console.log(errorThrown.Message);
  			},
            async: false,

        }).done(function(){
        	if(redirect==true){
        		window.location="menu.html";
        	}
        }); 

		/*$.post("log.php",
	  	{
	    	user:$("#user").val(),
	    	password:$("#pass").val()
	  	},
	  	function(msg){
	  		alert(msg);
	  		msg=JSON.parse(msg);
	  		if (msg.length>0){
		  		alert("Bienvenido "+msg[0].name+"!");
		  		window.location="menu.html";
	    	}
	    	else{
	    		alert("Usuario o contraseña incorrecto");
	    	}
	  	});*/
	return false;
	});
});