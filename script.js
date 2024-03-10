$(document).ready(function(){
    // Activar bxSlider
    $('.bxslider').bxSlider({
        auto: true,
        autoControls: false,
        stopAutoOnClick: true,
        pager: false,
        slideWidth: 700,
    });

    // Función para actualizar el reloj
    function updateClock() {
        var now = new Date();
        var timeString = now.toLocaleTimeString();
        var dateString = now.toLocaleDateString();
        $('#live-clock').html(dateString + ' ' + timeString);
    }

    setInterval(updateClock, 1000);
});
