// anchor

$(document).ready(function(){
    $(".arrow-down__link").on("click", function (e) {
        e.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 600);
    });
});


// burger menu
$('#toggle').click(function() {
    $(this).toggleClass('burger-menu--active');
    $('#overlay').toggleClass('overlay--active');
    $('body').toggleClass('body--active');
  });

  $('.overlay-menu__link').click(function() {
    $('.overlay').removeClass('overlay--active');
    $('body').removeClass('body--active');
    $('.burger-menu').removeClass('burger-menu--active');
  });

// google map
var map;
function initMap() {
  var uluru = { lat: 53.9061164, lng: 27.5467395 };
  map = new google.maps.Map(document.getElementById('map'), {
    center: uluru, 
    zoom: 15,
    scrollwheel: false,
    styles: [
        {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#444444"
                }
            ]
        },
        {
            "featureType": "administrative.country",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "off"
                },
                {
                    "hue": "#30ff00"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#f2f2f2"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "lightness": 45
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#719764"
                },
                {
                    "visibility": "on"
                }
            ]
        }
    ]

  });
  
  let icons = {
    position: {
      icon: {
        url: './assets/img/map_marker.png',
        size: new google.maps.Size(90, 90),
        scaledsize: new google.maps.Size(90, 90)
      }
    },
    logo: {
      icon: {
        url: '',
        size: new google.maps.Size(90, 90),
        scaledsize: new google.maps.Size(90, 90)
      }
    }
  };
  
  let features = [
    {
      position: new google.maps.LatLng(53.907293, 27.533850),
      type: 'position',
      contentString: 'map marker',
      content: 'I am here'
    }
  ];
  
  var infowindow = new google.maps.InfoWindow();
  
  features.forEach(feature => {
    let  marker = new google.maps.Marker({
      position: feature.position,
      icon: icons[feature.type].icon,
      map: map,
      title: feature.contentString
    });
    
    marker.addListener('click', function() {
      infowindow.setContent(feature.content);
      infowindow.open(map, marker);
      marker.setAnimation(google.maps.Animation.BOUNCE);
      setTimeout(function() {
        marker.setAnimation(null)
      }, 1400);
      
    } );
  });
  
}

google.maps.event.addDomListener(window, 'load', initMap); 



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
      $('.Background').removeClass('visually-hidden');
      $('.preloader').delay(100).fadeOut(1000);      
    });
  }
};


