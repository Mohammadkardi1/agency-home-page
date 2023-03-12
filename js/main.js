$(function () {
    'use strict';

    var winH = $(window).height(),
        upperH = $('.upper-bar').innerHeight(), 
        navH = $('.navbar').innerHeight(); 
    $('.slider').height(winH - (upperH + navH));


    $('.featured-work ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');

        if ($(this).data('class') === 'all') {
            $('.gallery .col-md-3').css('opacity',1);
        } else {
            $('.gallery .col-md-3').css('opacity', .1);
            $($(this).data('class')).parent().css('opacity',1);
        }
    });
    $('.pricing-table .card').hover(function() {
        $($(this).find('ul li:nth-child(2)')).css({"background-color": "var(--red)","color": "var(--white)"});
        $($(this).find("ul li button")).css("background-color","var(--red)");
    }, function() {
        $($(this).find('ul li:nth-child(2)')).css({"background-color": "#f1f3f5","color": "var(--blue)"});
        $($(this).find("ul li button")).css("background-color","var(--blue)");
    })



    // $(".footer .helpful-links .links ul li").hover(function(){
    //     $($(this).prev().css("color","var(--red)"));
    // } , function() {
    //     $($(this).prev().css("color","var(--red)"));
    // })
});

// Please when you want to pick the hight of the element, use the function
// which is called "innerHeight()" and do not use the function "height()"
// because the function "height()" dose not consider the margin of the
// element