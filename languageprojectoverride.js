// ==UserScript==
// @name         Aza'raan Font Google Apps Override
// @namespace    https://github.com/thetransgendertrex/Azaraanlanguage
// @version      1.4
// @description  Override Pacifico with Aza'raan on Google Apps ONLY (Docs, Slides, Sheets, etc.). Aza'raan fully usable font in Google apps dropdown and typing.
// @author       William Blake Saville AKA #TheTransgenderTRex (™)
// @match        https://docs.google.com/*
// @match        https://slides.google.com/*
// @match        https://sheets.google.com/*
// @match        https://forms.google.com/*
// @match        https://drive.google.com/*
// @match        https://drawings.google.com/*
// @grant        GM_addStyle
// ==/UserScript==

(function () {
  'use strict';

  const fontURL = "https://raw.githubusercontent.com/thetransgendertrex/Azaraanlanguage/main/Aza%27raan%20Planet%20Language.ttf";

  // Insert @font-face declarations for Aza'raan font
  const style = document.createElement("style");
  style.type = "text/css";
  style.textContent = `
    @font-face {
      font-family: 'AzaraanOverride';
      src: url('${fontURL}') format('truetype');
      font-display: swap;
    }
    @font-face {
      font-family: 'Aza\\'raan';
      src: url('${fontURL}') format('truetype');
      font-display: swap;
    }
  `;
  document.head.appendChild(style);

  // Helper: Check if current domain is Google Apps
  function isGoogleApps() {
    const host = location.hostname;
    return (
      host === "docs.google.com" ||
      host === "slides.google.com" ||
      host === "sheets.google.com" ||
      host === "forms.google.com" ||
      host === "drive.google.com" ||
      host === "drawings.google.com"
    );
  }

  // --- Google Apps: Override Pacifico ONLY ---
  if (isGoogleApps()) {
    const googleStyle = document.createElement("style");
    googleStyle.type = "text/css";
    googleStyle.textContent = `
      /* Override Pacifico font family with Aza'raan */
      [style*="Pacifico"] {
        font-family: 'Aza\\'raan' !important;
      }

      /* Fix font dropdown appearance in Google apps font selector */
      div[aria-label="Font"] span[style*="Pacifico"],
      div[aria-label="Font"] div[style*="Pacifico"] {
        font-family: 'Aza\\'raan' !important;
        font-size: 16px !important;
      }
    `;
    document.head.appendChild(googleStyle);

    // Mutation observer to catch inline style changes with Pacifico font-family and replace with Aza'raan
    const styleObserver = new MutationObserver(() => {
      document.querySelectorAll('[style*="font-family:Pacifico"]').forEach(el => {
        el.style.setProperty('font-family', "'Aza\\'raan'", 'important');
      });
    });
    styleObserver.observe(document.body, { childList: true, subtree: true });
  }

})();



