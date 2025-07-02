// ==UserScript==
// @name         Aza'raan Website Full Core Loader (GitHub Only)
// @namespace    https://github.com/thetransgendertrex/website
// @version      1.1
// @description  FULL: Pages, Scrollwheels, Buttons, Nav, Hamburger Menu. Pulls GitHub files only.
// @match        https://www.azara-trademarked-projects.com/*
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  // ✅ Load style.css
  const styleLink = document.createElement('link');
  styleLink.rel = 'stylesheet';
  styleLink.href = 'https://raw.githubusercontent.com/thetransgendertrex/website/main/style.css';
  styleLink.onload = () => console.log('✅ style.css loaded.');
  styleLink.onerror = () => console.error('❌ Failed to load style.css.');
  document.head.appendChild(styleLink);

  // ✅ Load override.js
  fetch('https://raw.githubusercontent.com/thetransgendertrex/website/main/override.js')
    .then(res => res.text())
    .then(code => {
      const script = document.createElement('script');
      script.textContent = code;
      document.head.appendChild(script);
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

  // ✅ Load donations.js
  fetch('https://raw.githubusercontent.com/thetransgendertrex/website/main/donations.js')
    .then(res => res.text())
    .then(code => {
      const script = document.createElement('script');
      script.textContent = code;
      document.head.appendChild(script);
      console.log('✅ donations.js loaded.');
    })
    .catch(err => console.error('❌ Failed to load donations.js:', err));

  // ✅ Verify index.html
  fetch('https://raw.githubusercontent.com/thetransgendertrex/website/main/index.html')
    .then(res => res.text())
    .then(() => console.log('✅ index.html verified.'))
    .catch(() => console.warn('⚠️ Could not verify index.html'));

  // ✅ Verify donations.html
  fetch('https://raw.githubusercontent.com/thetransgendertrex/website/main/donations.html')
    .then(res => res.text())
    .then(() => console.log('✅ donations.html verified.'))
    .catch(() => console.warn('⚠️ Could not verify donations.html'));

})();

// Ensure the DOM is ready
document.addEventListener('DOMContentLoaded', function() {

document.addEventListener('DOMContentLoaded', () => {
  // Grab nav and hamburger
  const header = document.querySelector('header.site-header');
  const nav = header?.querySelector('nav');
  const hamburger = header?.querySelector('.hamburger');

  // Grab all pages
  const pages = document.querySelectorAll('.page');

  // Grab all nav buttons
  const navButtons = document.querySelectorAll('header.site-header nav .nav-button');

  function showPage(id) {
    pages.forEach(p => p.classList.remove('active', 'glow'));
    const page = document.getElementById(id);
    if (page) {
      page.classList.add('active', 'glow');
      setTimeout(() => page.classList.remove('glow'), 3000); // glow for 3s
    }
  }

  // Attach click handlers
  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.className.split(' ').find(cls => cls !== 'nav-button');
      if (target) showPage(target);

      // Close nav on mobile
      if (window.innerWidth <= 768 && nav) {
        header.classList.remove('open');
      }
    });
  });

  // Hamburger toggle
  if (hamburger && header) {
    hamburger.addEventListener('click', () => {
      header.classList.toggle('open');
    });
  }

  // Show first page by default if any
  const firstPage = pages[0];
  if (firstPage) firstPage.classList.add('active');
});


