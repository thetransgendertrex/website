/* ──────────────✦ === Aza'ra Website Script === ✦────────────── */
// @name         Aza'ra Website Script
// @namespace    https://github.com/thetransgendertrex/website
// @version      1.1
// @description  Core interactive behavior for Aza'ra's Trademarked Projects
// @match        https://www.azara-trademarked-projects.com/*

(function () {
  'use strict';

  console.log('✨ Aza\'raan Site Script initializing...');

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
    .then(() => console.log('✅ index.html verified.'))
    .catch(() => console.warn('⚠️ Could not verify index.html.'));

  // ✅ DOM Logic
    document.addEventListener('DOMContentLoaded', () => {
      console.log('✅ DOM fully loaded.');
    });
  
  })();
 // JS: Custom smooth scroll targeting data-section
    document.querySelectorAll('header nav a').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionName = this.getAttribute('href').substring(1);
        const target = document.querySelector(`.section[data-section="${sectionName}"]`);
        const headerOffset = 100; // adjust for your header height
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      });
    });
// ==UserScript==
// @name         Aza'ra Website Styles JS
// @namespace    https://github.com/thetransgendertrex/website
// @version      1.0
// @description  Creates Style For Aza'ra's Trademarked Projects (JavaScript Version)
// @match        https://www.azara-trademarked-projects.com/*
// ==/UserScript==

