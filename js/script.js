document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const closeBtn = document.getElementById("closeBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  // Toggle Mobile Menu
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("translate-x-full");
    document.body.style.overflow = "hidden"; // Stop scroll
  });

  closeBtn.addEventListener("click", () => {
    mobileMenu.classList.add("translate-x-full");
    document.body.style.overflow = "auto"; // Resume scroll
  });

  // Close menu when clicking links
  const mobileLinks = mobileMenu.querySelectorAll("a");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("translate-x-full");
      document.body.style.overflow = "auto";
    });
  });
});
