
let scrollPos = 0;
const nav = document.getElementById('top');

function checkPosition() {
  let windowY = window.scrollY;
  if (windowY < scrollPos) {
    // Scrolling UP
    nav.style.display = "flex";

  } else {
    // Scrolling DOWN
    nav.style.display = "none";

  }
  scrollPos = windowY;
}

window.addEventListener('scroll', checkPosition);