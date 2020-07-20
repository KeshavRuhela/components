let skewed = document.querySelector('.as-one-scroll__skewed');

window.addEventListener('scroll', function() {
  let value = -10 + window.scrollY / 60;
  skewed.style.transform = "skewY(" + value + "deg)";
});