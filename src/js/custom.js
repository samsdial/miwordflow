$(document).ready(function(){
    // hover para capturar el evento tooltip
    $('a').hover(function (){
        //hover IN
        // Guardar el atributo title
        var titulo = $(this).attr('title'),
            fondo   = $(this).data('bg');
        // guardamion el titulo en un attr data- y eliminamos el attr title
        $(this).data('titulo', titulo).removeAttr('title');
        // Añadir nuestro propio tooltip
        $('<spam class="tooltip"></spam>').text(titulo).css('background-color', fondo).appendTo('body').fadeIn('slow');
    }, function(){
        //hover OUT
        // Reponer el titulo nativo
        $(this).attr('title', $(this).data('titulo'));
        // eliminiamos nuestro tooltip
        $('.tooltip').remove();

    }).mousemove(function(e){
        // console.log('moviendo', e);
        // Capturando la poscion del raton sobre el elemento a del tooltip
        var ratonX = e.pageX + 20,
            ratonY = e.pageY + 10;
        // hacer que el elemento se mueva junto con el puentero
        $('.tooltip').css({
            top: ratonY,
            left: ratonX
        });
    });
});