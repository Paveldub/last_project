// preloader 

var
  images = document.images,
  images_total_count = images.length,
  images_loaded_count = 0;
  perc_display = document.getElementById('load-perc');

for (var i = 0; i < images_total_count; i++) 
{
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
      $('.parallax').removeClass('visually-hidden');
      $('.preloader').delay(2000).fadeOut(1000);      
    });
  }
};

// log in button
$("#button").on('click', function () {
    $(this).addClass('hidden');
    $('#flipper').toggleClass('flipper--active')
});

$('#link').on('click', function () {
    $('#flipper').removeClass('flipper--active');
    $('#button').removeClass('hidden');
});

