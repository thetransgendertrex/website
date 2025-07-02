// ==UserScript==
// @name         Aza'raan Font Google Apps languageprojectjava
// @namespace    https://github.com/thetransgendertrex/Azaraanlanguage
// @version      1.4
// @description  Loads external Aza'raan languageprojectoverride.js and applies style overrides for Google Apps ONLY.
// @author       William Blake Saville AKA #TheTransgenderTRex (™)
// @match        https://docs.google.com/*
// @match        https://slides.google.com/*
// @match        https://sheets.google.com/*
// @match        https://forms.google.com/*
// @match        https://drive.google.com/*
// @match        https://drawings.google.com/*
// @grant        none
// ==/UserScript==

document.addEventListener('DOMContentLoaded', function () {
  // Inject external font languageprojectoverride logic
  const languageprojectoverrideScript = document.createElement('script');
  languageprojectoverrideScript.src = 'https://raw.githubusercontent.com/thetransgendertrex/website/refs/heads/main/languageprojectoverride.js';
  languageprojectoverrideScript.type = 'text/javascript';
  document.head.appendChild(languageprojectoverrideScript);

  const css = `
    /* === Aza'raan Font Substitution for Individual Words or Phrases === */
    .azaraan-word {
      font-family: 'Azaraan', cursive;
      color: #014d4e;
      text-shadow: 0 0 2px var(--cyan);
    }

    /* === Google Apps: Replace Pacifico with Aza'raan in Font Dropdown === */
    div[aria-label="Font"] span[style*="Pacifico"],
    div[aria-label="Font"] div[style*="Pacifico"] {
      font-family: 'Azaraan', cursive !important;
      font-size: 18px !important;
      color: #000000;
    }
  `;

  const styleTag = document.createElement('style');
  styleTag.textContent = css;
  document.head.appendChild(styleTag);
});