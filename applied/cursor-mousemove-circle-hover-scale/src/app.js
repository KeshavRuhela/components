function AoCursorMousemoveCircleHoverScale()
{
  let cursor = document.querySelector('.ao-cursor');

  // Logic
  document.addEventListener('mousemove', function(e) {
    let x = e.clientX;
    let y = e.clientY;

    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
  });
}

export default AoCursorMousemoveCircleHoverScale;