// 🧩 Apply scroll wheel styles via <style>
const scrollStyle = `
/* Scrollbar for Pages and body */
body, 
.Page-navigation,
.Page-lore,
.Page-timekeeping,
.Page-book-series,
.Page-mmorpg,
.Page-font-project,
.Page-language-rules,
.Page-lexicon,
.Page-follow,
.Page-support {
  scrollbar-width: thin;
  scrollbar-color: rgba(3, 144, 144, 0.5) transparent;
}

body::-webkit-scrollbar,
.Page-navigation::-webkit-scrollbar,
.Page-lore::-webkit-scrollbar,
.Page-timekeeping::-webkit-scrollbar,
.Page-book-series::-webkit-scrollbar,
.Page-mmorpg::-webkit-scrollbar,
.Page-font-project::-webkit-scrollbar,
.Page-language-rules::-webkit-scrollbar,
.Page-lexicon::-webkit-scrollbar,
.Page-follow::-webkit-scrollbar,
.Page-support::-webkit-scrollbar {
  width: 14px;
  height: 14px;
}

body::-webkit-scrollbar-track,
.Page-navigation::-webkit-scrollbar-track,
.Page-lore::-webkit-scrollbar-track,
.Page-timekeeping::-webkit-scrollbar-track,
.Page-book-series::-webkit-scrollbar-track,
.Page-mmorpg::-webkit-scrollbar-track,
.Page-font-project::-webkit-scrollbar-track,
.Page-language-rules::-webkit-scrollbar-track,
.Page-lexicon::-webkit-scrollbar-track,
.Page-follow::-webkit-scrollbar-track,
.Page-support::-webkit-scrollbar-track {
  background: rgba(26, 17, 75, 0.4);
  border-radius: 10px;
}

body::-webkit-scrollbar-thumb,
.Page-navigation::-webkit-scrollbar-thumb,
.Page-lore::-webkit-scrollbar-thumb,
.Page-timekeeping::-webkit-scrollbar-thumb,
.Page-book-series::-webkit-scrollbar-thumb,
.Page-mmorpg::-webkit-scrollbar-thumb,
.Page-font-project::-webkit-scrollbar-thumb,
.Page-language-rules::-webkit-scrollbar-thumb,
.Page-lexicon::-webkit-scrollbar-thumb,
.Page-follow::-webkit-scrollbar-thumb,
.Page-support::-webkit-scrollbar-thumb {
  background-color: #A63A2C;
  border-radius: 10px;
  border: 3px solid rgba(4, 13, 18, 0.6);
}

body::-webkit-scrollbar-thumb:hover,
.Page-navigation::-webkit-scrollbar-thumb:hover,
.Page-lore::-webkit-scrollbar-thumb:hover,
.Page-timekeeping::-webkit-scrollbar-thumb:hover,
.Page-book-series::-webkit-scrollbar-thumb:hover,
.Page-mmorpg::-webkit-scrollbar-thumb:hover,
.Page-font-project::-webkit-scrollbar-thumb:hover,
.Page-language-rules::-webkit-scrollbar-thumb:hover,
.Page-lexicon::-webkit-scrollbar-thumb:hover,
.Page-follow::-webkit-scrollbar-thumb:hover,
.Page-support::-webkit-scrollbar-thumb:hover {
  background-color: #D88EBA;
}
`;

// Inject the scroll style into the document head
const styleTag = document.createElement('style');
styleTag.textContent = scrollStyle;
document.head.appendChild(styleTag);

