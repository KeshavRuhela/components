function asOneParallax() {
  let bg = document.querySelector('.bg');
  let moon = document.querySelector('.moon');
  let mountain = document.querySelector('.mountain');
  let road = document.querySelector('.road');
  let title = document.querySelector('.ao-parallax__title');

  window.addEventListener('scroll', (e) => {
    let value = window.scrollY;

    bg.style.top = -value * 0.01 + 'px';
    moon.style.left = -value * 0.15 + 'px';
    mountain.style.top = value * 0.15 + 'px';
    road.style.top = value * 0.1 + 'px';
    // title.style.top = value * 0.2 + 'px';
  })
}
asOneParallax();
