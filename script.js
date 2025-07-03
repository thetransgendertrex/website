// ==UserScript==
// @name         Aza'raan Website Core Loader (Sections Only, Cleaned)
// @namespace    https://github.com/thetransgendertrex/website
// @version      2.1
// @description  Loads style, override.js, donations.js, and swaps sections dynamically on nav click.
// @match        https://www.azara-trademarked-projects.com/*
// @grant        none
// ==/UserScript==

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

  // ✅ Verify index.html & donations.html
  fetch('https://raw.githubusercontent.com/thetransgendertrex/website/main/index.html')
    .then(() => console.log('✅ index.html verified.'))
    .catch(() => console.warn('⚠️ Could not verify index.html'));
  fetch('https://raw.githubusercontent.com/thetransgendertrex/website/main/donations.html')
    .then(() => console.log('✅ donations.html verified.'))
    .catch(() => console.warn('⚠️ Could not verify donations.html'));

  // ✅ Main DOM logic
  document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ DOM fully loaded.');

    const body = document.body;
    const navLinks = document.querySelectorAll('.menu a');
    const menu = document.getElementById('menu');
    const toggle = document.getElementById('menu-toggle');
    const close = document.getElementById('menu-close');

    const sectionIds = [
      'home', 'lore', 'navigation', 'font-project',
      'mmorpg', 'book-series', 'timekeeping',
      'language-rules', 'lexicon', 'support'
    ];

    const loadedSections = new Set();

    navLinks.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();

        // Highlight active link
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        const href = link.getAttribute('href').replace('.html', '').toLowerCase();
        const sectionId = sectionIds.includes(href) ? href : 'home';
        const section = document.getElementById(sectionId);

        if (!section) {
          console.error(`❌ Section container #${sectionId} not found.`);
          return;
        }

        if (!loadedSections.has(sectionId)) {
          const githubUrl = `https://raw.githubusercontent.com/thetransgendertrex/website/main/${href}.html`;
          fetch(githubUrl)
            .then(res => res.text())
            .then(html => {
              section.innerHTML = html;
              loadedSections.add(sectionId);
              console.log(`✅ Loaded: ${href}.html`);
              scaleTables();
            })
            .catch(err => console.error(`❌ Failed to load ${href}:`, err));
        } else {
          console.log(`ℹ️ Already loaded: ${sectionId}`);
        }

        section.classList.add(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });

        if (window.innerWidth < 846) {
          menu.classList.remove('open');
        }
      });
    });

    if (toggle && close && menu) {
      toggle.addEventListener('click', () => {
        menu.classList.toggle('open');
        console.log('✅ Sidebar toggled.');
      });
      close.addEventListener('click', () => {
        menu.classList.remove('open');
        console.log('✅ Sidebar closed.');
      });
    } else {
      console.warn('⚠️ Sidebar toggle elements missing.');
    }

    window.addEventListener('resize', () => {
      if (window.innerWidth < 846) {
        navLinks.forEach(link => {
          link.addEventListener('click', () => menu.classList.remove('open'));
        });
      }
    });

    document.documentElement.style.overflowX = 'auto';
    document.documentElement.style.overflowY = 'auto';
    body.style.overflowX = 'auto';
    body.style.overflowY = 'auto';
    console.log('✅ Scrollbars forced visible if needed.');

    function scaleTables() {
      document.querySelectorAll('table').forEach(table => {
        table.style.width = '100%';
        table.style.maxWidth = '100%';
        table.style.boxSizing = 'border-box';
      });
      console.log('✅ Tables resized.');
    }

    window.addEventListener('resize', scaleTables);
    scaleTables();
  // === 1. Fixed Background ===
  const bg = document.createElement('div');
  bg.id = 'bg-fixed';
  bg.style.position = 'fixed';
  bg.style.top = '0';
  bg.style.left = '0';
  bg.style.width = '100%';
  bg.style.height = '100%';
  bg.style.background = "url('https://raw.githubusercontent.com/thetransgendertrex/website/refs/heads/main/Aza%27ra%20Moonpunk%20Settlement%20(AI%20Generated).JPG.jpg') no-repeat center center fixed";
  bg.style.backgroundSize = 'cover';
  bg.style.zIndex = '-2';
  document.body.appendChild(bg);

  // === 2. Black Overlay ===
  const overlay = document.createElement('div');
  overlay.id = 'bg-overlay';
  overlay.style.position = 'absolute';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.background = 'rgba(0,0,0,0.3)';
  overlay.style.zIndex = '-1';
  document.body.appendChild(overlay);

  // === 3. Sidebar Toggle ===
  const menuEl = document.querySelector('.menu');
  const toggleEl = document.getElementById('menu-toggle');
  const closeEl = document.getElementById('menu-close');
  if (menuEl && toggleEl && closeEl) {
    toggleEl.addEventListener('click', () => {
      menuEl.classList.toggle('open');
      console.log('✅ Menu toggled');
    });
    closeEl.addEventListener('click', () => {
      menuEl.classList.remove('open');
      console.log('✅ Menu closed');
    });
  }

  // === 4. Nav Active State ===
  const navLinksEl = document.querySelectorAll('.menu a');
  navLinksEl.forEach(link => {
    link.addEventListener('click', () => {
      navLinksEl.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // === 5. Responsive Breakpoints ===
  const handleResize = () => {
    const w = window.innerWidth;
    if (w < 768) {
      console.log('📱 Mobile breakpoint active');
      document.body.classList.add('mobile');
    } else {
      document.body.classList.remove('mobile');
    }
  };
  handleResize();
  window.addEventListener('resize', handleResize);

  // === 6. Section Heading Styling ===
  const headings = document.querySelectorAll('h1, h2, h3, h4');
  headings.forEach(h => {
    h.style.textAlign = 'center';
    h.style.textShadow = '1px 1px #00FFFF';
  });

  // === 7. Table Styling ===
  const styleTables = () => {
    const tables = document.querySelectorAll('table');
    tables.forEach(table => {
      table.style.width = 'calc(100% - 0.5in)';
      table.style.marginLeft = '0.25in';
      table.style.marginRight = '0.25in';
      table.style.opacity = '0.7';
      table.style.overflowX = 'auto';
      table.style.overflowY = 'auto';
    });
    console.log('✅ Tables styled');
  };
  styleTables();
  window.addEventListener('resize', styleTables);

  // === 8. Force Scrollbars ===
  document.documentElement.style.overflowX = 'auto';
  document.documentElement.style.overflowY = 'auto';
  document.body.style.overflowX = 'auto';
  document.body.style.overflowY = 'auto';

  // === 9. Buttons ===
  const buttons = document.querySelectorAll('.button');
  buttons.forEach(btn => {
    btn.style.display = 'inline-block';
    btn.style.background = '#8FE9F0';
    btn.style.color = '#000';
    btn.style.border = '2px solid #014d4e';
    btn.style.borderRadius = '6px';
    btn.style.padding = '0.75rem 1.5rem';
    btn.style.cursor = 'pointer';
    btn.style.transition = 'all 0.3s ease';
    btn.addEventListener('mouseover', () => {
      btn.style.background = '#014d4e';
      btn.style.color = '#00FFFF';
    });
    btn.addEventListener('mouseout', () => {
      btn.style.background = '#8FE9F0';
      btn.style.color = '#000';
    });
  });

  // === 10. Divider Lines for Buttons ===
  const buttonWrappers = document.querySelectorAll('.button-wrapper');
  buttonWrappers.forEach(wrapper => {
    wrapper.style.margin = '2rem 0';
    wrapper.style.textAlign = 'center';
    const hr = wrapper.querySelector('hr');
    if (hr) {
      hr.style.margin = '1rem auto';
      hr.style.width = '50%';
      hr.style.border = 'none';
      hr.style.borderTop = '2px solid #8FE9F0';
    }
  });

  // === 11. Footer Styling ===
  const footer = document.querySelector('footer');
  if (footer) {
    footer.style.textAlign = 'center';
    footer.style.padding = '2rem';
    footer.style.color = '#ECEEF1';
  }

  // === 12. Dark Mode Colors ===
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (prefersDark) {
    if (menu) menu.style.background = '#000';
    navLinks.forEach(link => link.style.color = '#fff');
  } else {
    if (menu) menu.style.background = '#fff';
    navLinks.forEach(link => link.style.color = '#000');
  }

  // === 13. Scrollbar Styling ===
  const style = document.createElement('style');
  style.innerHTML = `
    ::-webkit-scrollbar { width: 12px; height: 12px; }
    ::-webkit-scrollbar-track { background: #000; }
    ::-webkit-scrollbar-thumb { background: #8FE9F0; border-radius: 6px; }
    ::-webkit-scrollbar-thumb:hover { background: #00FFFF; }
  `;
  document.head.appendChild(style);

  // === 14. Hover Fix ===
  document.querySelectorAll('.hover').forEach(el => {
    el.addEventListener('mouseleave', () => el.classList.remove('hover'));
  });

  // === 15. Console Marker ===
  console.log('✅ Aza\'raan Dynamic Site Style fully applied.');
  }); // <-- Close DOMContentLoaded handler
})(); // <-- Close IIFE
