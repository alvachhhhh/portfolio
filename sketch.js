
//Text gradient transparency

window.addEventListener('scroll', function() {
  var fadeElements = document.querySelectorAll('.fade-text');
  var windowHeight = window.innerHeight;
  var scrollPosition = window.scrollY;

  fadeElements.forEach(function(element) {
    var elementTop = element.getBoundingClientRect().top;
    var elementBottom = element.getBoundingClientRect().bottom;

    if (elementTop < windowHeight / 3 && elementBottom > windowHeight / 3) {
      element.style.color = '#000000';
    } else {

      var opacity = 1 - Math.abs(elementTop - windowHeight / 3) / (windowHeight / 3);
      element.style.color = 'rgba(0, 0, 0, ' + opacity + ')';
    }
  });
});

//Load Transparent gradient
window.addEventListener('load', function () {
  const element = document.getElementById('element');

  setTimeout(function () {
    element.classList.remove('fade-in');
  }, 100);
});

