//$ = jquery

// JS
    // var x = document.getElementsByTagName('p');

    // console.log(x);

//jquery

// var x = $('p');
// console.log(x);

// $('#logo').hide();

$(function(){
    'use strict';

    // $('.enlace').hide();

    // $('main article:last').hide();

    //$('main article:last p:fist').remove();

    //$('main article:first h2').html("<h1>Helfasdfalo<h1>");

    $('.navegacion ul li:first a').attr('href', "http://udemy.com");

    $('main article:first img').on('click', function(){
        $(this).attr('src','img/imagen_2.jpg');
    });
    
});