$(function () {

    $open = $('#open');
    $close = $('#close');
    $bgMenu = $('#bg-menu');
    $link = $('.bg-nav-item a');

    $open.click(function () {
        $open.toggleClass('active');
        $bgMenu.fadeToggle();
        $close.toggleClass('active');
    });

    $close.click(function () {
        $open.toggleClass('active');
        $bgMenu.fadeToggle();
        $close.toggleClass('active');
    });

    $link.click(function () {
        $open.toggleClass('active');
        $bgMenu.fadeToggle();
        $close.toggleClass('active');
    });

    $(document).ready(function () {
        var pagetop = $('.pagetop');
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                pagetop.fadeIn();
            } else {
                pagetop.fadeOut();
            }
        });
        pagetop.click(function () {
            $('body, html').animate({
                scrollTop: 0
            }, 500);
            return false;
        });
    });


});