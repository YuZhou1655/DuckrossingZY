// keep track of previous scroll position
let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', function() {
  // current scroll position
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    // user has scrolled up
    document.querySelector('.nav').classList.add('show');
  } else {
    // user has scrolled down
    document.querySelector('.nav').classList.remove('show');
  }

  // update previous scroll position
  prevScrollPos = currentScrollPos;
});