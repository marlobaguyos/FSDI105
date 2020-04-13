//$(function(){
    //'use strict';
    
    // $('.enlace').hide();

    // $('main article:last').hide();

    // $('main article:last p:first').remove();

    // $('main article:first h2').text("Hello");
    // $('main article:last h2').html("<h1>Pogi</h1>");

    // jQuery('.navegacion ul li:first a').attr('href', "http://udemy.com");

    // $('main article:first img').on('click', function(){
    //     $(this).attr('src', 'img/imagen_2.jpg');
    // });

    // var copy = $('main article:last').clone();

    // $('main').append(copy);
    // $(copy).appendTo('main');

    // $('main').prepend(copy);
    // $(copy).prependTo('main');

    // $('div.logo img').on('mouseleave', function(){
    //     //body of the function
    //     console.log('mouse leave');
    // });

    // $('div.logo img').on('mouseenter',function(){
    //     // $(this).remove();
    //     console.log('mouse enter ')
    // })

//})

// $(function(){
//     'use strict';
//     $('.logo img').on('click',function(){
//         $(this).animate({'width':'200px'}, 1000);
//     });

//     $('main article img').on('mouseenter', increasing);
//     $('main article img').on('mouseleave', reducing);

//     function increasing(){
//         $(this).animate({'width': '100%'});
//     }

//     function reducing(){
//         $(this).animate({'width': '350px'});
//     }

// });

// $(function(){
//     'use strict';
//     $('.logo img').click(function(){
//         $('main article:first').slideUp(1000);
//     });

//     $('aside').click(function(){
//         $('main article:first').slideDown(1000);
//     });

// });

// $(function(){
//     'use strict';
    
//     $('main article').addClass('activo');

//     $('#navegacion ul li a').on('click', function(event){
//         event.preventDefault();
//         $(this).addClass('activo');
//     })

//     $('main').on({
//         click: function(){
//             $(this).addClass('fondorojo');
//         },
//         mouseenter:function(){
//             $(this).addClass('activo');
//         },
//         mouseleave:function(){
//             $(this).addClass('activo fondorojo');
//         }
//     });

//     $('.logo img').css({'width': '200px'});

//     $('main article h2').css({'color': '#000000'});

//     $('aside').css({
//         'background':'#e1e1e1',
//         'text-transform':'uppercase',
//         'padding':'10px'
//     })



// });

$(function(){
    'use strict';

    $('.logo img').on('click',loadAjax);

    function loadAjax(){
        $.ajax('languages.txt' ,{
            success: addContent,
            type:'GET',
            dataType:'text'
        });
    }

    function addContent(data, status, jqxhr){
        $('aside').text(data);
        console.log(status);
    }

    //$('aside.sidebar').load();
});