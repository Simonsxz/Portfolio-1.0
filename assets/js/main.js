/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
  var menuBtn = document.getElementById("myNavMenu");

  if(menuBtn.className === "nav-menu"){
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function() {headerShadow()};

function headerShadow() {
  const navHeader =document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";

  } else {

    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";

  }
}


/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText",{
  strings : ["Manuel Simon","Programmer"],
  loop : true,
  typeSpeed : 100, 
  backSpeed : 80,
  backDelay : 2000
})


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true     
})

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 150})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
origin: 'left',
distance: '80px',
duration: 2000,
reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
origin: 'right',
distance: '80px',
duration: 2000,
reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
const scrollY = window.scrollY;

sections.forEach(current =>{
  const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute('id')

  if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

  }  else {

    document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

  }
})
}

window.addEventListener('scroll', scrollActive)

function showPopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "block";
}

function closePopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
}

function showPopup1() {
  var popup = document.getElementById("popup1");
  popup.style.display = "block";
}

function closePopup1() {
  var popup = document.getElementById("popup1");
  popup.style.display = "none";
}

function showPopup2() {
  var popup = document.getElementById("popup2");
  popup.style.display = "block";
}

function closePopup2() {
  var popup = document.getElementById("popup2");
  popup.style.display = "none";
}

function showPopup3() {
  var popup = document.getElementById("popup3");
  popup.style.display = "block";
}

function closePopup3() {
  var popup = document.getElementById("popup3");
  popup.style.display = "none";
}

function showPopup4() {
  var popup = document.getElementById("popup4");
  popup.style.display = "block";
}

function closePopup4() {
  var popup = document.getElementById("popup4");
  popup.style.display = "none";
}

function viewImage(src) {
  document.getElementById("lightbox").style.display = "block";
  document.getElementById("lightbox-img").src = src;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}
function viewImage1(src) {
  document.getElementById("lightbox1").style.display = "block";
  document.getElementById("lightbox-img1").src = src;
}

function closeLightbox1() {
  document.getElementById("lightbox1").style.display = "none";
}

function viewImage2(src) {
  document.getElementById("lightbox2").style.display = "block";
  document.getElementById("lightbox-img2").src = src;
}

function closeLightbox2() {
  document.getElementById("lightbox2").style.display = "none";
}

function viewImage3(src) {
  document.getElementById("lightbox3").style.display = "block";
  document.getElementById("lightbox-img3").src = src;
}

function closeLightbox3() {
  document.getElementById("lightbox3").style.display = "none";
}

function viewImage4(src) {
  document.getElementById("lightbox4").style.display = "block";
  document.getElementById("lightbox-img4").src = src;
}

function closeLightbox4() {
  document.getElementById("lightbox4").style.display = "none";
}

function viewImage5(src) {
  document.getElementById("lightbox5").style.display = "block";
  document.getElementById("lightbox-img5").src = src;
}

function closeLightbox5() {
  document.getElementById("lightbox5").style.display = "none";
}

