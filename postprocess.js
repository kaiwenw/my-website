$( window ).resize(function() {
    setScreen();
});

$(document).ready(function () {
    setScreen();         

    $(document).on("scroll", onScroll);

    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('toptabs_active');
        })
        $(this).addClass('toptabs_active');

        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-$('header').outerHeight(true)+3
        }, 500, 'swing', function () {
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPosition = $(document).scrollTop();
    $('nav a').each(function () {
        var currentLink = $(this);
        var refElement = $(currentLink.attr("href"));
        if (refElement.position().top <= scrollPosition + $('header').outerHeight(true) +1 && refElement.position().top + refElement.height() > scrollPosition + $('header').outerHeight(true) +1) {
            $('nav ul li a').removeClass("toptabs_active");
            currentLink.addClass("toptabs_active");
        }
        else{
            currentLink.removeClass("toptabs_active");
        }
    });
}


function setScreen() {
    $('#mainbody').css('margin-top',$('header').outerHeight(true)+5);
    
    //Check if window width is small
    if ($(document).width() < 800 ){
        $('#about').css('float','none');
        $('#news').css('float','none');
        $('#aboutvsnews').css('clear','both');
        $('#about').css('width', '94%');
        $('#news').css('width', '94%');
        $('nav ul li').css('margin-top','-10px');
        $('nav ul li').css('margin-bottom','-10px');
    }
    else
    {
        $('#about').css('float','left');
        $('#news').css('float','right');
        $('#aboutvsnews').css('clear','none');
        $('#about').css('width', '60%');
        $('#news').css('width', '35%');
        $('nav ul li').css('margin-top','0px');
        $('nav ul li').css('margin-bottom','0px');
    }
    
}