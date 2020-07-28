window.addEventListener("scroll", function() {
  let header = document.querySelector(".ao-navbar");
  header.classList.toggle("sticky", window.scrollY > 0);
});