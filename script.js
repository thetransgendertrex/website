// ==UserScript==
// @name         Aza'raan Website Core Loader (Sections Only, Cleaned)
// @namespace    https://github.com/thetransgendertrex/website
// @version      2.2
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

  // ✅ Verify index.html only
  fetch('https://raw.githubusercontent.com/thetransgendertrex/website/main/index.html')
    .then(() => console.log('✅ index.html verified.'))
    .catch(() => console.warn('⚠️ Could not verify index.html.'));

  // ✅ DOM logic
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
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        const targetClass = link.classList[0];
        const sectionId = sectionIds.includes(targetClass) ? targetClass : 'home';
        const section = document.querySelector(`.section.${sectionId}`);

        if (!section) {
          console.error(`❌ Section .${sectionId} not found.`);
          return;
        }

        section.scrollIntoView({ behavior: 'smooth', block: 'start' });

        if (window.innerWidth < 846 && menu) {
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
    }

    // ✅ Force scrollbars
    document.documentElement.style.overflowX = 'auto';
    document.documentElement.style.overflowY = 'auto';
    body.style.overflowX = 'auto';
    body.style.overflowY = 'auto';

    // ✅ Fixed background
    const bg = document.createElement('div');
    bg.id = 'bg-fixed';
    bg.style.cssText = `
      position: fixed;
      top: 0; left: 0; width: 100%; height: 100%;
      background: url('https://raw.githubusercontent.com/thetransgendertrex/website/refs/heads/main/Aza%27ra%20Moonpunk%20Settlement%20(AI%20Generated).JPG.jpg') no-repeat center center fixed;
      background-size: cover;
      z-index: -2;
    `;
    document.body.appendChild(bg);

    // ✅ Overlay
    const overlay = document.createElement('div');
    overlay.id = 'bg-overlay';
    overlay.style.cssText = `
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(0, 0, 0, 0.3);
      z-index: -1;
    `;
    document.body.appendChild(overlay);

    // ✅ Buttons style
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(btn => {
      btn.style.cssText = `
        display: inline-block;
        background: #8FE9F0;
        color: #000;
        border: 2px solid #014d4e;
        border-radius: 6px;
        padding: 0.75rem 1.5rem;
        cursor: pointer;
        transition: all 0.3s ease;
      `;
      btn.addEventListener('mouseover', () => {
        btn.style.background = '#014d4e';
        btn.style.color = '#00FFFF';
      });
      btn.addEventListener('mouseout', () => {
        btn.style.background = '#8FE9F0';
        btn.style.color = '#000';
      });
    });

    // ✅ Button dividers
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

    // ✅ Footer
    const footer = document.querySelector('footer');
    if (footer) {
      footer.style.textAlign = 'center';
      footer.style.padding = '2rem';
      footer.style.color = '#ECEEF1';
    }

    console.log('✅ Aza\'raan Dynamic Site Style fully applied.');
  });

})();
