function asOneProgressBar() {

  let progressBar = document.querySelector('.ao-progress-bar__bar');
  let percent = document.querySelector('.ao-progress-bar__percent');

  window.onscroll = () => {
    let viewportHeight = document.body.scrollHeight - window.innerHeight;
    let progressHeight = (window.pageYOffset / viewportHeight) * 100;
    progressBar.style.height = progressHeight + "%";
    percent.innerHTML = Math.round(progressHeight);
  }

}
asOneProgressBar();