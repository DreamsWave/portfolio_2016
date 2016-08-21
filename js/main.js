$(function() {


    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles-js', '/js/particlesjs-config.json', function() {

    });


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

    $(".mobile-nav__link").click(function() {
        $(".mobile-nav").removeClass("mobile-nav--isActive");
        $(".overlay").removeClass("overlay--isActive");
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
        offset: "-70%"
    })

    $("nav a, .header__logo, .about__profile a").smoothScroll({
        offset: -40,
        speed: 1000,
    })

    $('#Container').mixItUp();

    new WOW().init();


    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'alwaysShowNavOnTouchDevices': true
    });

    $(".map--toggle").click(function() {
        $(".map").toggleClass("map--opened");
    });

});
