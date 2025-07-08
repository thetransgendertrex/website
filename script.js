/* ──────────────✦ Aza'raan Unified Site Script ✦────────────── */
(() => {
  'use strict';

  console.log('✨ Aza\'raan Site Script initializing...');

  // Load remote override script
  fetch('https://raw.githubusercontent.com/thetransgendertrex/website/main/override.js')
    .then(res => {
      if (!res.ok) throw new Error(`HTTP ${res.status}: Unable to load override.js`);
      return res.text();
    })
    .then(code => {
      const script = document.createElement('script');
      script.textContent = code;
      document.head.appendChild(script);
    })
    .catch(err => {
      console.error('Failed to load Aza\'raan override script:', err);
      const errorNotice = document.createElement('p');
      errorNotice.style.color = 'red';
      errorNotice.textContent = '⚠️ Failed to load override script. Check console for details.';
      document.body.appendChild(errorNotice);
    });

  // Load additional assets
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
  loadScript('https://raw.githubusercontent.com/thetransgendertrex/website/main/donations.js');

  // Responsive background handling
  const backgrounds = [
    { min: 0, max: 480, url: "https://raw.githubusercontent.com/thetransgendertrex/website/refs/heads/main/moonpunk-AI-small_mobile.jpg" },
    { min: 481, max: 768, url: "https://raw.githubusercontent.com/thetransgendertrex/website/refs/heads/main/moonpunk-AI-mobile_tablet.jpg" },
    { min: 769, max: 1024, url: "https://raw.githubusercontent.com/thetransgendertrex/website/refs/heads/main/moonpunk-AI-tablet_small_desktop.jpg" },
    { min: 1025, max: 1440, url: "https://raw.githubusercontent.com/thetransgendertrex/website/refs/heads/main/moonpunk-AI-large_tablet_medium_desktop.jpg" },
    { min: 1441, max: Infinity, url: "https://raw.githubusercontent.com/thetransgendertrex/website/refs/heads/main/moonpunk-AI-large_desktop.jpg" }
  ];

  function updateBackground() {
    const width = window.innerWidth;
    const match = backgrounds.find(b => width >= b.min && width <= b.max);
    if (match) {
      document.body.style.setProperty('--bg-url', `url("${match.url}")`);
    }
  }

  window.addEventListener('resize', updateBackground);
  updateBackground();

  document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');

    // Smooth scroll on nav and button clicks
    document.querySelectorAll('nav a, .vertical-buttons a').forEach(link => {
      link.addEventListener('click', e => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const sectionName = href.slice(1);
          const target = document.querySelector(`section[data-section="${sectionName}"]`);
          if (target) {
            const offset = header ? header.offsetHeight : 0;
            const targetTop = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: targetTop, behavior: 'smooth' });

            // Active nav state update
            document.querySelectorAll('nav a').forEach(l => l.classList.remove('current'));
            link.classList.add('current');

            // Active button state
            if (link.closest('.vertical-buttons')) {
              document.querySelectorAll('.vertical-buttons a').forEach(l => l.classList.remove('active'));
              link.classList.add('active');
            }
          }
        }
      });
    });

    // Hover color/text-shadow effects for nav links
    const navLinkStyles = [
      { href: "#home", color: "#ECEEF1", shadow: "#1a114b" },
      { href: "#lore", color: "#0075FF", shadow: "#0c4530" },
      { href: "#font-project", color: "#C1FF8A", shadow: "#572a45" },
      { href: "#azara-projects", color: "#FBC96D", shadow: "#014d4e" },
      { href: "#book-series", color: "#FBC96D", shadow: "#3b2d61" },
      { href: "#timekeeping", color: "#DCE1E8", shadow: "#A63A2C" },
      { href: "#language-rules", color: "#8FE9F0", shadow: "#7A7C86" },
      { href: "#support", color: "#FBC96D", shadow: "#342c61" }
    ];

    document.querySelectorAll('nav a').forEach(link => {
      const style = navLinkStyles.find(item => item.href === link.getAttribute('href'));
      if (style) {
        link.addEventListener('mouseenter', () => {
          link.style.color = style.color;
          link.style.textShadow = `-1px -1px 0 ${style.shadow}, 1px -1px 0 ${style.shadow}, -1px 1px 0 ${style.shadow}, 1px 1px 0 ${style.shadow}`;
        });
        link.addEventListener('mouseleave', () => {
          link.style.color = '';
          link.style.textShadow = '';
        });
      }
    });

    // Auto-generate IDs for headings
    document.querySelectorAll('h1, h2, h3, h4').forEach((heading, i) => {
      if (!heading.id) {
        const slug = heading.textContent.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');
        heading.id = `${slug}-${i}`;
      }
    });

    // Wrap tables
    document.querySelectorAll('table').forEach(table => {
      table.setAttribute('role', 'table');
      if (!table.parentElement.classList.contains('table-wrapper')) {
        const wrapper = document.createElement('div');
        wrapper.className = 'table-wrapper';
        table.parentNode.insertBefore(wrapper, table);
        wrapper.appendChild(table);
      }
    });

    // Section fade-in observer
    const fadeInObserver = (selector, props) => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            Object.assign(entry.target.style, props);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll(selector).forEach(el => {
        Object.assign(el.style, { opacity: 0, ...('transform' in props ? { transform: 'translateY(30px)' } : {}) });
        observer.observe(el);
      });
    };

    fadeInObserver('.section-divider', { opacity: 1, transition: 'opacity 1s ease-out' });
    fadeInObserver('section.section[data-section]', {
      opacity: 1,
      transform: 'translateY(0)',
      transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
    });

    // Mobile menu toggle
    const toggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const close = document.getElementById('menu-close');

    toggle?.addEventListener('click', () => menu?.classList.toggle('open'));
    close?.addEventListener('click', () => menu?.classList.remove('open'));

    window.addEventListener('resize', () => {
      if (window.innerWidth < 846) {
        document.querySelectorAll('.main-menu a').forEach(link => {
          link.addEventListener('click', () => menu?.classList.remove('open'));
        });
      }
    });

  });

})();
// End of Aza'raan Unified Site Script
