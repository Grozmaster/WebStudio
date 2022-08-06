$('.mobile__menu').on('click', function () {
    // $('.popup').addClass('active');
    $('.popup').slideDown('active');
    
});
$('.close__popup').on('click', function () {
    // $('.popup').removeClass('active');
    $('.popup').slideUp('active');
});


$('.order__btn').on('click', function () {
    // $('.order__popup').addClass('open');
    $('.order__popup').slideDown('active');
    
});

$('.order__popup-close').on('click', function () {
    // $('.popup').removeClass('active');
    $('.order__popup').slideUp('active');
});


