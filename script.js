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

    const navLinks = document.querySelectorAll('header nav a');
    const sections = Array.from(navLinks).map(link => {
      const id = link.getAttribute('href').substring(1);
      return document.getElementById(id);
    });

    const setActiveLink = () => {
      let index = sections.length;
      while (--index >= 0) {
        const sectionTop = sections[index].getBoundingClientRect().top;
        if (sectionTop <= window.innerHeight / 2) {
          navLinks.forEach(link => link.classList.remove('active'));
          navLinks[index].classList.add('active');
          break;
        }
      }
    };
    window.addEventListener('scroll', setActiveLink);

    // Fallback smooth scroll for older browsers
    navLinks.forEach(link => {
      link.addEventListener('click', event => {
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          event.preventDefault();
          window.scrollTo({
            top: targetSection.offsetTop - document.querySelector('header').offsetHeight,
            behavior: 'smooth'
          });
        }
      });
    });

    console.log('✅ Navigation highlighting and smooth scroll initialized.');
  });
})();
// === Reset default margins/padding and base styles ===
document.querySelectorAll('*').forEach(el => {
  el.style.margin = '0';
  el.style.padding = '0';
  el.style.boxSizing = 'border-box';
});

document.documentElement.style.width = '100%';
document.documentElement.style.height = '100%';

document.body.style.width = '100%';
document.body.style.height = '100%';
document.body.style.overflowX = 'hidden';
document.body.style.fontFamily = 'Times New Roman, serif';
document.body.style.backgroundColor = 'black';

// === Simulate body::before (fixed background image) ===
const bgBefore = document.createElement('div');
bgBefore.style.position = 'fixed';
bgBefore.style.top = '0';
bgBefore.style.left = '0';
bgBefore.style.width = '100%';
bgBefore.style.height = '100%';
bgBefore.style.background = 'url("https://raw.githubusercontent.com/thetransgendertrex/website/refs/heads/main/Aza%27ra%20Moonpunk%20Settlement%20%28AI%20Generated%29.JPG.jpg") center center / cover no-repeat';
bgBefore.style.zIndex = '-2';
bgBefore.style.pointerEvents = 'none';
document.body.prepend(bgBefore);

// === Simulate body::after (scrolling radial black overlay) ===
const bgAfter = document.createElement('div');
bgAfter.style.position = 'absolute';
bgAfter.style.top = '0';
bgAfter.style.left = '0';
bgAfter.style.width = '100%';
bgAfter.style.height = '100%';
bgAfter.style.background = 'radial-gradient(circle, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.7) 100%)';
bgAfter.style.zIndex = '-1';
bgAfter.style.pointerEvents = 'none';
document.body.appendChild(bgAfter);

// === Style <header> ===
const header = document.querySelector('header');
if (header) {
  header.style.position = 'fixed';
  header.style.top = '0';
  header.style.left = '0';
  header.style.width = '100%';
  header.style.height = '80px';
  header.style.background = 'white';
  header.style.zIndex = '10';
  header.style.borderBottom = '2px solid #9381FF';
  header.style.display = 'flex';
  header.style.flexDirection = 'column';
  header.style.alignItems = 'center';
  header.style.justifyContent = 'flex-start';
  header.style.paddingTop = '5%';
  header.style.boxSizing = 'border-box';

  // Style header h1
  const h1 = header.querySelector('h1');
  if (h1) {
    h1.style.fontFamily = "'Times New Roman', serif";
    h1.style.fontWeight = 'bold';
    h1.style.color = 'black';
    h1.style.letterSpacing = '0.1rem';
    h1.style.wordSpacing = '0.2rem';
    h1.style.margin = '0';
    h1.style.padding = '0';
  }

  // Style divider
  const divider = header.querySelector('.divider');
  if (divider) {
    divider.style.width = '80%';
    divider.style.height = '2px';
    divider.style.backgroundColor = '#9381FF';
    divider.style.margin = '0.5rem 0';
  }

  // Style nav
  const nav = header.querySelector('nav');
  if (nav) {
    nav.style.position = 'absolute';
    nav.style.left = '10%';
    nav.style.right = '10%';
    nav.style.bottom = '5%';
    nav.style.display = 'flex';
    nav.style.justifyContent = 'space-between';
    nav.style.flexWrap = 'wrap';

    // Style nav links
    nav.querySelectorAll('a').forEach(a => {
      a.style.fontFamily = "'Times New Roman', serif";
      a.style.color = 'black';
      a.style.textDecoration = 'none';
      a.style.fontSize = '1rem';
      a.style.transition = 'all 0.3s ease';
      a.style.position = 'relative';
    });
  }
}

