// ==UserScript==
// @name         Aza'raan Comic Sans Span Override
// @namespace    https://github.com/thetransgendertrex/website
// @version      2.1
// @description  Fully override Comic Sans in all elements with inline font-family using Azaraan font and force size override.
// @author       William Blake Saville
// @match        https://www.azara-trademarked-projects.com/*
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  const fontURL = "https://raw.githubusercontent.com/thetransgendertrex/website/main/Azaraan_Planet_Language.ttf";

  // Add @font-face for AzaraanOverride
  const fontStyle = document.createElement("style");
  fontStyle.textContent = `
/* === Comic Sans Override for index.html === */
body[data-doc-name*="index"] {
  font-family: 'Comic Sans MS', cursive !important;
}

/* === Force Comic Sans size on all spans or elements === */
span[style*="Comic Sans MS"],
*[style*="Comic Sans MS"] {
  font-family: 'Comic Sans MS', cursive !important;
  font-size: 22px !important;
}

@media screen and (max-width: 1024px) {
  span[style*="Comic Sans MS"],
  *[style*="Comic Sans MS"] {
    font-size: 18px !important;
  }
}

/* === Aza'raan Font Substitution === */
.azaraan-word {
  font-family: 'Azaraan', cursive;
  color: #014d4e;
  text-shadow: 
    -2px -2px 0 var(--cyan),
     2px -2px 0 var(--cyan),
    -2px  2px 0 var(--cyan),
     2px  2px 0 var(--cyan);
}
  `;
  document.head.appendChild(fontStyle);

  // ✅ Optional: Load base site CSS
  const cssLink = document.createElement('link');
  cssLink.rel = 'stylesheet';
  cssLink.href = 'https://raw.githubusercontent.com/thetransgendertrex/website/main/style.css';
  document.head.appendChild(cssLink);

  // ✅ Robust function to fix any Comic Sans elements dynamically
  function replaceComicSans() {
    const elements = document.querySelectorAll('*[style*="font-family"]');
    elements.forEach(el => {
      const style = el.getAttribute('style');
      if (style && /comic sans ms/i.test(style)) {
        el.style.setProperty('font-family', "'AzaraanOverride'", 'important');
        el.style.setProperty('font-size', window.innerWidth <= 1024 ? '18px' : '22px', 'important');
      }
    });
  }

  // ✅ Run on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', replaceComicSans);
  } else {
    replaceComicSans();
  }

  // ✅ Observe DOM for new elements
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.addedNodes.length) {
        replaceComicSans();
      }
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });

  console.log("✅ Aza'raan Comic Sans override with forced size is active.");
})();
// === Comic Sans Override for index.html ===
if (document.body.dataset.docName && document.body.dataset.docName.includes("index")) {
  document.body.style.fontFamily = "'Comic Sans MS', cursive";
}

// === Force Comic Sans size on all spans or elements ===
function applyComicSans() {
  const comicElements = document.querySelectorAll('*[style*="Comic Sans MS"]');
  const newSize = window.innerWidth <= 1024 ? '18px' : '22px';

  comicElements.forEach(el => {
    el.style.fontFamily = "'Comic Sans MS', cursive";
    el.style.fontSize = newSize;
  });
}

// Apply immediately
applyComicSans();

// Re-apply on window resize
window.addEventListener('resize', applyComicSans);

// === Aza'raan Font Substitution ===
const azaraanElements = document.querySelectorAll('.azaraan-word');
azaraanElements.forEach(el => {
  el.style.fontFamily = "'Azaraan', cursive";
  el.style.color = '#014d4e';
  el.style.textShadow = `
    -2px -2px 0 var(--cyan),
     2px -2px 0 var(--cyan),
    -2px  2px 0 var(--cyan),
     2px  2px 0 var(--cyan)
  `;
});
