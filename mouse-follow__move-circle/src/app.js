let ball = document.querySelector('.as-one-wrap__ball');

let xMouse, yMouse;

let x = 0,
    y = 0,
    dx = 0,
    dy = 0,
    tx = 0,
    ty = 0,
    key = -1;

document.addEventListener('mousemove', function (e) {
  xMouse = e.clientX || e.pageX;
  yMouse = e.clientY || e.pageY;
})

let followMouse = function() {

  key = requestAnimationFrame(followMouse);

  if (!x || !y) {
    x = xMouse;
    y = yMouse;

  } else {
    dx = (xMouse - x) * 0.125;
    dy = (yMouse - y) * 0.125;

    if (Math.abs(dx) + Math.abs(dy) < 0.1) {
      x = xMouse;
      y = yMouse;

    } else {
      x += dx;
      y += dy;
    }
  }

  // Center
  x = x - 2;
  y = y - 2;

  ball.style.left = x + 'px';
  ball.style.top = y + 'px';
};