// === Responsive tweaks ===
function applyResponsiveHeader() {
  if (!header) return;

  const h1 = header.querySelector('h1');
  const navLinks = header.querySelectorAll('nav a');

  if (window.innerWidth <= 768) {
    header.style.height = '60px';
    header.style.paddingTop = '4%';
    if (h1) h1.style.fontSize = '1rem';
    navLinks.forEach(a => {
      a.style.fontSize = '0.8rem';
    });
  } else if (window.innerWidth >= 769 && window.innerWidth <= 1024) {
    header.style.height = '70px';
    header.style.paddingTop = '4.5%';
    if (h1) h1.style.fontSize = '1.2rem';
  } else {
    header.style.height = '80px';
    header.style.paddingTop = '5%';
    if (h1) h1.style.fontSize = '';
    navLinks.forEach(a => {
      a.style.fontSize = '1rem';
    });
  }
}

// Apply on load
applyResponsiveHeader();
window.addEventListener('resize', applyResponsiveHeader);
// === Scroll behavior for <html> ===
document.documentElement.style.scrollBehavior = 'smooth';

// === Hover styles for nav links ===
const hoverStyles = [
  { selector: 'a[href="#home"]', color: '#ECEEF1', shadow: '#1a114b' },
  { selector: 'a[href="#lore"]', color: '#0075FF', shadow: '#0c4530' },
  { selector: 'a[href="#navigation"]', color: '#C5ECFF', shadow: '#342c61' },
  { selector: 'a[href="#font-project"]', color: '#C1FF8A', shadow: '#572a45' },
  { selector: 'a[href="#mmorpg"]', color: '#FBC96D', shadow: '#014d4e' },
  { selector: 'a[href="#book-series"]', color: '#D88EBA', shadow: '#78581f' },
  { selector: 'a[href="#timekeeping"]', color: '#DCE1E8', shadow: '#A63A2C' },
  { selector: 'a[href="#language-rules"]', color: '#8FE9F0', shadow: '#7A7C86' },
  { selector: 'a[href="#lexicon"]', color: '#7A7C86', shadow: '#1a114b' },
  { selector: 'a[href="#support"]', color: '#FBC96D', shadow: '#342c61' },
];

hoverStyles.forEach(({ selector, color, shadow }) => {
  document.querySelectorAll(`header nav ${selector}`).forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.style.color = color;
      link.style.textShadow = `0 0 2px ${shadow}`;
    });
    link.addEventListener('mouseleave', () => {
      link.style.color = 'black';
      link.style.textShadow = 'none';
    });
  });
});

// === Responsive nav font sizes ===
function updateNavFontSize() {
  const navLinks = document.querySelectorAll('header nav a');
  const nav = document.querySelector('header nav');
  if (window.innerWidth <= 768) {
    if (nav) {
      nav.style.left = '5%';
      nav.style.right = '5%';
      nav.style.bottom = '5%';
      nav.style.flexWrap = 'wrap';
    }
    navLinks.forEach(link => {
      link.style.fontSize = '0.8rem';
      link.style.marginBottom = '0.5rem';
    });
  } else if (window.innerWidth >= 769 && window.innerWidth <= 1024) {
    navLinks.forEach(link => {
      link.style.fontSize = '0.9rem';
    });
  } else {
    navLinks.forEach(link => {
      link.style.fontSize = '1rem';
    });
  }
}

updateNavFontSize();
window.addEventListener('resize', updateNavFontSize);

