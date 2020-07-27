let marker = document.querySelector('.ao-menu-marker');
let item = document.querySelectorAll('.ao-menu-item');

function indicator(e) {
  marker.style.left = e.offsetLeft+"px";
  marker.style.width = e.offsetWidth+"px";
}
item.forEach(Link => {
  Link.addEventListener('click', (e) => {
    indicator(e.target);
  })
});