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
    @font-face {
      font-family: 'AzaraanOverride';
      src: url('${fontURL}') format('truetype');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }
    /* ✅ Enforce font-size override for Comic Sans inline styles */
    span[style*="Comic Sans MS"],
    *[style*="Comic Sans MS"] {
      font-family: 'AzaraanOverride' !important;
      font-size: 22px !important;
    }
    @media screen and (max-width: 1024px) {
      span[style*="Comic Sans MS"],
      *[style*="Comic Sans MS"] {
        font-size: 18px !important;
      }
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