// === Base heading styles ===
document.querySelectorAll('h1, h3').forEach(el => {
  el.style.fontFamily = "'Uncial Antiqua', serif";
  el.style.textAlign = 'center';
});

document.querySelectorAll('h2, h4').forEach(el => {
  el.style.fontFamily = "'Cinzel', serif";
  el.style.textAlign = 'center';
});

document.querySelectorAll('p, span, li').forEach(el => {
  el.style.fontFamily = 'serif';
  el.style.color = 'white';
  el.style.textAlign = 'center';
});

// === Base table styles ===
document.querySelectorAll('table').forEach(table => {
  table.style.width = window.innerWidth <= 768 ? '100%' :
                      window.innerWidth >= 769 && window.innerWidth <= 1024 ? '95%' : '90%';
  table.style.margin = '2rem auto';
  table.style.background = 'rgba(255, 255, 255, 0.9)';
  table.style.borderCollapse = 'collapse';
});

document.querySelectorAll('th').forEach(th => {
  th.style.fontFamily = "'Cinzel', serif";
  th.style.textAlign = 'center';
  th.style.padding = '0.75rem';
});

document.querySelectorAll('td').forEach(td => {
  td.style.fontFamily = "'Pridi', serif";
  td.style.color = 'black';
  td.style.textAlign = 'center';
  td.style.padding = '0.75rem';
});

// === Section base style ===
document.querySelectorAll('section').forEach(section => {
  section.style.padding = '4rem 2rem';
  section.style.textAlign = 'center';
});

// === Responsive table resizing ===
function updateTableWidth() {
  document.querySelectorAll('table').forEach(table => {
    table.style.width = window.innerWidth <= 768 ? '100%' :
                        window.innerWidth >= 769 && window.innerWidth <= 1024 ? '95%' : '90%';
  });
}

updateTableWidth();
window.addEventListener('resize', updateTableWidth);
// Add base .section-divider style to all .section-divider elements
document.querySelectorAll('.section-divider').forEach(divider => {
  divider.style.width = '80%';
  divider.style.height = '2px';
  divider.style.margin = '1rem auto';
});

// Section-specific divider colors
const sectionColors = {
  home: '#ECEEF1',
  lore: '#0075FF',
  navigation: '#C5ECFF',
  'font-project': '#C1FF8A',
  mmorpg: '#FBC96D',
  'book-series': '#D88EBA',
  timekeeping: '#DCE1E8',
  'language-rules': '#8FE9F0',
  lexicon: '#7A7C86',
  support: '#FBC96D'
};

// Section-specific heading and th colors + shadows
const sectionTextStyles = {
  home: { color: '#ECEEF1', shadow: '#1a114b' },
  lore: { color: '#0075FF', shadow: '#0c4530' },
  navigation: { color: '#C5ECFF', shadow: '#342c61' },
  'font-project': { color: '#C1FF8A', shadow: '#572a45' },
  mmorpg: { color: '#FBC96D', shadow: '#014d4e' },
  'book-series': { color: '#D88EBA', shadow: '#78581f' },
  timekeeping: { color: '#DCE1E8', shadow: '#A63A2C' },
  'language-rules': { color: '#8FE9F0', shadow: '#7A7C86' },
  lexicon: { color: '#7A7C86', shadow: '#1a114b' },
  support: { color: '#FBC96D', shadow: '#342c61' }
};

// Apply colors per section
Object.keys(sectionColors).forEach(section => {
  // Divider color
  document.querySelectorAll(`.section.${section} .section-divider`).forEach(divider => {
    divider.style.backgroundColor = sectionColors[section];
  });

  // Heading and th colors + shadows
  document.querySelectorAll(`.${section} h1, .${section} h2, .${section} h3, .${section} h4, .${section} th`).forEach(el => {
    el.style.color = sectionTextStyles[section].color;
    el.style.textShadow = `0 0 2px ${sectionTextStyles[section].shadow}`;
  });

  // Scrollbar workaround — not possible via pure JS, but you can attempt basic overflow styling
  const sectionEls = document.querySelectorAll(`.section.${section}`);
  sectionEls.forEach(el => {
    el.style.scrollbarColor = `${sectionTextStyles[section].shadow} ${sectionTextStyles[section].color}`;
    el.style.scrollbarWidth = 'thin'; // Firefox only
  });
});

