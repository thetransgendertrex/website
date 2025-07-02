// ==UserScript==
// @name         Aza'raan Comic Sans Override
// @namespace    https://github.com/thetransgendertrex/website
// @version      1.0
// @description  Replace Comic Sans with Aza'raan on your website only. Loads all core assets from GitHub.
// @author       William Blake Saville
// @match        https://www.azara-trademarked-projects.com/*
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  const fontURL = "https://raw.githubusercontent.com/thetransgendertrex/website/main/Aza%27raan%20Planet%20Language.ttf";

  // ✅ Inject @font-face for Aza'raan
  const style = document.createElement("style");
  style.type = "text/css";
  style.textContent = `
    @font-face {
      font-family: 'AzaraanOverride';
      src: url('${fontURL}') format('truetype');
      font-display: swap;
    }
  `;
  document.head.appendChild(style);

  // ✅ Load style.css
  const siteCSS = document.createElement('link');
  siteCSS.rel = 'stylesheet';
  siteCSS.href = 'https://raw.githubusercontent.com/thetransgendertrex/website/main/style.css';
  siteCSS.onload = () => console.log('✅ style.css loaded.');
  siteCSS.onerror = () => console.error('❌ Failed to load style.css.');
  document.head.appendChild(siteCSS);

  // ✅ Load override.js
  fetch('https://raw.githubusercontent.com/thetransgendertrex/website/main/override.js')
    .then(res => res.text())
    .then(code => {
      const overrideScript = document.createElement('script');
      overrideScript.textContent = code;
      document.head.appendChild(overrideScript);
      console.log('✅ override.js loaded.');
    })
    .catch(err => console.error('❌ Failed to load override.js:', err));

  // ✅ Load script.js
  fetch('https://raw.githubusercontent.com/thetransgendertrex/website/main/script.js')
    .then(res => res.text())
    .then(code => {
      const script = document.createElement('script');
      script.textContent = code;
      document.head.appendChild(script);
      console.log('✅ script.js loaded.');
    })
    .catch(err => console.error('❌ Failed to load script.js:', err));

  // ✅ Verify index.html
  fetch('https://raw.githubusercontent.com/thetransgendertrex/website/main/index.html')
    .then(res => res.text())
    .then(() => console.log('✅ index.html verified.'))
    .catch(err => console.warn('⚠️ Could not fetch index.html'));

  // ✅ Replace Comic Sans with Aza'raan on website
  function overrideComicSans() {
    document.querySelectorAll('*').forEach(el => {
      const computed = window.getComputedStyle(el);
      if (computed.fontFamily && /comic sans ms/i.test(computed.fontFamily)) {
        el.style.setProperty('font-family', "'AzaraanOverride'", 'important');
      }
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    overrideComicSans();
    new MutationObserver(overrideComicSans).observe(document.body, { childList: true, subtree: true });
  });

})();
