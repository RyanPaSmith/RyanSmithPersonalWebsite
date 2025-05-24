document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_jwpaq1r", "template_wyiwqo6", this)
    .then(() => {
      alert("Message sent successfully!");
      this.reset();
    }, (error) => {
      console.error("FAILED...", error);
      alert("Something went wrong. Please try again.");
    });
});

document.getElementById("theme-toggle").addEventListener("click", function () {
  document.body.classList.toggle("light-mode");
  document.getElementById("parallax-bg").classList.toggle("light-bg");
  document.getElementById("bg-overlay").classList.toggle("light-overlay");
});

document.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth / 2 - e.clientX) / 100;
  const y = (window.innerHeight / 2 - e.clientY) / 100;
  const bg = document.getElementById("parallax-bg");
  if (bg) {
    bg.style.transform = `translate(${x}px, ${y}px)`;
  }
});