(function() {
  // === Google Fonts ===
  const fonts = [
    "https://fonts.googleapis.com/css2?family=Cinzel+Decorative&display=swap",
    "https://fonts.googleapis.com/css2?family=Pridi&display=swap",
    "https://fonts.googleapis.com/css2?family=Uncial+Antiqua&display=swap"
  ];
  fonts.forEach(href => {
    const link = document.createElement('link');
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
  });

  // === Reset margins, box sizing ===
  document.querySelectorAll('*').forEach(el => {
    el.style.margin = '0';
    el.style.padding = '0';
    el.style.boxSizing = 'border-box';
  });

  // === HTML & BODY base styles ===
  document.documentElement.style.width = '100%';
  document.documentElement.style.height = '100%';
  document.documentElement.style.scrollBehavior = 'smooth';

  document.body.style.width = '100%';
  document.body.style.height = '100%';
  document.body.style.overflowX = 'hidden';
  document.body.style.fontFamily = 'Times New Roman, serif';
  document.body.style.backgroundColor = 'black';
  document.body.style.position = 'relative';

  // === Fixed background image ===
  const bgBefore = document.createElement('div');
  bgBefore.style.content = '""';
  bgBefore.style.position = 'fixed';
  bgBefore.style.top = '0';
  bgBefore.style.left = '0';
  bgBefore.style.width = '100%';
  bgBefore.style.height = '100%';
  bgBefore.style.background = 'url("https://raw.githubusercontent.com/thetransgendertrex/website/refs/heads/main/Aza%27ra%20Moonpunk%20Settlement%20%28AI%20Generated%29.JPG.jpg") center center / cover no-repeat';
  bgBefore.style.zIndex = '-2';
  document.body.prepend(bgBefore);

  // === Scrolling radial black overlay ===
  const bgAfter = document.createElement('div');
  bgAfter.style.content = '""';
  bgAfter.style.position = 'absolute';
  bgAfter.style.top = '0';
  bgAfter.style.left = '0';
  bgAfter.style.width = '100%';
  bgAfter.style.height = '100%';
  bgAfter.style.background = 'radial-gradient(circle, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.7) 100%)';
  bgAfter.style.zIndex = '-1';
  bgAfter.style.pointerEvents = 'none';
  document.body.prepend(bgAfter);

  // === Header ===
  const header = document.createElement('header');
  header.style.position = 'fixed';
  header.style.top = '0';
  header.style.left = '0';
  header.style.width = '100%';
  header.style.background = 'white';
  header.style.zIndex = '10';
  header.style.display = 'flex';
  header.style.flexDirection = 'column';
  header.style.alignItems = 'center';
  header.style.borderBottom = '2px solid #9381FF';
  header.style.padding = '1rem 0';
  header.style.boxSizing = 'border-box';

  const h1 = document.createElement('h1');
  h1.textContent = 'Aza\'ra Website';
  h1.style.fontFamily = 'Times New Roman, serif';
  h1.style.fontWeight = 'bold';
  h1.style.color = 'black';
  h1.style.letterSpacing = '0.1rem';
  h1.style.wordSpacing = '0.2rem';
  h1.style.margin = '0';
  header.appendChild(h1);

  const divider = document.createElement('div');
  divider.className = 'divider';
  divider.style.width = '80%';
  divider.style.height = '2px';
  divider.style.backgroundColor = '#9381FF';
  divider.style.margin = '0.5rem 0';
  header.appendChild(divider);

  const nav = document.createElement('nav');
  nav.style.display = 'flex';
  nav.style.justifyContent = 'space-between';
  nav.style.flexWrap = 'wrap';
  nav.style.gap = '1rem';

  const links = [
    { href: "#home", text: "Home", color: "#ECEEF1", shadow: "#1a114b" },
    { href: "#lore", text: "Lore", color: "#0075FF", shadow: "#0c4530" },
    { href: "#navigation", text: "Navigation", color: "#C5ECFF", shadow: "#342c61" },
    { href: "#font-project", text: "Font Project", color: "#C1FF8A", shadow: "#572a45" },
    { href: "#mmorpg", text: "MMORPG", color: "#FBC96D", shadow: "#014d4e" },
    { href: "#book-series", text: "Book Series", color: "#D88EBA", shadow: "#78581f" },
    { href: "#timekeeping", text: "Timekeeping", color: "#DCE1E8", shadow: "#A63A2C" },
    { href: "#language-rules", text: "Language Rules", color: "#8FE9F0", shadow: "#7A7C86" },
    { href: "#lexicon", text: "Lexicon", color: "#7A7C86", shadow: "#1a114b" },
    { href: "#support", text: "Support", color: "#FBC96D", shadow: "#342c61" },
  ];

  links.forEach(linkData => {
    const link = document.createElement('a');
    link.href = linkData.href;
    link.textContent = linkData.text;
    link.style.fontFamily = 'Times New Roman, serif';
    link.style.color = 'black';
    link.style.textDecoration = 'none';
    link.style.fontSize = '1rem';
    link.style.transition = 'all 0.3s ease';
    link.addEventListener('mouseenter', () => {
      link.style.color = linkData.color;
      link.style.textShadow = `0 0 2px ${linkData.shadow}`;
    });
    link.addEventListener('mouseleave', () => {
      link.style.color = 'black';
      link.style.textShadow = 'none';
    });
    nav.appendChild(link);
  });

  header.appendChild(nav);
  document.body.prepend(header);

  // === Responsive adjustments ===
  function updateResponsive() {
    const w = window.innerWidth;
    if (w <= 768) {
      nav.style.flexDirection = 'column';
      nav.style.alignItems = 'center';
      nav.style.gap = '0.5rem';
      nav.querySelectorAll('a').forEach(a => a.style.fontSize = '0.8rem');
      h1.style.fontSize = '1rem';
    } else if (w <= 1024) {
      nav.style.flexDirection = 'row';
      nav.querySelectorAll('a').forEach(a => a.style.fontSize = '0.9rem');
      h1.style.fontSize = '1.2rem';
    } else {
      nav.style.flexDirection = 'row';
      nav.querySelectorAll('a').forEach(a => a.style.fontSize = '1rem');
    }
  }

  window.addEventListener('resize', updateResponsive);
  updateResponsive();

  // === Example sections ===
  for (let i = 0; i < 3; i++) {
    const section = document.createElement('section');
    section.className = 'section';
    section.textContent = `Section ${i + 1}`;
    section.style.padding = '200px 20px';
    section.style.marginTop = '80px';
    section.style.color = 'white';
    document.body.appendChild(section);
  }
})();
/* ──────────────✦ Apply Base Heading Styles Dynamically ✦────────────── */
document.querySelectorAll('h1, h3').forEach(el => {
  el.style.fontFamily = "'Uncial Antiqua', serif";
  el.style.textAlign = "center";
});

document.querySelectorAll('h2, h4').forEach(el => {
  el.style.fontFamily = "'Cinzel', serif";
  el.style.textAlign = "center";
});

document.querySelectorAll('p, span, li').forEach(el => {
  el.style.fontFamily = "serif";
  el.style.color = "white";
  el.style.textAlign = "center";
});

/* ──────────────✦ Apply Table Styles Dynamically ✦────────────── */
document.querySelectorAll('table').forEach(table => {
  table.style.width = "90%";
  table.style.margin = "2rem auto";
  table.style.background = "rgba(255, 255, 255, 0.9)";
  table.style.borderCollapse = "collapse";

  // Responsive adjustments
  const screenWidth = window.innerWidth;
  if (screenWidth <= 768) {
    table.style.width = "100%";
  } else if (screenWidth >= 769 && screenWidth <= 1024) {
    table.style.width = "95%";
  }

  table.querySelectorAll('th').forEach(th => {
    th.style.fontFamily = "'Cinzel', serif";
    th.style.textAlign = "center";
    th.style.padding = "0.75rem";
  });

  table.querySelectorAll('td').forEach(td => {
    td.style.fontFamily = "'Pridi', serif";
    td.style.color = "black";
    td.style.textAlign = "center";
    td.style.padding = "0.75rem";
  });
});

