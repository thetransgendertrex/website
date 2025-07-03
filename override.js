// ==UserScript==
// @name         Aza'raan Comic Sans Span Override
// @namespace    https://github.com/thetransgendertrex/website
// @version      2.0
// @description  Fully override Comic Sans in all <span> elements with inline font-family using Azaraan font.
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
  `;
  document.head.appendChild(fontStyle);

  // Optional: Load your base site CSS
  const cssLink = document.createElement('link');
  cssLink.rel = 'stylesheet';
  cssLink.href = 'https://raw.githubusercontent.com/thetransgendertrex/website/main/style.css';
  document.head.appendChild(cssLink);

  // ✅ Fully robust Comic Sans replacement for <span> elements
  function replaceComicSansSpans() {
    const spans = document.querySelectorAll('span[style*="font-family"]');
    spans.forEach(span => {
      const style = span.getAttribute('style');
      if (style && /comic sans ms/i.test(style)) {
        span.style.setProperty('font-family', "'AzaraanOverride'", 'important');
      }
    });
  }

  // ✅ Run initially
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', replaceComicSansSpans);
  } else {
    replaceComicSansSpans();
  }

  // ✅ Observe dynamic DOM changes
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.addedNodes.length) {
        replaceComicSansSpans();
      }
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });

  console.log("✅ Aza'raan Comic Sans override active.");

})();
