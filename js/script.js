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

  $(document).on('scroll', function () {
    let top = $(document).scrollTop();
    if (top >= 780) {
      $('.menu').addClass('scrollDown');
    } else {
      $('.menu').removeClass('scrollDown');
    }
  });

});