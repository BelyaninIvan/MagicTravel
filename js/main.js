$(document).ready(function(){
    $("#carousel-header").owlCarousel({
        items: 1,
        nav: true,
        navText: []
    });
  });

$(window).on('load', function () {
    $("a[rel='m_PageScroll2id']").mPageScroll2id();
});

$('.card-icon-btn').click(function(){
    $(this).toggleClass('card-icon-btn2');
});