// Responsive adjustments for .section-divider based on screen width
function adjustDividerSize() {
  const width = window.innerWidth;

  let dividerStyles;
  if (width <= 480) {
    dividerStyles = { width: '70%', height: '1px', margin: '0.8rem auto' };
  } else if (width <= 768) {
    dividerStyles = { width: '75%', height: '1.5px', margin: '0.9rem auto' };
  } else if (width <= 1024) {
    dividerStyles = { width: '80%', height: '2px', margin: '1rem auto' };
  } else if (width <= 1440) {
    dividerStyles = { width: '80%', height: '2.5px', margin: '1.2rem auto' };
  } else {
    dividerStyles = { width: '80%', height: '3px', margin: '1.5rem auto' };
  }

  document.querySelectorAll('.section-divider').forEach(divider => {
    divider.style.width = dividerStyles.width;
    divider.style.height = dividerStyles.height;
    divider.style.margin = dividerStyles.margin;
  });
}

// Run once on load and again on resize
adjustDividerSize();
window.addEventListener('resize', adjustDividerSize);
// Get the vertical buttons container
const verticalButtons = document.querySelector('.vertical-buttons');

if (verticalButtons) {
  // Base container styles
  Object.assign(verticalButtons.style, {
    position: 'fixed',
    top: '30%',
    left: '2%',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    zIndex: '9999'
  });

  // Style each <a> inside
  verticalButtons.querySelectorAll('a').forEach(btn => {
    Object.assign(btn.style, {
      display: 'inline-block',
      backgroundColor: 'black',
      color: 'cyan',
      border: '2px solid cyan',
      borderRadius: '8px',
      padding: '0.75rem 1.5rem',
      fontFamily: "'Times New Roman', serif",
      textDecoration: 'none',
      textAlign: 'center',
      transition: 'all 0.3s ease'
    });

    // Hover effect
    btn.addEventListener('mouseenter', () => {
      btn.style.backgroundColor = 'cyan';
      btn.style.color = 'black';
      btn.style.border = '2px solid black';
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.backgroundColor = 'black';
      btn.style.color = 'cyan';
      btn.style.border = '2px solid cyan';
    });
  });

  // Responsive function
  function adjustVerticalButtons() {
    const width = window.innerWidth;

    if (width <= 768) {
      verticalButtons.style.top = '20%';
      verticalButtons.style.left = '1%';
      verticalButtons.style.gap = '1rem';

      verticalButtons.querySelectorAll('a').forEach(btn => {
        btn.style.padding = '0.5rem 1rem';
        btn.style.fontSize = '0.9rem';
      });
    } else if (width <= 1024) {
      verticalButtons.style.top = '25%';
      verticalButtons.style.left = '1.5%';
      verticalButtons.style.gap = '1.25rem';

      verticalButtons.querySelectorAll('a').forEach(btn => {
        btn.style.padding = '0.75rem 1.5rem';
        btn.style.fontSize = ''; // reset
      });
    } else {
      verticalButtons.style.top = '30%';
      verticalButtons.style.left = '2%';
      verticalButtons.style.gap = '1.5rem';

      verticalButtons.querySelectorAll('a').forEach(btn => {
        btn.style.padding = '0.75rem 1.5rem';
        btn.style.fontSize = ''; // reset
      });
    }
  }

  // Run once + on resize
  adjustVerticalButtons();
  window.addEventListener('resize', adjustVerticalButtons);
}

// Example main content adjustments
const main = document.querySelector('main');
if (main) {
  main.style.marginTop = '100px';
  main.style.padding = '2rem';
  main.style.minHeight = '200vh';
}
// Get the .section.home element
const homeSection = document.querySelector('.section.home');