// 🧩 Responsive adjustments
// function applyResponsive() {
//   const width = window.innerWidth;
//   if (width <= 768) {
//     if (header) header.style.paddingRight = '1rem';
//     if (header?.querySelector('.audio-Page')) {
//       header.querySelector('.audio-Page').style.width = '100%';
//       header.querySelector('.audio-Page').style.right = '0';
//     }
//   } else if (width <= 1024) {
//     if (header) header.style.paddingRight = '200px';
//     if (header?.querySelector('.hamburger')) {
//       header.querySelector('.hamburger').style.width = '18px';
//       header.querySelector('.hamburger').style.height = '18px';
//     }
//     if (header?.querySelector('.audio-Page')) {
//       header.querySelector('.audio-Page').style.width = '240px';
//     }
//     PagePositions.forEach(Page => {
//       const el = document.querySelector(Page.selector);
//       if (el) {
//         el.style.maxWidth = '90%';
//         el.style.left = '5%';
//       }
//     });
//   } else {
//     // reset to default if larger
//     if (header) header.style.paddingRight = '340px';
//     if (header?.querySelector('.hamburger')) {
//       header.querySelector('.hamburger').style.width = '24px';
//       header.querySelector('.hamburger').style.height = '24px';
//     }
//     if (header?.querySelector('.audio-Page')) {
//       header.querySelector('.audio-Page').style.width = '300px';
//       header.querySelector('.audio-Page').style.right = '24px';
//     }
//     PagePositions.forEach(Page => {
// ✅ Scrollwheels handled by CSS from style.css
//         el.style.left = `${Page.left}px`;
//       }
//     });
//   }
  // ✅ Scrollwheels handled by CSS from style.css
});
// ==UserScript==
// @name         Aza'raan Layout & Theme Only (Fonts via External Override)
// @namespace    https://github.com/thetransgendertrex
// @version      1.1
// @description  Applies Moonpunk variables and layout/styling; delegates all font overrides to override.js
// @author       William Saville
// @match        https://docs.google.com/*
// @match        https://slides.google.com/*
// @match        https://sheets.google.com/*
// @match        https://forms.google.com/*
// @match        https://drive.google.com/*
// @match        https://drawings.google.com/*
// @match        *://*/index.html
// @match        *://*/lore.html
// @grant        none
// ==/UserScript==

// (Removed duplicate loader/module block to avoid redeclaration errors)
// ==UserScript==
// @name         Aza'raan Font Universal Override
// @namespace    https://github.com/thetransgendertrex/Azaraanlanguage
// @version      1.3
// @description  Replace Comic Sans with Aza'raan on GitHub index.html lore.html ONLY; Override Pacifico with Aza'raan on Google Apps ONLY (Docs, Slides, Sheets, etc.). Aza'raan fully usable font in Google apps dropdown and typing.
// @author       William Blake Saville AKA #TheTransgenderTRex (™)
// @match        https://docs.google.com/*
// @match        https://slides.google.com/*
// @match        https://sheets.google.com/*
// @match        https://forms.google.com/*
// @match        https://drive.google.com/*
// @match        https://drawings.google.com/*
// @match        https://github.com/*
// @grant        GM_addStyle
// ==/UserScript==

(function () {
  'use strict';

  const fontURL = "https://raw.githubusercontent.com/thetransgendertrex/Azaraanlanguage/main/Aza%27raan%20Planet%20Language.ttf";

  // Insert @font-face declarations for Aza'raan font (used both in GitHub and Google Apps)
  const style = document.createElement("style");
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

// ✅ Helper: check if current page is one of the specified pages
function isGitHubIndexOrAllowedPage() {
  const path = window.location.pathname.toLowerCase();
  return (
    path.endsWith('index.html') ||
    path.endsWith('home.html') ||
    path.endsWith('lore.html') ||
    path.endsWith('font-project.html') ||
    path.endsWith('book-series.html') ||
    path.endsWith('language-rules.html') ||
    path.endsWith('lexicon.html')
  );
}

// ✅ If current page is in the allowed list, override Comic Sans
if (isGitHubIndexOrAllowedPage()) {
  function overrideComicSans() {
    const all = document.querySelectorAll('*');
    all.forEach(el => {
      const style = window.getComputedStyle(el);
      const ff = style.fontFamily;
      if (ff && /comic sans ms/i.test(ff)) {
        el.style.setProperty('font-family', "'AzaraanOverride', cursive", 'important');
      }
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    overrideComicSans();
    // Also watch for DOM changes
    const observer = new MutationObserver(() => overrideComicSans());
    observer.observe(document.body, { childList: true, subtree: true });
  });
}


  // --- Google Apps: Override Pacifico ONLY ---
  if (isGoogleApps()) {
    // Global CSS to replace Pacifico font-family with Aza'raan font-family in Google Apps
    const googleStyle = document.createElement("style");
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
  }
})();
