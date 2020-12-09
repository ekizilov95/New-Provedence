function preloader() {
  window.onload = function () {
    const preload = document.querySelector(".preloader");
    setTimeout(() => {
      if (!preload.classList.contains("done")) {
        preload.classList.add("done");
        document.body.style.overflow = "visible";
      }
    }, 1000);
  };
}

export default preloader;
