let banner = window.document.querySelector('.ao-banner');
window.addEventListener('scroll', function() {
  let value = window.scrollY;
  banner.style.clipPath = "circle("+ value +"px at center center)";
});