$(function() {


    $(".btn-sidebar").click(function() {
        $(".sidebar").toggleClass("sidebar--isActive");
        $(".overlay").toggleClass("overlay--isActive");
    });

    $(".sidebar__btn").click(function() {
        $(".sidebar").removeClass("sidebar--isActive");
        $(".overlay").removeClass("overlay--isActive");
    });

    $(".btn-mobile-nav").click(function() {
        $(".mobile-nav").toggleClass("mobile-nav--isActive");
        $(".overlay").toggleClass("overlay--isActive");
    });

    $(".mobile-nav__btn").click(function() {
        $(".mobile-nav").removeClass("mobile-nav--isActive");
        $(".overlay").removeClass("overlay--isActive");
    });

    $(".overlay").click(function() {
        $(".sidebar").removeClass("sidebar--isActive");
        $(".overlay").removeClass("overlay--isActive");
        $(".mobile-nav").removeClass("mobile-nav--isActive");
    });


    var waypointHeader = new Waypoint({
        element: document.getElementById('header'),
        handler: function(direction) {
            $(".header__bar").toggleClass("header__bar--sticky");
            $(".btn").toggleClass("btn--small");
        },
        offset: 0
    })


    $('#Container').mixItUp();



});
