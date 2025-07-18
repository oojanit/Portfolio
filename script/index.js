$(document).ready(function () {

    // gnb scroll effect
    $(window).on('scroll', function () {
        var scTop = $(this).scrollTop();

        console.log(scTop);

        if (scTop >= 0 && scTop < $('#project').offset().top) {
            $('header li').eq(0).addClass('on').siblings().removeClass('on');
        } else if (scTop >= $('#project').offset().top && scTop < $('#design1').offset().top) {
            $('header li').eq(1).addClass('on').siblings().removeClass('on');
        } else if (scTop >= $('#design1').offset().top && scTop < $('#design2').offset().top) {
            $('header li').eq(2).addClass('on').siblings().removeClass('on');
        } else if (scTop >= $('#design2').offset().top) {
            $('header li').eq(3).addClass('on').siblings().removeClass('on');
        }
    });

    // gnb click function
    $('header li a').click(function (e) {
        $(this).parent('li').addClass('on').siblings().removeClass('on');
    });

    // design#1 gallery hover description
    $('.gallery li').mouseover(function () {
        $(this).find('h4').stop().animate({
            'opacity': 1
        }, 300);
    });
    $('.gallery li').mouseout(function () {
        $(this).find('h4').stop().animate({
            'opacity': 0
        }, 300);
    });

    // gallery modal popup
    $('.gallery li a').click(function (e) {
        e.preventDefault();
        var imgSrc = $(this).find('img').attr('src');
        $('.modal div img').attr('src',imgSrc);
        $('.modal').show();
    });
    $('.modal').click(function(){
        $(this).hide();
    });


});