var redirect=false;
$(document).ready(function () {
	$('#loginbutton').click(function(){
		if(($("#pass").val()==$("#pass2").val()) && $("#pass").val()!=''){
		  $.ajax({
            type: "POST",
            data:{	user:$("#user").val()},
            url: encodeURI("php/signup.php"),
            cache: false,
            crossDomain: true,
            success: function(msg){
		  		msg=JSON.parse(msg);
		  		if (msg.length>0){
			  		alert('El usuario ya existe, elija otro porfavor');
		    	}
		    	else{
		    		alert("Bienvenido "+$("#user").val()+"!");
		    		guardarUsuario();
		    		redirect=true;
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
	}
	else{
		alert("Las contraseñas no concuerdan");
	}
	return false;
	});
});

function guardarUsuario(){
	  $.ajax({
            type: "POST",
            data:{	user:$("#user").val(), password:$("#pass").val()},
            url: encodeURI("php/signupGrabar.php"),
            cache: false,
            crossDomain: true,
            success: function(msg){
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
  			},
            async: false,
        })
}