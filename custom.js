// Load particles on page load for the white version
loadParticles("particles-js");

Reveal.addEventListener("slidechanged", function (event) {
  // Handle particles
  const particles = document.getElementById("particles-js");
  const particlesBlack = document.getElementById("particles-js-black");

  const state = event.currentSlide.getAttribute("data-state");
  if (state === "show-particles") {
    particles.style.display = "block";
    particlesBlack.style.display = "none";
    loadParticles("particles-js"); // Load particles for white version
  } else if (state === "show-particles-black") {
    particlesBlack.style.display = "block";
    particles.style.display = "none";
    loadParticles("particles-js-black"); // Load particles for black version
  } else {
    particles.style.display = "none";
    particlesBlack.style.display = "none";
  }
});

function loadParticles(id) {
  particlesJS.load(id, "assets/particlesjs-config.json", function () {
    console.log("callback - " + id + " particles.js config loaded");
  });
}
