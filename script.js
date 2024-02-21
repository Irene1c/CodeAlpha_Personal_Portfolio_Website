// Scrolling functionality

document.addEventListener("DOMContentLoaded", () => {
  const scrollToAbout = document.querySelector('.scroll');
  const aboutSection = document.getElementById('about');

  scrollToAbout.addEventListener('click', () => {
    aboutSection.scrollIntoView({ behavior: 'smooth' });
    console.log("scroll to about section");
  });
});
