let parallaxContainer = document.getElementById('parallax'),
    layers = parallaxContainer.children;

let moveLayers = function (e) {
    let initialX = (window.innerWidth / 2) - e.pageX;
    let initialY = (window.innerHeight / 2) - e.pageY;

  [].slice.call(layers).forEach(function(layer, index) {
    let 
      divider = index / 150,
      positionX = initialX * divider,
      positionY = initialY * divider,
      bottomPosition = (window.innerHeight / 2) * divider,
      transformString = 'translate(' + positionX + 'px,' + positionY + 'px)',
      image = layer.firstElementChild;

    layer.style.transform = transformString;
    image.style.bottom = '-' + bottomPosition + 'px';
  });

};

window.addEventListener('mousemove', moveLayers);
