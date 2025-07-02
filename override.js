// ==UserScript==
// @name         Aza'raan Comic Sans Span Override
// @namespace    https://github.com/thetransgendertrex/website
// @version      1.1
// @description  Replace Comic Sans with Aza'raan only on targeted <span> elements.
// @author       William Blake Saville
// @match        https://www.azara-trademarked-projects.com/*
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  const fontURL = "https://raw.githubusercontent.com/thetransgendertrex/website/main/Azaraan_Planet_Language.ttf";

  if (window.location.hostname.includes('azara-trademarked-projects.com')) {

    // ✅ Inject @font-face for Aza'raan
    const style = document.createElement("style");
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
      .catch(() => console.warn('⚠️ Could not fetch index.html'));

    // ✅ Replace Comic Sans on targeted <span> elements only
    function overrideComicSansSpans() {
      document.querySelectorAll('span[style*="font-family"]').forEach(span => {
        const inlineFont = span.style.fontFamily;
        if (/comic sans ms/i.test(inlineFont)) {
          span.style.setProperty('font-family', "'AzaraanOverride'", 'important');
        }
      });
    }

    document.addEventListener('DOMContentLoaded', () => {
      overrideComicSansSpans();
      new MutationObserver(overrideComicSansSpans).observe(document.body, { childList: true, subtree: true });
    });

  }
})();
