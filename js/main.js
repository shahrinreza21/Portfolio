/**
 * Menu bar 
 */
 const menuBtn = document.querySelector('.menuBar');
 const navBar = document.querySelector('.nav_menu');
 menuBtn.addEventListener('click', function() {
  menuBtn.classList.toggle('active')
   navBar.classList.toggle('active');
 })




var typed = new Typed("#example", {
  strings:["Designer", "Developer"],
  typeSpeed: 200,
  backspaceSpeed: 20,
  backspaceDelay: 800,
  repeatDelay: 1000,
  repeat: true,
  loop: true,
  autoStart: true,
  startDelay: 100,
});

