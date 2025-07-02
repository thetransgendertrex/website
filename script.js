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

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      body.classList.add('dark-mode');
      console.log('🌙 Dark mode class added.');
    } else {
      console.log('☀️ Light mode detected.');
    }

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
  });
})();

 
