/* ──────────────✦ Aza'raan Unified Site Script ✦────────────── */
(() => {
  // DOM Elements
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");
  const close = document.getElementById("menu-close");

  // Toggle Sidebar
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("open");
    });
  }

  // Close Sidebar
  if (close && menu) {
    close.addEventListener("click", () => {
      menu.classList.remove("open");
    });
  }

  // Close menu on nav item click on small screens
  const collapseMenuOnClick = () => {
    if (window.innerWidth < 846) {
      const menuLinks = document.querySelectorAll(".main-nav a");
      menuLinks.forEach(link => {
        link.addEventListener("click", () => {
          if (menu) menu.classList.remove("open");
        });
      });
    }
  };

  window.addEventListener("resize", collapseMenuOnClick);
  window.addEventListener("DOMContentLoaded", collapseMenuOnClick);

  // Smooth scrolling for anchor links
  const internalLinks = document.querySelectorAll('a[href^="#"]');
  internalLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Enhance all table wrappers on load
  document.addEventListener("DOMContentLoaded", () => {
    const tableWrappers = document.querySelectorAll(".table-wrapper");

    tableWrappers.forEach(wrapper => {
      wrapper.style.overflowX = "auto";
      wrapper.style.WebkitOverflowScrolling = "touch";

      // Optional: Add touch-scroll hint or custom scrollbar indicators
      wrapper.addEventListener("wheel", (e) => {
        if (e.deltaY === 0) return; // only respond to vertical scrolling
        e.preventDefault();
        wrapper.scrollLeft += e.deltaY;
      });
    });

    // Optional: Allow table cells to be keyboard focusable for accessibility
    document.querySelectorAll("table td, table th").forEach(cell => {
      cell.setAttribute("tabindex", "0");
    });
  });
})();
