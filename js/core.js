$(document).ready(function($) {

    $('.brand-js .dropdown-toggle').click(function() {
        $('.brand-js .dropdown-menu').toggle('show');
    });

    $('.range-js .dropdown-toggle').click(function() {
        $('.range-js .dropdown-menu').toggle('show');
    });

    $('.size-js .dropdown-toggle').click(function() {
        $('.size-js .dropdown-menu').toggle('show');
    });
    $('.color-js .dropdown-toggle').click(function() {
        $('.color-js .dropdown-menu').toggle('show');
    });

    $('.dropdown-close-filters-js a').click(function() {
        $(this).parents('.dropdown-menu').css('display', 'none');
    });



});