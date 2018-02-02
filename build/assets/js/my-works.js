// blur
$(document).ready(function () {
  blur();
})
$(window).resize(function () {
  blur();
});

function blur() {
  var imgWidth = $('.rumors__background').width(),
    imgHeight = $('.rumors__background').height(),
    blurSection = $('.rumors'),
    blur = $('.rumors__form-blur'),
    posY = blurSection.offset().top - blur.offset().top,
    posX = blurSection.offset().left - blur.offset().left;

  blur.css({
    'background-size': imgWidth + 'px' + ' ' + imgHeight + 'px',
    'background-position': posX + 'px' + ' ' + posY + 'px'
  })
}

// anchor
$(document).ready(function () {
  $(".arrow-down__link").on("click", function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 600);
  });
});

// burger menu
$('#toggle').click(function () {
  $(this).toggleClass('burger-menu--active');
  $('#overlay').toggleClass('overlay--active');
  $('body').toggleClass('body--active');
});

$('.overlay-menu__link').click(function () {
  $('.overlay').removeClass('overlay--active');
  $('body').removeClass('body--active');
  $('.burger-menu').removeClass('burger-menu--active');
});

// anchor slow move
$(document).ready(function () {
  $(".anchors__link").on("click", function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 600);
  });
});

// preloader 

var
  images = document.images,
  images_total_count = images.length,
  images_loaded_count = 0;
perc_display = document.getElementById('load-perc');

for (var i = 0; i < images_total_count; i++) {
  image_clone = new Image();
  image_clone.onload = image_loaded;
  image_clone.onerror = image_loaded;
  image_clone.src = images[i].src;
}
// console.log(images_total_count);
// console.log(images_loaded_count);
function image_loaded() {
  images_loaded_count++;
  perc_display.innerHTML = (((100 / images_total_count) * images_loaded_count) << 0) + '%';

  if (images_loaded_count >= images_total_count) {
    $(window).on('load', function () {
      $('.wrapper').removeClass('visually-hidden');
      $('.Background').removeClass('visually-hidden');
      $('.preloader').delay(1000).fadeOut(1000);
    });
  }
};

// ajax form
