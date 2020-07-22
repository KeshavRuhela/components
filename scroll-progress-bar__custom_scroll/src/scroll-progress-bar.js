function asOneProgressBar() {

  let progressBar = document.querySelector('.ao-progress-bar');

  window.onscroll = () => {
    let viewportHeight = document.body.scrollHeight - window.innerHeight;
    let progressHeight = (window.pageYOffset / viewportHeight) * 100;
    progressBar.style.height = progressHeight + "%";
  }

}
asOneProgressBar();