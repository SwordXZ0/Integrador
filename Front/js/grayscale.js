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

$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