/* ──────────────✦ Apply Section Styles And Dividers ✦────────────── */
document.querySelectorAll('section').forEach(section => {
  section.style.padding = "4rem 2rem";
  section.style.textAlign = "center";
});

// Add colors to dividers based on section type
const sectionColors = {
  "home": "#ECEEF1",
  "lore": "#0075FF",
  "navigation": "#C5ECFF",
  "font-project": "#C1FF8A",
  "mmorpg": "#FBC96D",
  "book-series": "#D88EBA",
  "timekeeping": "#DCE1E8",
  "language-rules": "#8FE9F0",
  "lexicon": "#7A7C86",
  "support": "#FBC96D"
};

document.querySelectorAll('.section-divider').forEach(divider => {
  const parentSection = divider.closest('section');
  if (parentSection) {
    for (const key in sectionColors) {
      if (parentSection.classList.contains(key)) {
        divider.style.backgroundColor = sectionColors[key];
        break;
      }
    }
  }
});

/* ──────────────✦ Responsive Divider Size ✦────────────── */
function adjustDividerSize() {
  const screenWidth = window.innerWidth;

  let width = "80%";
  let height = "2px";
  let margin = "1rem auto";

  if (screenWidth <= 480) {
    width = "70%";
    height = "1px";
    margin = "0.8rem auto";
  } else if (screenWidth <= 768) {
    width = "75%";
    height = "1.5px";
    margin = "0.9rem auto";
  } else if (screenWidth <= 1024) {
    width = "80%";
    height = "2px";
    margin = "1rem auto";
  } else if (screenWidth <= 1440) {
    width = "80%";
    height = "2.5px";
    margin = "1.2rem auto";
  } else {
    width = "80%";
    height = "3px";
    margin = "1.5rem auto";
  }

  document.querySelectorAll('.section-divider').forEach(divider => {
    divider.style.width = width;
    divider.style.height = height;
    divider.style.margin = margin;
  });
}

// Initial run and on resize
adjustDividerSize();
window.addEventListener('resize', adjustDividerSize);
/* ──────────────✦ HOME SECTION ✦────────────── */
const homeSection = document.querySelector('.section.home');
if (homeSection) {
  homeSection.style.display = 'flex';
  homeSection.style.flexDirection = 'column';
  homeSection.style.alignItems = 'center';
  homeSection.style.color = '#ECEEF1';

  const homeContainer = homeSection.querySelector('.container');
  if (homeContainer) {
    homeContainer.style.display = 'flex';
    homeContainer.style.flexDirection = 'row';
    homeContainer.style.alignItems = 'flex-start';
    homeContainer.style.justifyContent = 'center';
    homeContainer.style.flexWrap = 'wrap';
    homeContainer.style.gap = '2rem';
  }

  homeSection.querySelectorAll('h1, h2, h3, h4, p').forEach(el => {
    el.style.color = '#ECEEF1';
    el.style.textShadow = '0 0 2px #1a114b';
  });

  homeSection.querySelectorAll('.section-heading .line-dec').forEach(line => {
    line.style.width = '60px';
    line.style.height = '4px';
    line.style.backgroundColor = '#ECEEF1';
    line.style.margin = '1rem 0';
    line.style.borderRadius = '2px';
  });

  homeSection.querySelectorAll('a').forEach(link => {
    link.style.color = '#ECEEF1';
    link.style.textDecoration = 'underline';
    link.addEventListener('mouseover', () => {
      link.style.color = '#29ffff';
    });
    link.addEventListener('mouseout', () => {
      link.style.color = '#ECEEF1';
    });
  });

  homeSection.querySelectorAll('.left-image-facebook-logo').forEach(container => {
    container.style.display = 'flex';
    container.style.flexDirection = 'row';
    container.style.alignItems = 'flex-start';
    container.style.gap = '2rem';
  });

  homeSection.querySelectorAll('.facebook-logo').forEach(logo => {
    logo.style.flex = '0 0 auto';
    logo.style.maxWidth = '200px';

    logo.querySelectorAll('img').forEach(img => {
      img.style.display = 'block';
      img.style.width = '100%';
      img.style.height = 'auto';
      img.style.borderRadius = '8px';
      img.style.transition = 'box-shadow 0.3s ease, filter 0.3s ease';

      img.addEventListener('mouseover', () => {
        img.style.boxShadow = '0 0 20px #00ffff';
        img.style.filter = 'drop-shadow(0 0 10px #00ffff)';
        img.style.cursor = 'pointer';
      });
      img.addEventListener('mouseout', () => {
        img.style.boxShadow = '';
        img.style.filter = '';
      });
    });
  });

  homeSection.querySelectorAll('.right-text').forEach(rightText => {
    rightText.style.flex = '1 1 600px';
    rightText.style.maxWidth = '800px';
  });

  homeSection.querySelectorAll('p').forEach(p => {
    p.style.lineHeight = '1.7';
    p.style.marginBottom = '1rem';
  });

  homeSection.querySelectorAll('ul').forEach(ul => {
    ul.style.marginLeft = '1.5rem';
    ul.style.marginBottom = '1rem';
  });

  homeSection.querySelectorAll('li').forEach(li => {
    li.style.marginBottom = '0.5rem';
  });
}

