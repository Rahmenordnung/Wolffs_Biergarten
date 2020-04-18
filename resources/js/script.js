/* global $ */



/* sticky navigation with some code from "waypoint" plugin*/

$('document').ready(function() {


$('.js-section-features').waypoint(function(direction) {
    if(direction == "down") {
        $('nav').addClass('sticky');
    }else{
        $('nav').removeClass('sticky');
    }
},{
  offset: '60px;'
});



 /* Scroll on buttons */


     $('.js-scrollToPrice').click(function () {
       $('html, body').animate({scrollTop: $('.js-Prices').offset().top}, 1000);
    });

    $('.js-scrollToCities').click(function () {
       $('html, body').animate({scrollTop: $('.js-Cities').offset().top}, 1000);
    });










    /* mobile navigation---responsive */

    $('.js-mobileIcon').click(function() {
        var nav = $('.js-main-nav');
        var burger = $('.js-mobileIcon i');

        nav.slideToggle(200);

        if (burger.hasClass('ion-android-menu')) {
            burger.addClass('ion-close-round');
            burger.removeClass('ion-android-menu');
        } else {
            burger.addClass('ion-android-menu');
            burger.removeClass('ion-close-round');
        }
    });

});

/*food hover effects */
$(function() {

    $(' #da-thumbs > li').each( function() { $(this).hoverdir({
        hoverDelay : 75
    }); });

});

$(function() {

    $(' #da-thumbs2 > li').each( function() { $(this).hoverdir({
        hoverDelay : 75
    }); } );

});
$(function() {

    $(' #da-thumbs3 > li, #da-thumbs4 > li').each( function() { $(this).hoverdir({
        hoverDelay : 75
    });
});

});

/*  animate */
/*icon 1-food*/

       $(".ikon_1").on("mouseenter", function() {
        $('.ikon_1').addClass('animated bounce');
    });
    $(".ikon_1").on("mouseleave", function() {
        $('.ikon_1').removeClass('animated bounce');
        $(this).removeClass('.icon-box_down_grey');
    });
  $("div.German_Food").on("mouseenter", function() {
        $('div.German_Food').addClass('icon-box_down_grey');
        $(this).addClass('icon-box_down_grey');
    });
    $("div.German_Food").on("mouseleave", function() {
        $('div.German_Food').removeClass('icon-box_down_grey');
        $(this).removeClass('.icon-box_down_grey');
    });

/*icon 2-bier*/

    $(".ikon_2").on("mouseenter", function() {
        $('.ikon_2').addClass('animated tada');
    });
    $(".ikon_2").on("mouseleave", function() {
        $('.ikon_2').removeClass('animated tada');
        $(this).removeClass('.icon-box_down_red');
    });
  $("div.German_Bier").on("mouseenter", function() {
        $('div.German_Bier').addClass('icon-box_down_red');
        $(this).addClass('icon-box_down_red');
    });
    $("div.German_Bier").on("mouseleave", function() {
        $('div.German_Bier').removeClass('icon-box_down_red');
        $(this).removeClass('icon-box_down_red');
    });


/*icon 3-leaf*/

    $(".ikon_3").on("mouseenter", function() {
        $('.ikon_3').addClass('animated pulse');
    });
    $(".ikon_3").on("mouseleave", function() {
        $('.ikon_3').removeClass('animated pulse');
        $(this).removeClass('.icon-box_down_orange');
    });
  $("div.German_Vegan").on("mouseenter", function() {
        $('div.German_Vegan').addClass('icon-box_down_orange');
        $(this).addClass('icon-box_down_orange');
    });
    $("div.German_Vegan").on("mouseleave", function() {
        $('div.German_Vegan').removeClass('icon-box_down_orange');
        $(this).removeClass('icon-box_down_orange');
    });


/*  price offers */
/*offer left premium*/

       $(".left-offer").on("mouseenter", function() {
        $('.left-offer').addClass('animated pulse');
    });
    $(".left-offer").on("mouseleave", function() {
        $('.left-offer').removeClass('animated pulse');
        $(this).removeClass('.icon-box_down_grey');
    });

/*offer center pro*/

       $(".center-offer").on("mouseenter", function() {
        $('.center-offer').addClass('animated pulse');
    });
    $(".center-offer").on("mouseleave", function() {
        $('.center-offer').removeClass('animated pulse');
        $(this).removeClass('.icon-box_down_grey');
    });

/*offer starter pro*/

       $(".right-offer").on("mouseenter", function() {
        $('.right-offer').addClass('animated pulse');
    });
    $(".right-offer").on("mouseleave", function() {
        $('.right-offer').removeClass('animated pulse');
        $(this).removeClass('.icon-box_down_grey');
    });


/*login form*/
