if (homeSection) {
  // Base .section.home styles
  Object.assign(homeSection.style, {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#ECEEF1'
  });

  // Container styles
  const container = homeSection.querySelector('.container');
  if (container) {
    Object.assign(container.style, {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '2rem'
    });
  }

  // Headings & paragraphs
  homeSection.querySelectorAll('h1,h2,h3,h4,p').forEach(el => {
    el.style.color = '#ECEEF1';
    el.style.textShadow = '0 0 2px #1a114b';
    if (el.tagName === 'P') {
      el.style.lineHeight = '1.7';
      el.style.marginBottom = '1rem';
    }
  });

  // .section-heading .line-dec
  const lineDec = homeSection.querySelector('.section-heading .line-dec');
  if (lineDec) {
    Object.assign(lineDec.style, {
      width: '60px',
      height: '4px',
      backgroundColor: '#ECEEF1',
      margin: '1rem 0',
      borderRadius: '2px'
    });
  }

  // Links
  homeSection.querySelectorAll('a').forEach(link => {
    link.style.color = '#ECEEF1';
    link.style.textDecoration = 'underline';

    link.addEventListener('mouseenter', () => {
      link.style.color = '#29ffff';
    });

    link.addEventListener('mouseleave', () => {
      link.style.color = '#ECEEF1';
    });
  });

  // Facebook logo container
  const fbLogoContainer = homeSection.querySelector('.left-image-facebook-logo');
  if (fbLogoContainer) {
    Object.assign(fbLogoContainer.style, {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: '2rem'
    });
  }

  // Facebook logo image wrapper
  const fbLogo = homeSection.querySelector('.facebook-logo');
  if (fbLogo) {
    Object.assign(fbLogo.style, {
      flex: '0 0 auto',
      maxWidth: '200px'
    });

    const img = fbLogo.querySelector('img');
    if (img) {
      Object.assign(img.style, {
        display: 'block',
        width: '100%',
        height: 'auto',
        borderRadius: '8px',
        transition: 'box-shadow 0.3s ease, filter 0.3s ease'
      });

      img.addEventListener('mouseenter', () => {
        img.style.boxShadow = '0 0 20px #00ffff';
        img.style.filter = 'drop-shadow(0 0 10px #00ffff)';
        img.style.cursor = 'pointer';
      });

      img.addEventListener('mouseleave', () => {
        img.style.boxShadow = '';
        img.style.filter = '';
        img.style.cursor = '';
      });
    }
  }

  // Right text
  const rightText = homeSection.querySelector('.right-text');
  if (rightText) {
    Object.assign(rightText.style, {
      flex: '1 1 600px',
      maxWidth: '800px'
    });
  }

  // UL & LI spacing
  homeSection.querySelectorAll('ul').forEach(ul => {
    ul.style.marginLeft = '1.5rem';
    ul.style.marginBottom = '1rem';
  });

  homeSection.querySelectorAll('li').forEach(li => {
    li.style.marginBottom = '0.5rem';
  });

  // Basic responsive behavior
  function adjustHomeLayout() {
    const w = window.innerWidth;
    if (w <= 768) {
      if (container) {
        container.style.flexDirection = 'column';
        container.style.alignItems = 'center';
      }
      if (fbLogoContainer) {
        fbLogoContainer.style.flexDirection = 'column';
        fbLogoContainer.style.alignItems = 'center';
      }
      if (rightText) {
        rightText.style.maxWidth = '100%';
      }
      if (fbLogo) {
        fbLogo.style.maxWidth = '150px';
      }
    } else {
      if (container) {
        container.style.flexDirection = 'row';
        container.style.alignItems = 'flex-start';
      }
      if (fbLogoContainer) {
        fbLogoContainer.style.flexDirection = 'row';
        fbLogoContainer.style.alignItems = 'flex-start';
      }
      if (rightText) {
        rightText.style.maxWidth = '800px';
      }
      if (fbLogo) {
        fbLogo.style.maxWidth = '200px';
      }
    }
  }

  adjustHomeLayout();
  window.addEventListener('resize', adjustHomeLayout);
}

// NOTE: Scrollbar colors & pseudo-elements like ::-webkit-scrollbar must remain in CSS.
