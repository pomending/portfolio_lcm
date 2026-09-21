const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const header = document.querySelector(".site-header");

toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  });
});

window.addEventListener("scroll", () => {
  header.style.borderBottomColor =
    window.scrollY > 8 ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.08)";
});
