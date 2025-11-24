// Dark / light theme toggle
(function () {
  const root = document.documentElement;
  const toggleBtn = document.getElementById("themeToggle");

  const savedTheme = localStorage.getItem("resume-theme");
  if (savedTheme === "dark") {
    root.setAttribute("data-theme", "dark");
  }

  function currentTheme() {
    return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  toggleBtn.addEventListener("click", () => {
    const next = currentTheme() === "dark" ? "light" : "dark";
    if (next === "dark") {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }
    localStorage.setItem("resume-theme", next);
  });
})();

// Smooth scroll untuk nav-link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (!href || !href.startsWith("#")) return;

    e.preventDefault();
    const target = document.querySelector(href);
    if (!target) return;

    window.scrollTo({
      top: target.offsetTop - 20,
      behavior: "smooth",
    });
  });
});

// Set tahun di footer
document.getElementById("year").textContent = new Date().getFullYear();
