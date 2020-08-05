let marker = document.querySelector('.ao-menu-marker');
let items = document.querySelectorAll('.ao-menu-item');

function indicator(e) {
  marker.style.left = e.target.offsetLeft + "px";
  marker.style.width = e.target.offsetWidth + "px";
}

items.forEach(item => {
  item.addEventListener('click', (e) => {
    indicator(e);
  })
});