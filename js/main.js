$(function () {
  $(".goods__slider").slick({
    arrows: false,
    dots: true,
    default: "slick-dots",
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
  });
  $(".about__sliderbig").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".about__slider",
    dots: false,
    focusOnSelect: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  $(".about__slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".about__sliderbig",
    dots: true,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
});
// функція для бургер меню
$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger, .header__menu-nav").toggleClass("active");
  });
});
// функція для стлілок фільтра
$(document).ready(function () {
  $(".arrow-accordion").click(function (event) {
    $(".arrow-accordion , .goods__tipe-filters").toggleClass("open");
  });
});
$(document).ready(function () {
  $(".arrow-accordion-2").click(function (event) {
    $(".arrow-accordion-2 , .goods__tipe-filters-2").toggleClass("open");
  });
});
$(document).ready(function () {
  $(".arrow-accordion-3").click(function (event) {
    $(".arrow-accordion-3 , .goods__tipe-filters-3").toggleClass("open");
  });
});
$(document).ready(function () {
  $(".arrow-accordion-4").click(function (event) {
    $(".arrow-accordion-4 , .goods__tipe-filters-4").toggleClass("open");
  });
});
$(document).ready(function () {
  $(".arrow-accordion-5").click(function (event) {
    $(".arrow-accordion-5 , .goods__tipe-filters-5").toggleClass("open");
  });
});
$(document).ready(function () {
  $(".arrow-accordion-6").click(function (event) {
    $(".arrow-accordion-6 , .goods__tipe-filters-6").toggleClass("open");
  });
});
$(document).ready(function () {
  $(".arrow-accordion-7").click(function (event) {
    $(".arrow-accordion-7 , .goods__tipe-filters-7").toggleClass("open");
  });
});
// функція для вспливаючого меню і його ввимкнуння
$(document).ready(function () {
  $(".arrow-none").click(function (event) {
    $(".tovar-bar, .about__right-button, .overlay").removeClass("active");
  });

  $(".about__right-button").click(function (event) {
    $(".tovar-bar, .about__right-button, .overlay, arrow-none").addClass("active");
  });

  $(".tovar-bar__box-btn").click(function (event) {
    $(".tovar-bar__box").hide();
    $(".tovar-second").show();
    $(".arrow-none").hide();
  });
});

$(document).ready(function () {
  var counterValue = 1;

  $(".counter__btn.plus").click(function () {
    counterValue++;
    $(".counter__value").text(counterValue);
  });

  $(".counter__btn.minus").click(function () {
    if (counterValue > 1) {
      counterValue--;
      $(".counter__value").text(counterValue);
    }
  });
});
$(document).ready(function () {
  $(".about__colors-img").click(function (event) {
  $(this).toggleClass("active");
  });
  });
