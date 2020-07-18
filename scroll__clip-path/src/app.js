let section = document.querySelector('.as-one-section');
window.addEventListener('scroll', function() {
  console.log('scroll');
  let value = window.scrollY;
  section.style.clipPath = "circle("+ value +"px at center)"
});