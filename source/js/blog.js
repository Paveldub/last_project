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

//anchors
$(document).ready(function(){
    $(".arrow-down__link").on("click", function (e) {
        e.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 600);
    });
});

$(document).ready(function(){
  $(".anchors__link").on("click", function (e) {
      e.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 600);
  });
});

// links menu transition 
let scrollMenu = (function() {
    const $news = $('.article__text');
    const $item = $('.anchors__items');
    const $link = $('.anchors__link');
    const $wrapMenu = $('.anchors');
    let positionArticle = [];
    let offsetHeight = 0; // смещение реагирования на сменю меню
  
    _setPositionArticle = function(element) { // определяем высоту объекта
      const len = element.length;
      element.each(function(item) {
        positionArticle[item] = {};
        positionArticle[item].top = $(this).offset().top - offsetHeight;
        positionArticle[item].bottom =
        positionArticle[item].top + $(this).innerHeight();
      });
    //   console.log(positionArticle);
    };
  
    _scrollPageFixMenu = function(e) { // фикс высота
      let scroll = window.pageYOffset;
      if (scroll < $news.offset().top) {
        $wrapMenu.removeClass('fixed');
      } else {
        $wrapMenu.addClass('fixed');
      }
    };
  
    _scrollPage = function(e) { // переход элемента к следующему
      let scroll = window.pageYOffset;
      positionArticle.forEach( (element, index) => {
        if (
          scroll >= element.top &&
          scroll <= element.bottom
        ) {
        $item
            .eq(index)
            .addClass('anchors__items--active')
            .siblings()
            .removeClass('anchors__items--active');
        $link
            .eq(index)
            .addClass('anchors__link--active')
            .siblings()
            .removeClass('anchors__link--active');
        }
      });
    };
  
    _clickMenu = function(e) {
      let $element = $(e.target);
      let index = $element.index();
      let sectionOffset = positionArticle[index].top;
      $(document).off('scroll', _scrollPage);
      $element.siblings().removeClass('anchors__items--active');
      $('body, html').animate(
        {
          scrollTop: sectionOffset
        },
        1000,
        () => {
          $element.addClass('anchors__items--active');
          $(document).on('scroll', _scrollPage);
        }
      );
    };

    addListener = function() {
      $('.anchors__items--active').on('click');
      $(document).on('scroll', _scrollPage);
      $(document).on('scroll', _scrollPageFixMenu);
  
      _setPositionArticle($news);
  
      $(window).on('load', function(e) {
        _setPositionArticle($news);
      });
  
      $(window).on('resize', function(e) {
        _setPositionArticle($news);
      });
  
    };
  
    return {
      init: addListener
    };
  })();
  
  console.log(scrollMenu);
  if ($('.article__text').length > 0 ) {
    scrollMenu.init();
  }

////
document.onselectstart = noselect; 
// запрет на выделение элементов страницы 
function noselect() {return false;}


// dimension between footer and 1-st section
$(document).ready(function () {
	blog();
})
$(window).resize(function () {
	blog();
});

function blog() {
	var footerHeight = $('.footer').height(),
		blog = $('.articles__blog');

	blog.css({
		'margin-bottom': footerHeight + 150 + 'px'
	})
}

// sidebar
$('.anchors__button').click(function() {
  $('.articles__sidebar').toggleClass('articles__sidebar--active');
});

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
      $('.preloader').delay(1000).fadeOut(1500);      
    });
  }
};

function wrapper() {
    $('.wrapper').addClass('visuallyhidden');
}

// background first section
function Star(id, x, y){
	this.id = id;
	this.x = x;
	this.y = y;
	this.r = Math.floor(Math.random()*2)+1;
	var alpha = (Math.floor(Math.random()*10)+1)/10/2;
	this.color = "rgba(255,255,255,"+alpha+")";
}

Star.prototype.draw = function() {
	ctx.fillStyle = this.color;
	ctx.shadowBlur = this.r * 2;
	ctx.beginPath();
	ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
	ctx.closePath();
	ctx.fill();
}

Star.prototype.move = function() {
	this.y -= .15;
	if (this.y <= -10) this.y = HEIGHT + 10;
	this.draw();
}

Star.prototype.die = function() {
    stars[this.id] = null;
    delete stars[this.id];
}


function Dot(id, x, y, r) {
	this.id = id;
	this.x = x;
	this.y = y;
	this.r = Math.floor(Math.random()*5)+1;
	this.maxLinks = 2;
	this.speed = .5;
	this.a = .5;
	this.aReduction = .005;
	this.color = "rgba(255,255,255,"+this.a+")";
	this.linkColor = "rgba(255,255,255,"+this.a/4+")";

	this.dir = Math.floor(Math.random()*140)+200;
}

