/* ──────────────✦ === Aza'raan Website Script === ✦────────────── */
// ==UserScript==
// @name         Aza'raan Website Script
// @namespace    https://github.com/thetransgendertrex/website
// @version      1.3
// @description  Core interactive behavior for Aza'raan's Trademarked Projects
// @match        https://www.azara-trademarked-projects.com/*
// ==/UserScript==

(() => {
  'use strict';

  console.log('✨ Aza\'raan Site Script initializing...');

  /* ──────────────✦ Load External Assets ✦────────────── */
  function loadStyle(href) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.onload = () => console.log(`✅ ${href} loaded.`);
    link.onerror = () => console.error(`❌ Failed to load ${href}.`);
    document.head.appendChild(link);
  }

  async function loadScript(url) {
    try {
      const res = await fetch(url);
      const code = await res.text();
      const script = document.createElement('script');
      script.textContent = code;
      document.head.appendChild(script);
      console.log(`✅ ${url} loaded.`);
    } catch (err) {
      console.error(`❌ Failed to load ${url}:`, err);
    }
  }

  loadStyle('https://raw.githubusercontent.com/thetransgendertrex/website/main/style.css');
  loadScript('https://raw.githubusercontent.com/thetransgendertrex/website/main/override.js');
  loadScript('https://raw.githubusercontent.com/thetransgendertrex/website/main/donations.js');

  fetch('https://raw.githubusercontent.com/thetransgendertrex/website/main/index.html')
    .then(() => console.log('✅ index.html verified.'))
    .catch(() => console.warn('⚠️ Could not verify index.html.'));

  /* ──────────────✦ Responsive Background ✦────────────── */
  (function () {
    const backgrounds = [
      {
        min: 0,
        max: 480,
        url: "https://raw.githubusercontent.com/thetransgendertrex/website/refs/heads/main/moonpunk-AI-small_mobile.jpg"
      },
      {
        min: 481,
        max: 768,
        url: "https://raw.githubusercontent.com/thetransgendertrex/website/refs/heads/main/moonpunk-AI-mobile_tablet.jpg"
      },
      {
        min: 769,
        max: 1024,
        url: "https://raw.githubusercontent.com/thetransgendertrex/website/refs/heads/main/moonpunk-AI-tablet_small_desktop.jpg"
      },
      {
        min: 1025,
        max: 1440,
        url: "https://raw.githubusercontent.com/thetransgendertrex/website/refs/heads/main/moonpunk-AI-large_tablet_medium_desktop.jpg"
      },
      {
        min: 1441,
        max: Infinity,
        url: "https://raw.githubusercontent.com/thetransgendertrex/website/refs/heads/main/moonpunk-AI-large_desktop.jpg"
      }
    ];

    function updateBackground() {
      const width = window.innerWidth;
      const match = backgrounds.find(b => width >= b.min && width <= b.max);
      if (match) {
        document.body.style.setProperty('--bg-url', `url("${match.url}")`);
      }
    }

    updateBackground();
    window.addEventListener('resize', updateBackground);
  })();

  document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');

    // Smooth scroll with header offset for nav links
    document.querySelectorAll('header nav a').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const target = document.querySelector(`section[data-section="${targetId}"]`);
        if (target) {
          const headerOffset = header.offsetHeight;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });

    // Nav link hover styles
    const navLinkStyles = [
      { href: '#home', color: '#ECEEF1', shadow: '#1a114b' },
      { href: '#lore', color: '#0075FF', shadow: '#0c4530' },
      { href: '#navigation', color: '#C5ECFF', shadow: '#342c61' },
      { href: '#font-project', color: '#C1FF8A', shadow: '#572a45' },
      { href: '#mmorpg', color: '#FBC96D', shadow: '#014d4e' },
      { href: '#book-series', color: '#D88EBA', shadow: '#78581f' },
      { href: '#timekeeping', color: '#DCE1E8', shadow: '#A63A2C' },
      { href: '#language-rules', color: '#8FE9F0', shadow: '#7A7C86' },
      { href: '#lexicon', color: '#7A7C86', shadow: '#1a114b' },
      { href: '#support', color: '#FBC96D', shadow: '#342c61' },
    ];

    document.querySelectorAll('header nav a').forEach(link => {
      const navStyle = navLinkStyles.find(item => item.href === link.getAttribute('href'));
      if (navStyle) {
        link.addEventListener('mouseenter', () => {
          link.style.color = navStyle.color;
          link.style.textShadow = `-1px -1px 0 ${navStyle.shadow}, 1px -1px 0 ${navStyle.shadow}, -1px 1px 0 ${navStyle.shadow}, 1px 1px 0 ${navStyle.shadow}`;
        });
        link.addEventListener('mouseleave', () => {
          link.style.color = '';
          link.style.textShadow = '';
        });
      }
    });

    // Auto-ID Headings
    document.querySelectorAll('h1, h2, h3, h4').forEach((heading, i) => {
      if (!heading.id) {
        const slug = heading.textContent.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');
        heading.id = `${slug}-${i}`;
      }
    });

    // Wrap tables for styling
    document.querySelectorAll('table').forEach(table => {
      table.setAttribute('role', 'table');
      if (!table.parentElement.classList.contains('table-wrapper')) {
        const wrapper = document.createElement('div');
        wrapper.className = 'table-wrapper';
        table.parentNode.insertBefore(wrapper, table);
        wrapper.appendChild(table);
      }
    });

    // Fade-in dividers
    const dividerObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.transition = 'opacity 1s ease-out';
          entry.target.style.opacity = 1;
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section-divider').forEach(divider => {
      divider.style.opacity = 0;
      dividerObserver.observe(divider);
    });

    // Fade-in sections
    const sections = document.querySelectorAll('section.section[data-section]');
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
          sectionObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    sections.forEach(section => {
      section.style.opacity = 0;
      section.style.transform = 'translateY(30px)';
      sectionObserver.observe(section);
    });

    // Smooth scroll for vertical buttons
    document.querySelectorAll('.vertical-buttons a').forEach(link => {
      link.addEventListener('click', e => {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
          e.preventDefault();
          const target = document.querySelector(`section[data-section="${href.slice(1)}"]`);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            document.querySelectorAll('.vertical-buttons a').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
          }
        }
      });
    });

    // Mobile menu toggle
    const toggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const close = document.getElementById('menu-close');

    toggle?.addEventListener('click', () => {
      menu?.classList.toggle('open');
    });

    close?.addEventListener('click', () => {
      menu?.classList.remove('open');
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth < 846) {
        document.querySelectorAll('.main-menu a').forEach(link => {
          link.addEventListener('click', () => {
            menu?.classList.remove('open');
          });
        });
      }
    });
  });

})();
