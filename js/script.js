$(() => {
  $('a[href^="#"]').click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $('body, html').animate({ scrollTop: destination }, 1100);
    return false;
  });

  $('.burger-menu').on('click', () => {
    $('.menu_links').toggleClass('active');
  });

  $(window).bind('scroll', function () {
    let navHeight = $(window).height() - 1;
    if ($(window).scrollTop() > navHeight) {
      $('.menu').addClass('fixed');
    }
    else {
      $('.menu').removeClass('fixed');
    }
  });

});