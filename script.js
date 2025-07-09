/* ──────────────✦ Aza'raan Unified Site Script ✦────────────── */
(function($) {
  // DOM Elements
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");
  const close = document.getElementById("menu-close");

  // Toggle Sidebar
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      menu.classList.toggle("open");
    });
  }

  // Close Sidebar
  if (close && menu) {
    close.addEventListener("click", function () {
      menu.classList.remove("open");
    });
  }

  // Close menu on nav item click on small screens
  const collapseMenuOnClick = function () {
    if (window.innerWidth < 846) {
      const menuLinks = document.querySelectorAll(".main-nav a");
      menuLinks.forEach(function (link) {
        link.addEventListener("click", function () {
          menu.classList.remove("open");
        });
      });
    }
  };

  window.addEventListener("resize", collapseMenuOnClick);
  window.addEventListener("DOMContentLoaded", collapseMenuOnClick);

  // Smooth scrolling for anchor links
  const internalLinks = document.querySelectorAll('a[href^="#"]');
  internalLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: "smooth"
        });
      }
    });
  });
(function() {
  // Enhance all table wrappers on load
  document.addEventListener("DOMContentLoaded", function () {
    const tableWrappers = document.querySelectorAll(".table-wrapper");

    tableWrappers.forEach(wrapper => {
      wrapper.style.overflowX = "auto";
      wrapper.style.WebkitOverflowScrolling = "touch";

      // Optional: Add touch-scroll hint or custom scrollbar indicators
      wrapper.addEventListener("wheel", function (e) {
        if (e.deltaY === 0) return; // only respond to vertical scrolling

        e.preventDefault();
        wrapper.scrollLeft += e.deltaY;
      });
    });
  });

  // Optional: Allow table cells to be keyboard focusable for accessibility
  const enhanceTableCells = () => {
    document.querySelectorAll("table td, table th").forEach(cell => {
      cell.setAttribute("tabindex", "0");
    });
  };

  window.addEventListener("DOMContentLoaded", enhanceTableCells);
})();
(function () {
  // Define your GitHub base
  const githubBase = "https://raw.githubusercontent.com/thetransgendertrex/website/main/";

  // Files and their fallbacks
  const resources = [
    {
      type: "css",
      remote: githubBase + "style.css",
      fallback: "style.local.css"
    },
    {
      type: "css",
      remote: githubBase + "bootstrap.min.css",
      fallback: "bootstrap.local.min.css"
    },
    {
      type: "image",
      remote: githubBase + "Aza'ra-Moonpunk-AI.jpg",
      fallback: "background.local.jpg",
      selector: "#page-wraper",
      styleProperty: "backgroundImage",
      format: (url) => `url('${url}')`
    },
    {
      type: "image",
      remote: githubBase + "icon48.png",
      fallback: "icon48.local.png",
      selector: "link[rel='icon'], link[rel='shortcut icon']",
      attr: "href"
    },
    {
      type: "html",
      remote: githubBase + "index.html",
      fallback: "index.local.html" // optional: load into iframe or a div dynamically
    }
  ];

  // Check if URL is valid
  function testURL(url) {
    return fetch(url, { method: "HEAD" })
      .then(res => res.ok)
      .catch(() => false);
  }

  // Load CSS dynamically
  function loadCSS(href) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
  }

  // Load fallback images or styles
  function applyFallback(res) {
    if (res.type === "css") {
      loadCSS(res.fallback);
    } else if (res.type === "image" && res.selector) {
      const el = document.querySelector(res.selector);
      if (!el) return;
      if (res.attr) {
        el.setAttribute(res.attr, res.fallback);
      } else if (res.styleProperty) {
        el.style[res.styleProperty] = res.format(res.fallback);
      }
    }
    // Optional: for HTML you could load content into an element
  }

  // Iterate over resources
  resources.forEach(resource => {
    testURL(resource.remote).then(isAvailable => {
      if (!isAvailable) {
        applyFallback(resource);
        console.warn(`[Fallback] Loaded local version of ${resource.remote}`);
      } else {
        if (resource.type === "css") {
          loadCSS(resource.remote);
        } else if (resource.type === "image" && resource.selector) {
          const el = document.querySelector(resource.selector);
          if (!el) return;
          if (resource.attr) {
            el.setAttribute(resource.attr, resource.remote);
          } else if (resource.styleProperty) {
            el.style[resource.styleProperty] = resource.format(resource.remote);
          }
        }
      }
    });
  });
})();

})(jQuery);
