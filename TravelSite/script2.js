$(function(){
    'use strict';
    
    // $('.enlace').hide();

    // $('main article:last').hide();

    // $('main article:last p:first').remove();

    // $('main article:first h2').text("Hello");
    // $('main article:last h2').html("<h1>Pogi</h1>");

    jQuery('.navegacion ul li:first a').attr('href', "http://udemy.com");

    $('main article:first img').on('click', function(){
        $(this).attr('src', 'img/imagen_2.jpg');
    });

})