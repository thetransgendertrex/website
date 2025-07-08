/**
 * Single Page Nav Plugin
 * Copyright (c) 2014 Chris Wojcik
 * Dual licensed under MIT and GPL.
 * @version 1.2.0
 */
if (typeof Object.create !== "function") {
  Object.create = function (proto) {
    function F() {}
    F.prototype = proto;
    return new F();
  };
}
        function prepareMenuForDesktop() {

            var navbarHeight = 0;
            
            // For screens greater than 767
            if($(window).width() > 767) {

                // target at which the menu bar changes to sticky
                var target = $("#tm-section-1").offset().top - 100;

                // window scroll
                $(window).scroll(function(){

                    if($(this).scrollTop() > target) {                            
                        $(".tm-navbar-row").addClass("sticky");                            
                    }
                    else {
                        $(".tm-navbar-row").removeClass("sticky");
                    }     

                }); 

                navbarHeight = 56;
            }

            // Single Page Nav
            $('#tmNavbar').singlePageNav({
               'currentClass' : "active",
                offset : navbarHeight,
                'filter': ':not(.external)'
            });  
        }  
   
        $(document).ready(function(){                 

            prepareMenuForDesktop();

            // On window resize, prepare menu
            $(window).resize(function(){
                prepareMenuForDesktop();                 
                                  
            });       
        });
(function ($, window, document) {
  "use strict";

  const SinglePageNav = {
    init: function (options, container) {
      this.options = $.extend({}, $.fn.singlePageNav.defaults, options);
      this.container = container;
      this.$container = $(container);
      this.$links = this.options.filter ? this.$container.find("a").filter(this.options.filter) : this.$container.find("a");
      this.$window = $(window);
      this.$htmlbody = $("html, body");
      this.$links.on("click.singlePageNav", $.proxy(this.handleClick, this));
      this.didScroll = false;
      this.checkPosition();
      this.setTimer();
    },

    handleClick: function (e) {
      const link = e.currentTarget;
      const $target = $(link.hash);
      e.preventDefault();

      if ($target.length) {
        this.clearTimer();
        if (typeof this.options.beforeStart === "function") this.options.beforeStart();
        this.setActiveLink(link.hash);
        this.scrollTo($target, () => {
          if (this.options.updateHash && history.pushState) history.pushState(null, null, link.hash);
          this.setTimer();
          if (typeof this.options.onComplete === "function") this.options.onComplete();
        });
      }
    },

    scrollTo: function ($target, callback) {
      const top = this.getCoords($target).top;
      this.$htmlbody.stop().animate(
        { scrollTop: top },
        {
          duration: this.options.speed,
          easing: this.options.easing,
          complete: callback,
        }
      );
    },

    setTimer: function () {
      this.$window.on("scroll.singlePageNav", () => {
        this.didScroll = true;
      });

      this.timer = setInterval(() => {
        if (this.didScroll) {
          this.didScroll = false;
          this.checkPosition();
        }
      }, 250);
    },

    clearTimer: function () {
      clearInterval(this.timer);
      this.$window.off("scroll.singlePageNav");
      this.didScroll = false;
    },

    checkPosition: function () {
      const scrollTop = this.$window.scrollTop();
      const current = this.getCurrentSection(scrollTop);
      this.setActiveLink(current);
    },

    getCoords: function ($el) {
      return {
        top: Math.round($el.offset().top) - this.options.offset,
      };
    },

    setActiveLink: function (hash) {
      const $active = this.$container.find(`a[href$='${hash}']`);
      if (!$active.hasClass(this.options.currentClass)) {
        this.$links.removeClass(this.options.currentClass);
        $active.addClass(this.options.currentClass);
      }
    },

    getCurrentSection: function (scrollTop) {
      let current = this.$links[0].hash;
      this.$links.each((_, link) => {
        const $section = $(link.hash);
        if ($section.length) {
          const coords = this.getCoords($section);
          if (scrollTop >= coords.top - this.options.threshold) {
            current = link.hash;
          }
        }
      });
      return current;
    },
  };

  $.fn.singlePageNav = function (options) {
    return this.each(function () {
      const instance = Object.create(SinglePageNav);
      instance.init(options, this);
    });
  };

  $.fn.singlePageNav.defaults = {
    offset: 0,
    threshold: 120,
    speed: 400,
    currentClass: "current",
    easing: "swing",
    updateHash: false,
    filter: "",
    onComplete: false,
    beforeStart: false,
  };
})(jQuery, window, document);

/* ──────────────✦ === Aza'raan Website Script === ✦────────────── */
(() => {
  'use strict';

  console.log('✨ Aza\'raan Site Script initializing...');

  // Load styles and scripts
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

  // Responsive background
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

  updateBackground();
  window.addEventListener('resize', updateBackground);

  document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');

    // Smooth scroll
    document.querySelectorAll('header nav a, .vertical-buttons a').forEach(link => {
      link.addEventListener('click', e => {
        const href = link.getAttribute('href');
        if (href?.startsWith('#')) {
          e.preventDefault();
          const target = document.querySelector(`section[data-section="${href.slice(1)}"]`);
          if (target) {
            const offset = header?.offsetHeight || 0;
            const targetTop = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: targetTop, behavior: 'smooth' });

            if (link.closest('.vertical-buttons')) {
              document.querySelectorAll('.vertical-buttons a').forEach(l => l.classList.remove('active'));
              link.classList.add('active');
            }
          }
        }
      });
    });

    // Hover styling (should be moved to CSS if possible)
    const navLinkStyles = [
      { href: "#home", color: "#ECEEF1", shadow: "#1a114b" },
      { href: "#lore-navigation", color: "#0075FF", shadow: "#0c4530" },
      { href: "#font-project", color: "#C1FF8A", shadow: "#572a45" },
      { href: "#azara-projects", color: "#FBC96D", shadow: "#014d4e" },
      { href: "#timekeeping", color: "#DCE1E8", shadow: "#A63A2C" },
      { href: "#language-rules", color: "#8FE9F0", shadow: "#7A7C86" },
      { href: "#support", color: "#FBC96D", shadow: "#342c61" },
    ];

    document.querySelectorAll('header nav a').forEach(link => {
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

    // Auto-ID Headings
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

    // Fade-in effects
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

    // Mobile menu
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
