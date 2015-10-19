/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */
 var estados;
 var infos = [];
 var nombres =["Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Coahuila", "Colima", "Chiapas", "Chihuahua", "Ciudad de México","Durango", "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "Estado de México","Michoacán", "Morelos", "Nayarit", "Nuevo León", "Oaxaca", "Puebla", "Querétaro", "Quintana Roo","San Luis Potosí", "Sinaloa","Sonora","Tabasco","Tamaulipas","Tlaxcala", "Veracruz", "Yucatán", "Zacatecas"];
 var latitud=[21.886220,30.624184,25.141847, 18.956349,27.825021, 18.954081, 16.954253, 29.433254, 19.439283, 25.028647, 21.018873, 17.852566, 20.697803, 20.159015, 19.281148, 19.106873, 18.624801, 21.904171, 26.482852, 16.689273, 18.440640, 20.868439, 19.099376, 22.159833, 25.204294, 30.073675, 18.288602, 24.237283, 19.315142, 18.245458, 20.169759, 23.607644];
 var longitud=[-102.296108,-115.450810,-111.312908, -89.933596, -101.996103, -103.737274,-93.104961, -106.090977, -99.119226, -104.653189, -101.260388, -99.492371, -98.912978, -103.853266, -99.650693, -101.798272, -99.019252, -104.895579, -100.326425, -96.638399, -98.206699, -99.773037, -87.795304, -100.177210, -107.382115, -109.960145, -92.738345, -98.840955, -98.269238, -95.410415, -89.192532, -102.952693];

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Google Maps Scripts
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 6,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(22.284348, -100.136071), // New York

        // Disables the default Google Maps UI components
        disableDefaultUI: true,
        scrollwheel: false,
        draggable: true,

        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{"featureType":"water","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#aee2e0"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#abce83"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#769E72"}],"stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#7B8758"}],"stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"color":"#EBF4A4"}],"stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"visibility":"off"},{"color":"#8dab68"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#5B5B3F"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ABCE83"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#A4C67D"}],"stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#9BBF72"}],"stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#EBF4A4"}],"stylers":[{"visibility":"off"}]},{"featureType":"transit","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#87ae79"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#7f2200"},{"visibility":"off"}]},{"featureType":"administrative","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"},{"visibility":"on"},{"weight":4.1}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#495421"}]},{"featureType":"administrative.neighborhood","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"labels","stylers":[{"visibility":"off"}]}]
    };

    $.ajax({
            type: "POST",
            url: encodeURI("retrieve.php"),
            cache: false,
            dataType: "text",
            success: function(msg){
                estados=JSON.parse(msg);
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert("Ajax tardo en responder, vuelva a intentarlo");
                console.log(errorThrown.Message);
            },
            async: false,
        });
    var total=0;
    for(var j=0;j<(estados.length-1);j++){
        total+=parseInt(estados[j]["contador"]);
    }
    $('#clicks').text('Clicks totales: '+total);




    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
    var image = 'img/map-marker.png';
    var myLatLng = new google.maps.LatLng(19.284328, -99.136093);

    for(var i=0; i<nombres.length;i++){
        //var beachMarker
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(latitud[i], longitud[i]),
            //position: myLatLng,
            map: map,
            animation: google.maps.Animation.DROP,
            title:nombres[i],
            //icon: image
         });

        var infowindow = new google.maps.InfoWindow({content: nombres[i]});
        var va;
        if(total!=0){
            va=(parseInt(estados[i]["contador"])*100)/total;
        }else{
            va=0;
        }

        var content=nombres[i]+" "+va+"%";

        /*google.maps.event.addListener(beachMarker, 'click', function() {
            infowindow.setContent(content);
            infowindow.open(map,this);
         });*/  
        google.maps.event.addListener(marker,'click', (function(marker,content,infowindow){ 
        return function() {
        
        /* close the previous info-window */
       closeInfos();
        
           infowindow.setContent(content);
           infowindow.open(map,marker);
        
        /* keep the handle, in order to close it on next click event */
   infos[0]=infowindow;
        
        };
    })(marker,content,infowindow)); 
    }
}

function closeInfos(){
 
   if(infos.length > 0){
 
      /* detach the info-window from the marker ... undocumented in the API docs */
      infos[0].set("marker", null);
 
      /* and close it */
      infos[0].close();
 
      /* blank the array */
      infos.length = 0;
   }
}

//resize the map when the window size changes
google.maps.event.addDomListener(window, "resize", function () {
    var center = map.getCenter();
    google.maps.event.trigger(map, "resize");
    map.setCenter(center);
});
