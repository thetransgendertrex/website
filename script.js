/* ──────────────✦ === Aza'raan Website Script === ✦────────────── */
// @name         Aza'raan Website Script
// @namespace    https://github.com/thetransgendertrex/website
// @version      1.2
// @description  Core interactive behavior for Aza'raan's Trademarked Projects
// @match        https://www.azara-trademarked-projects.com/*

(function () {
  'use strict';

  console.log('✨ Aza\'raan Site Script initializing...');

  /** Load style.css dynamically */
  const styleLink = document.createElement('link');
  styleLink.rel = 'stylesheet';
  styleLink.href = 'https://raw.githubusercontent.com/thetransgendertrex/website/main/style.css';
  styleLink.onload = () => console.log('✅ style.css loaded.');
  styleLink.onerror = () => console.error('❌ Failed to load style.css.');
  document.head.appendChild(styleLink);

  /** Load override.js dynamically */
  fetch('https://raw.githubusercontent.com/thetransgendertrex/website/main/override.js')
    .then(res => res.text())
    .then(code => {
      const script = document.createElement('script');
      script.textContent = code;
      document.head.appendChild(script);
      console.log('✅ override.js loaded.');
    })
    .catch(err => console.error('❌ Failed to load override.js:', err));

  /** Load donations.js dynamically */
  fetch('https://raw.githubusercontent.com/thetransgendertrex/website/main/donations.js')
    .then(res => res.text())
    .then(code => {
      const script = document.createElement('script');
      script.textContent = code;
      document.head.appendChild(script);
      console.log('✅ donations.js loaded.');
    })
    .catch(err => console.error('❌ Failed to load donations.js:', err));

  /** Verify index.html presence */
  fetch('https://raw.githubusercontent.com/thetransgendertrex/website/main/index.html')
    .then(() => console.log('✅ index.html verified.'))
    .catch(() => console.warn('⚠️ Could not verify index.html.'));

  document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    const headerHeight = header ? header.offsetHeight : 0;

    // Select all nav links with hashes for smooth scrolling
    const navLinksWithHashes = document.querySelectorAll('header nav a[href^="#"]');

    navLinksWithHashes.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetEl = document.getElementById(targetId);

        if (targetEl) {
          const elementPosition = targetEl.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });

    // Add hover effects to all nav links
    const navLinks = document.querySelectorAll('header nav a');

    navLinks.forEach(link => {
      link.addEventListener('mouseenter', () => {
        const href = link.getAttribute('href');

        switch (href) {
          case '#home':
            link.style.color = '#FBC96D'; // Emberlight Gold
            link.style.textShadow = '-1px -1px 0 #342c61, 1px -1px 0 #342c61, -1px 1px 0 #342c61, 1px 1px 0 #342c61';
            break;
          case '#lore':
            link.style.color = '#C5ECFF'; // Crystalline Ice
            link.style.textShadow = '-1px 1px 0 #A63A2C, 1px -1px 0 #A63A2C, -1px 1px 0 #A63A2C, 1px 1px 0 #A63A2C';
            break;
          case '#navigation':
            link.style.color = '#DCE1E8'; // Moonstone Silver
            link.style.textShadow = '-1px 1px 0 #0075FF, 1px -1px 0 #0075FF, -1px 1px 0 #0075FF, 1px 1px 0 #0075FF';
            break;
          case '#font-project':
            link.style.color = '#8FE9F0'; // Dreamlight Cyan
            link.style.textShadow = '-1px 1px 0 #0c4530, 1px -1px 0 #0c4530, -1px 1px 0 #0c4530, 1px 1px 0 #0c4530';
            break;
          case '#mmorpg':
            link.style.color = '#C5ECFF'; // Crystalline Ice
            link.style.textShadow = '-1px 1px 0 #572a45, 1px -1px 0 #572a45, -1px 1px 0 #572a45, 1px 1px 0 #572a45';
            break;
          case '#book-series':
            link.style.color = '#D88EBA'; // Leyline Rose
            link.style.textShadow = '-1px 1px 0 #2DC5B4, 1px -1px 0 #2DC5B4, -1px 1px 0 #2DC5B4, 1px 1px 0 #2DC5B4';
            break;
          case '#timekeeping':
            link.style.color = '#8FE9F0'; // Dreamlight Cyan
            link.style.textShadow = '-1px 1px 0 #78581f, 1px -1px 0 #78581f, -1px 1px 0 #78581f, 1px 1px 0 #78581f';
            break;
          case '#language-rules':
            link.style.color = '#C1FF8A'; // Verdant Glow
            link.style.textShadow = '-1px 1px 0 #7A7C86, 1px -1px 0 #7A7C86, -1px 1px 0 #7A7C86, 1px 1px 0 #7A7C86';
            break;
          case '#lexicon':
            link.style.color = '#FBC96D'; // Emberlight Gold
            link.style.textShadow = '-1px 1px 0 #342c61, 1px -1px 0 #342c61, -1px 1px 0 #342c61, 1px 1px 0 #342c61';
            break;
          case '#support':
            link.style.color = '#C5ECFF'; // Crystalline Ice
            link.style.textShadow = '-1px 1px 0 #0c4530, 1px -1px 0 #0c4530, -1px 1px 0 #0c4530, 1px 1px 0 #0c4530';
            break;
        }
      });

      link.addEventListener('mouseleave', () => {
        // Reset to default link style
        link.style.color = 'black';
        link.style.textShadow = 'none';
      });
    });
  });

  (function () {
    const backgrounds = [
      {
        min: 0,
        max: 480,
        url: "https://raw.githubusercontent.com/thetransgendertrex/website/main/Aza'ra%20Moonpunk%20Settlement%20(AI%20Generated)%20small_mobile.jpg"
      },
      {
        min: 481,
        max: 768,
        url: "https://raw.githubusercontent.com/thetransgendertrex/website/main/Aza'ra%20Moonpunk%20Settlement%20(AI%20Generated)%20mobile_tablet.jpg"
      },
      {
        min: 769,
        max: 1024,
        url: "https://raw.githubusercontent.com/thetransgendertrex/website/main/Aza'ra%20Moonpunk%20Settlement%20(AI%20Generated)%20tablet_small_desktop.jpg"
      },
      {
        min: 1025,
        max: 1440,
        url: "https://raw.githubusercontent.com/thetransgendertrex/website/main/Aza'ra%20Moonpunk%20Settlement%20(AI%20Generated)%20large_tablet_medium_desktop.jpg"
      },
      {
        min: 1441,
        max: Infinity,
        url: "https://raw.githubusercontent.com/thetransgendertrex/website/main/Aza'ra%20Moonpunk%20Settlement%20(AI%20Generated)%20large%20desktop.jpg"
      }
    ];

    function updateBackground() {
      const width = window.innerWidth;
      let bgURL = backgrounds.find(b => width >= b.min && width <= b.max)?.url;
      if (bgURL) {
        document.body.style.setProperty('--bg-url', `url("${bgURL}")`);
      }
    }

    window.addEventListener('resize', updateBackground);
    window.addEventListener('DOMContentLoaded', updateBackground);
  })();

  /* ──────────────✦ Heading, Table, Divider Helper Script ✦────────────── */

  document.addEventListener('DOMContentLoaded', () => {
    // ✦ Auto-generate IDs for headings (useful for linking)
    const headings = document.querySelectorAll('h1, h2, h3, h4');
    headings.forEach((heading, index) => {
      if (!heading.id) {
        const slug = heading.textContent.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');
        heading.id = `${slug}-${index}`;
      }
    });

    // ✦ Add basic table accessibility roles + responsive wrapper if needed
    const tables = document.querySelectorAll('table');
    tables.forEach((table) => {
      table.setAttribute('role', 'table');
      if (!table.parentElement.classList.contains('table-wrapper')) {
        const wrapper = document.createElement('div');
        wrapper.className = 'table-wrapper';
        table.parentNode.insertBefore(wrapper, table);
        wrapper.appendChild(table);
      }
    });

    // ✦ Enhance dividers: fade in on scroll (simple example)
    const dividers = document.querySelectorAll('.section-divider');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.transition = 'opacity 1s ease-out';
          entry.target.style.opacity = 1;
        }
      });
    }, {
      threshold: 0.1
    });

    dividers.forEach(divider => {
      divider.style.opacity = 0;
      observer.observe(divider);
    });
  });

  // sections.js

  document.addEventListener("DOMContentLoaded", () => {
    // Smooth fade-in effect for sections
    const sections = document.querySelectorAll('.section.home, .section.font-project');

    sections.forEach(section => {
      section.style.opacity = 0;
      section.style.transform = 'translateY(30px)';
    });

    const fadeInOnScroll = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(fadeInOnScroll, {
      threshold: 0.1
    });

    sections.forEach(section => {
      observer.observe(section);
    });

    // Smooth scroll for vertical buttons
    const smoothLinks = document.querySelectorAll('.vertical-buttons a');

    smoothLinks.forEach(link => {
      link.addEventListener('click', e => {
        const href = link.getAttribute('href');

        // Only handle in-page anchor links
        if (href && href.startsWith("#")) {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
    });

    // Optional: add active class on click if you want to style clicked buttons
    smoothLinks.forEach(link => {
      link.addEventListener('click', () => {
        smoothLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      });
    });
  });

})();
