// Toggle Navbar
let menuIcon = document.querySelector('#menu-icon');
let nav = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('fa-times');
  nav.classList.toggle('active');
};

// Scroll Reveal
ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .service-content, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// Typed JS
const typed = new Typed('.multiple-text', {
  strings: ['Full Stack Developer', 'Java Developer', 'BCA Student'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

//Mail sender Section


function contactMe() {
  // no need for event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("PhoneNumber").value;
  let subject = document.getElementById("Subject").value;
  let message = document.getElementById("message").value;
  console.log(name, email, phone, subject, message);

  emailjs.send("service_4ssqd0a", "template_q8ux8m5", {
    title:subject,
    name: name,
    email: email,
    phone: phone,
    message: message,
  }).then(function(response) {
    alert("Message sent successfully!");
  }, function(error) {
    alert("Failed to send message. Please try again.");
    console.error(error);
  });
}