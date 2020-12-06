"use strict";

$(function () {
  $('a[href^="#"]').click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $('body, html').animate({
      scrollTop: destination
    }, 1100);
    return false;
  });
  $('.burger-menu').on('click', function () {
    $('.menu_links').toggleClass('active');
  });
});