/* ──────────────✦ LORE SECTION ✦────────────── */
document.querySelectorAll('.lore h1, .lore h2, .lore h3, .lore h4, .lore th').forEach(el => {
  el.style.color = '#0075FF';
  el.style.textShadow = '0 0 2px #0c4530';
});

/* ──────────────✦ NAVIGATION SECTION ✦────────────── */
document.querySelectorAll('.navigation h1, .navigation h2, .navigation h3, .navigation h4, .navigation th').forEach(el => {
  el.style.color = '#C5ECFF';
  el.style.textShadow = '0 0 2px #342c61';
});

/* ──────────────✦ FONT PROJECT BASE ✦────────────── */
const fontProject = document.querySelector('.font-project');
if (fontProject) {
  fontProject.style.padding = '2rem';
  fontProject.style.background = '#111';
  fontProject.style.color = '#C1FF8A';
  fontProject.style.fontFamily = "'Comic Sans MS', cursive";

  fontProject.querySelectorAll('h1, h2, h3, h4').forEach(el => {
    el.style.color = '#C1FF8A';
    el.style.textShadow = '0 0 2px #572a45';
    el.style.marginBottom = '1rem';
  });

  fontProject.querySelectorAll('p, span').forEach(el => {
    el.style.lineHeight = '1.6';
  });

  fontProject.querySelectorAll('th').forEach(th => {
    th.style.color = '#C1FF8A';
    th.style.textShadow = '0 0 2px #572a45';
  });

  fontProject.querySelectorAll('a').forEach(link => {
    link.style.color = 'cyan';
    link.style.textDecoration = 'underline';
    link.addEventListener('mouseover', () => {
      link.style.color = '#C1FF8A';
    });
    link.addEventListener('mouseout', () => {
      link.style.color = 'cyan';
    });
  });

  fontProject.querySelectorAll('.pacifico').forEach(el => {
    el.style.fontFamily = "'Pacifico', cursive";
    el.style.fontSize = '1.6em';
    el.style.color = '#f5ff64';
  });

  fontProject.querySelectorAll('.azaaraan-preview').forEach(el => {
    el.style.fontFamily = "'Comic Sans MS', cursive";
    el.style.fontSize = '1.2em';
    el.style.color = '#C1FF8A';
  });

  fontProject.querySelectorAll('.closing-lines p').forEach(el => {
    el.style.margin = '0.5rem 0';
    el.style.fontStyle = 'italic';
  });
}

