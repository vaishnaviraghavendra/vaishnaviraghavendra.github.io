document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("toggleDark");
  const root = document.documentElement;

  const cvLink = document.querySelector('a[href*="drive.google.com"]');

  if (cvLink) {
    cvLink.addEventListener("mousedown", () => {
      cvLink.blur();
    });
  }

  document.querySelectorAll("h6[role='button']").forEach((header) => {
    const targetId = header.getAttribute("data-bs-target");
    const span = header.querySelector("span");

    const collapseEl = document.querySelector(targetId);
    if (collapseEl) {
      collapseEl.addEventListener("show.bs.collapse", () => {
        span.textContent = "▼";
      });
      collapseEl.addEventListener("hide.bs.collapse", () => {
        span.textContent = "▶";
      });
      if (collapseEl.classList.contains("show")) {
        span.textContent = "▼";
      } else {
        span.textContent = "▶";
      }
    }
  });

  function applyTheme(theme) {
    if (theme === "dark") {
      root.classList.add("dark-mode");
      toggle.classList.remove("bi-brightness-high-fill");
      toggle.classList.add("bi-moon");
    } else {
      root.classList.remove("dark-mode");
      toggle.classList.remove("bi-moon");
      toggle.classList.add("bi-brightness-high-fill");
    }
  }

  const savedTheme = localStorage.getItem("theme") || "light";
  applyTheme(savedTheme);
  root.classList.add("js-theme-ready");

  toggle.addEventListener("click", () => {
    const isDark = root.classList.contains("dark-mode");
    if (isDark) {
      applyTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      applyTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  });

  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.getElementById("navbarMenu");

  if (navbarToggler && navbarCollapse) {
    const openIcon = navbarToggler.querySelector(".open-icon");
    const closeIcon = navbarToggler.querySelector(".close-icon");

    navbarCollapse.addEventListener("show.bs.collapse", () => {
      openIcon?.classList.add("d-none");
      closeIcon?.classList.remove("d-none");
    });

    navbarCollapse.addEventListener("hide.bs.collapse", () => {
      closeIcon?.classList.add("d-none");
      openIcon?.classList.remove("d-none");
    });
  }
});
