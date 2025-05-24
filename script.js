document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Message sending functionality coming soon!");
});

document.getElementById("theme-toggle").addEventListener("click", function () {
  document.body.classList.toggle("light-mode");
});

document.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth / 2 - e.clientX) / 100;
  const y = (window.innerHeight / 2 - e.clientY) / 100;
  const bg = document.getElementById("parallax-bg");
  if (bg) {
    bg.style.transform = `translate(${x}px, ${y}px)`;
  }
});