/* ──────────────✦ VERTICAL BUTTONS ✦────────────── */
const verticalButtons = document.querySelector('.vertical-buttons');
if (verticalButtons) {
  verticalButtons.style.position = 'fixed';
  verticalButtons.style.top = '30%';
  verticalButtons.style.left = '2%';
  verticalButtons.style.display = 'flex';
  verticalButtons.style.flexDirection = 'column';
  verticalButtons.style.gap = '1.5rem';
  verticalButtons.style.zIndex = '9999';

  verticalButtons.querySelectorAll('a').forEach(button => {
    button.style.display = 'inline-block';
    button.style.backgroundColor = 'black';
    button.style.color = 'cyan';
    button.style.border = '2px solid cyan';
    button.style.borderRadius = '8px';
    button.style.padding = '0.75rem 1.5rem';
    button.style.fontFamily = "'Times New Roman', serif";
    button.style.textDecoration = 'none';
    button.style.textAlign = 'center';
    button.style.transition = 'all 0.3s ease';

    button.addEventListener('mouseover', () => {
      button.style.backgroundColor = 'cyan';
      button.style.color = 'black';
      button.style.border = '2px solid black';
    });
    button.addEventListener('mouseout', () => {
      button.style.backgroundColor = 'black';
      button.style.color = 'cyan';
      button.style.border = '2px solid cyan';
    });
  });

  // Responsive tweak for vertical buttons
  function adjustVerticalButtons() {
    const w = window.innerWidth;
    if (w <= 768) {
      verticalButtons.style.top = '20%';
      verticalButtons.style.left = '1%';
      verticalButtons.style.gap = '1rem';
      verticalButtons.querySelectorAll('a').forEach(button => {
        button.style.padding = '0.5rem 1rem';
        button.style.fontSize = '0.9rem';
      });
    } else if (w <= 1024) {
      verticalButtons.style.top = '25%';
      verticalButtons.style.left = '1.5%';
      verticalButtons.style.gap = '1.25rem';
    } else {
      verticalButtons.style.top = '30%';
      verticalButtons.style.left = '2%';
      verticalButtons.style.gap = '1.5rem';
      verticalButtons.querySelectorAll('a').forEach(button => {
        button.style.padding = '0.75rem 1.5rem';
        button.style.fontSize = '';
      });
    }
  }
  adjustVerticalButtons();
  window.addEventListener('resize', adjustVerticalButtons);
}
// ──────────────✦ MMORPG ✦──────────────
document.querySelectorAll('.mmorpg h1, .mmorpg h2, .mmorpg h3, .mmorpg h4').forEach(el => {
  el.addEventListener('click', () => {
    alert(`You clicked on a MMORPG heading: "${el.textContent}"`);
  });
});

// ──────────────✦ BOOK SERIES ✦──────────────
document.querySelectorAll('.book-series h1, .book-series h2, .book-series h3, .book-series h4').forEach(el => {
  el.addEventListener('mouseover', () => {
    el.style.textDecoration = 'underline';
  });
  el.addEventListener('mouseout', () => {
    el.style.textDecoration = 'none';
  });
});

// ──────────────✦ TIMEKEEPING ✦──────────────
document.querySelectorAll('.timekeeping h1, .timekeeping h2, .timekeeping h3, .timekeeping h4').forEach(el => {
  el.addEventListener('dblclick', () => {
    console.log(`Timekeeping heading double-clicked: "${el.textContent}"`);
  });
});

// ──────────────✦ LANGUAGE RULES ✦──────────────
document.querySelectorAll('.language-rules h1, .language-rules h2, .language-rules h3, .language-rules h4').forEach(el => {
  el.addEventListener('mouseenter', () => {
    el.style.color = '#ffffff';
  });
  el.addEventListener('mouseleave', () => {
    el.style.color = '#8FE9F0';
  });
});

// ──────────────✦ LEXICON ✦──────────────
document.querySelectorAll('.lexicon h1, .lexicon h2, .lexicon h3, .lexicon h4').forEach(el => {
  el.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    alert(`Right-clicked on Lexicon heading: "${el.textContent}"`);
  });
});

// ──────────────✦ SUPPORT BASE ✦──────────────
document.querySelectorAll('.support .button').forEach(button => {
  button.addEventListener('click', () => {
    const status = document.getElementById('donation-status');
    if (status) {
      status.textContent = 'Thank you for your support!';
    }
  });
});
// === Add Smooth Scroll Logic ===
document.addEventListener('DOMContentLoaded', () => {
  console.log('✅ Adding smooth scroll listeners...');

  // Give each dynamic section a proper data-section attribute
  const sections = document.querySelectorAll('.section');
  const sectionNames = [
    "home",
    "lore",
    "navigation",
    "font-project",
    "mmorpg",
    "book-series",
    "timekeeping",
    "language-rules",
    "lexicon",
    "support"
  ];

  sections.forEach((section, index) => {
    // Use section name if available, else default to 'sectionX'
    section.dataset.section = sectionNames[index] || `section${index + 1}`;
  });

  // Add listeners for nav links
  document.querySelectorAll('header nav a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const sectionName = this.getAttribute('href').substring(1);
      const target = document.querySelector(`.section[data-section="${sectionName}"]`);
      if (!target) {
        console.warn(`⚠️ No section found for: ${sectionName}`);
        return;
      }

      const headerOffset = document.querySelector('header').offsetHeight || 100;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    });
  });
});
