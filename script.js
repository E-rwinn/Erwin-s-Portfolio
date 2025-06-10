const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

//Project Section//
 const loadMoreBtn = document.getElementById('loadMoreBtn');
    const boxes = document.querySelectorAll('.project-box');
    let current = 6;

    loadMoreBtn.addEventListener('click', () => {
      const next = current + 3;
      for (let i = current; i < next && i < boxes.length; i++) {
        boxes[i].classList.add('show');
      }
      current = next;
      if (current >= boxes.length) {
        loadMoreBtn.style.display = 'none';
      }
    });