Dot.prototype.draw = function() {
	ctx.fillStyle = this.color;
	ctx.shadowBlur = this.r * 2;
	ctx.beginPath();
	ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
	ctx.closePath();
	ctx.fill();
}

Dot.prototype.link = function() {
	if (this.id == 0) return;
	var previousDot1 = getPreviousDot(this.id, 1);
	var previousDot2 = getPreviousDot(this.id, 2);
	var previousDot3 = getPreviousDot(this.id, 3);
	if (!previousDot1) return;
	ctx.strokeStyle = this.linkColor;
	ctx.moveTo(previousDot1.x, previousDot1.y);
	ctx.beginPath();
	ctx.lineTo(this.x, this.y);
	if (previousDot2 != false) ctx.lineTo(previousDot2.x, previousDot2.y);
	if (previousDot3 != false) ctx.lineTo(previousDot3.x, previousDot3.y);
	ctx.stroke();
	ctx.closePath();
}

function getPreviousDot(id, stepback) {
	if (id == 0 || id - stepback < 0) return false;
	if (typeof dots[id - stepback] != "undefined") return dots[id - stepback];
	else return false;//getPreviousDot(id - stepback);
}

Dot.prototype.move = function() {
	this.a -= this.aReduction;
	if (this.a <= 0) {
		this.die();
		return
	}
	this.color = "rgba(255,255,255,"+this.a+")";
	this.linkColor = "rgba(255,255,255,"+this.a/4+")";
	this.x = this.x + Math.cos(degToRad(this.dir))*this.speed,
	this.y = this.y + Math.sin(degToRad(this.dir))*this.speed;

	this.draw();
	this.link();
}

Dot.prototype.die = function() {
    dots[this.id] = null;
    delete dots[this.id];
}


var canvas  = document.getElementById('canvas'),
	ctx = canvas.getContext('2d'),
	WIDTH,
	HEIGHT,
	mouseMoving = false,
	mouseMoveChecker,
	mouseX,
	mouseY,
	stars = [],
	initStarsPopulation = 80,
	dots = [],
	dotsMinDist = 2,
	maxDistFromCursor = 50;

setCanvasSize();
init();

function setCanvasSize() {
	WIDTH = document.documentElement.clientWidth,
    HEIGHT = document.documentElement.clientHeight;                      

	canvas.setAttribute("width", WIDTH);
	canvas.setAttribute("height", HEIGHT);
}

function init() {
	ctx.strokeStyle = "white";
	ctx.shadowColor = "white";
	for (var i = 0; i < initStarsPopulation; i++) {
		stars[i] = new Star(i, Math.floor(Math.random()*WIDTH), Math.floor(Math.random()*HEIGHT));
		//stars[i].draw();
	}
	ctx.shadowBlur = 0;
	animate();
}

function animate() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);

    for (var i in stars) {
    	stars[i].move();
    }
    for (var i in dots) {
    	dots[i].move();
    }
    drawIfMouseMoving();
    requestAnimationFrame(animate);
}

window.onmousemove = function(e){
	mouseMoving = true;
	mouseX = e.clientX;
	mouseY = e.clientY;
	clearInterval(mouseMoveChecker);
	mouseMoveChecker = setTimeout(function() {
		mouseMoving = false;
	}, 100);
}


function drawIfMouseMoving(){
	if (!mouseMoving) return;

	if (dots.length == 0) {
		dots[0] = new Dot(0, mouseX, mouseY);
		dots[0].draw();
		return;
	}

	var previousDot = getPreviousDot(dots.length, 1);
	var prevX = previousDot.x; 
	var prevY = previousDot.y; 

	var diffX = Math.abs(prevX - mouseX);
	var diffY = Math.abs(prevY - mouseY);

	if (diffX < dotsMinDist || diffY < dotsMinDist) return;

	var xVariation = Math.random() > .5 ? -1 : 1;
	xVariation = xVariation*Math.floor(Math.random()*maxDistFromCursor)+1;
	var yVariation = Math.random() > .5 ? -1 : 1;
	yVariation = yVariation*Math.floor(Math.random()*maxDistFromCursor)+1;
	dots[dots.length] = new Dot(dots.length, mouseX+xVariation, mouseY+yVariation);
	dots[dots.length-1].draw();
	dots[dots.length-1].link();
}
//setInterval(drawIfMouseMoving, 17);

function degToRad(deg) {
	return deg * (Math.PI / 180);
}
