// ==UserScript==
// @name         Aza'raan Website Full Core Loader (GitHub Only)
// @namespace    https://github.com/thetransgendertrex/website
// @version      1.1
// @description  FULL: Modules, Scrollwheels, Buttons, Nav, Oscillator, Hamburger Menu. Pulls GitHub files only. No local CSS, no donations.json logic.
// @author       William Blake Saville
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
  // ✅ Oscillator + Modules + Buttons
  const audioContext = new (window.AudioContext || window['webkitAudioContext'])();
  let currentOscillator = null;
  let currentGainNode = null;
  let selectedPronunciation = null;

  function initAudioModule() {
    const container = document.createElement('div');
    container.className = 'module audio-module';
    container.innerHTML = `
      <h3>Audio Player</h3>
      <div class="audio-controls">
        <button id="play-btn">Play</button>
        <button id="stop-btn">Stop</button>
        <button id="replay-btn">Replay</button>
        <button id="speed-btn" data-speed="1.0">1.0×</button>
        <select id="mood-selector">
          <option value="normal">Normal</option>
          <option value="happy">Happy</option>
          <option value="sad">Sad</option>
          <option value="excited">Excited</option>
        </select>
      </div>
    `;
    document.body.appendChild(container);
  }

  function setupVoiceOscillator() {
    const emotionTones = {
      normal: { type: 'sine', frequency: 180 },
      happy: { type: 'sine', frequency: 200 },
      sad: { type: 'triangle', frequency: 120 },
      excited: { type: 'sine', frequency: 300 }
    };
    const moodSelector = document.getElementById('mood-selector');
    if (!moodSelector) return;

    moodSelector.addEventListener('change', () => {
      const mood = moodSelector.value;
      if (!emotionTones[mood]) return;

      stopOscillator();
      const { type, frequency } = emotionTones[mood];

      currentOscillator = audioContext.createOscillator();
      currentGainNode = audioContext.createGain();
      currentOscillator.type = type;
      currentOscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
      currentOscillator.connect(currentGainNode);
      currentGainNode.connect(audioContext.destination);
      currentGainNode.gain.setValueAtTime(0.5, audioContext.currentTime);

      if (selectedPronunciation) {
        audioContext.resume().then(() => {
          currentOscillator.start();
          console.log(`Playing: ${selectedPronunciation} (${mood})`);
        });
      }
    });
  }

  function setupAudioControls() {
    document.getElementById('play-btn')?.addEventListener('click', () => {
      if (!selectedPronunciation) {
        alert('Select pronunciation first.');
        return;
      }
      if (currentOscillator) return;
      document.getElementById('mood-selector').dispatchEvent(new Event('change'));
    });

    document.getElementById('stop-btn')?.addEventListener('click', stopOscillator);
    document.getElementById('replay-btn')?.addEventListener('click', () => {
      stopOscillator();
      document.getElementById('mood-selector').dispatchEvent(new Event('change'));
    });
    document.getElementById('speed-btn')?.addEventListener('click', () => {
      if (!currentOscillator) return;
      const btn = document.getElementById('speed-btn');
      let speed = parseFloat(btn.dataset.speed) || 1.0;
      speed = speed >= 2.0 ? 0.5 : speed + 0.5;
      btn.dataset.speed = speed.toFixed(1);
      btn.textContent = `${speed.toFixed(1)}×`;
      const baseFreq = currentOscillator.frequency.value / speed;
      currentOscillator.frequency.setValueAtTime(baseFreq * speed, audioContext.currentTime);
    });
  }

  function stopOscillator() {
    if (currentOscillator) {
      currentOscillator.stop();
      currentOscillator.disconnect();
      currentGainNode.disconnect();
      currentOscillator = null;
      currentGainNode = null;
    }
  }

function setupPronunciationSelection() {
    const cells = document.querySelectorAll('.pronunciation-cell');
    cells.forEach(cell => {
      cell.addEventListener('click', () => {
        cells.forEach(c => c.classList.remove('selected-cell'));
        cell.classList.add('selected-cell');
        selectedPronunciation = cell.textContent.trim();
      });
    });
  }

  // === NAVIGATION & MODULE SCROLL ===
  function initNavRouter() {
  const header = document.querySelector('header.site-header');
  const nav = header?.querySelector('nav');
  const hamburger = header?.querySelector('.hamburger');
  const sections = document.querySelectorAll('main section');

  // Dynamically create nav buttons for each module section
  sections.forEach(sec => {
    const sectionID = sec.id;
    const sectionTitle = sec.querySelector('h2')?.textContent.trim() || sectionID;

    if (!nav?.querySelector(`.nav-button.${sectionID}`)) {
      const btn = document.createElement('button');
      btn.className = `nav-button ${sectionID}`;
      btn.textContent = sectionTitle;

      btn.addEventListener('click', () => {
        // Smooth scroll to the module
        sec.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Add glow effect
        sec.classList.add('module-glow');
        setTimeout(() => {
          sec.classList.remove('module-glow');
        }, 2000); // Glow lasts 2 seconds

        // If on mobile, close hamburger nav
        if (window.innerWidth <= 768 && nav) {
          nav.style.display = 'none';
          header.classList.remove('open');
        }
      });

      nav?.appendChild(btn);
    }
  });

  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      header.classList.toggle('open');
      nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    });
  }

  const currentID = document.body.id || document.querySelector('main section')?.id;
  if (currentID) {
    const activeBtn = document.querySelector(`.nav-button.${currentID}`);
    if (activeBtn) activeBtn.classList.add('active');
  }

  document.querySelectorAll('header.site-header nav .nav-button').forEach(btn => {
    btn.addEventListener('click', () => {
      if (window.innerWidth <= 768 && nav) {
        nav.style.display = 'none';
        header.classList.remove('open');
      }
    });
  });

  if (typeof loadStylesAndHTML === 'function') {
    loadStylesAndHTML();
  }

  sections.forEach(sec => {
    const fnName = `init${camelize(sec.id)}Page`;
    if (typeof window[fnName] === 'function') {
      window[fnName]();
    }
  });

  if (typeof staticPages !== 'undefined' && Array.isArray(staticPages)) {
    staticPages.forEach(id => {
      if (document.querySelector(`#${id}.section-page`)) {
        const fnName = `init${camelize(id)}Page`;
        if (typeof window[fnName] === 'function') {
          window[fnName]();
        }
      }
    });
  }
  // End of IIFE
}

(function() {
  // Call the main logic
  // All code above is now inside this IIFE
  // The rest of the code (window.addEventListener...) remains outside
})();

window.addEventListener('DOMContentLoaded', () => {
  initAudioModule();
  setupVoiceOscillator();
  setupAudioControls();
  setupPronunciationSelection();
  // initHamburgerMenu(); // Removed because it's not defined
  initNavRouter();
  console.log('✅ Full Website Core Loaded.');

  
// 🧩 Module Positions
const modulePositions = [
  { selector: '.module-navigation', top: 400, left: 340, maxWidth: 600 },
  { selector: '.module-lore', top: 550, left: 340, maxWidth: 600 },
  { selector: '.module-timekeeping', top: 740, left: 340, maxWidth: 600 },
  { selector: '.module-book-series', top: 920, left: 340, maxWidth: 600 },
  { selector: '.module-mmorpg', top: 1100, left: 340, maxWidth: 600 },
  { selector: '.module-font-project', top: 1280, left: 340, maxWidth: 600 },
  { selector: '.module-language-rules', top: 400, left: 1000, maxWidth: 300 },
  { selector: '.module-lexicon', top: 620, left: 1000, maxWidth: 300 },
  { selector: '.module-follow', top: 820, left: 1000, maxWidth: 180 },
  { selector: '.module-support', top: 960, left: 1000, maxWidth: 240 },
];

modulePositions.forEach(module => {
  const el = document.querySelector(module.selector);
  if (el) {
    el.style.position = 'absolute';
    el.style.top = `${module.top}px`;
    el.style.left = `${module.left}px`;
    el.style.maxWidth = `${module.maxWidth}px`;
    el.style.overflow = 'auto'; // for scroll wheel
  }
});

// 🧩 Apply scroll wheel styles via <style>
const scrollStyle = `
/* Scrollbar for modules and body */
body, 
.module-navigation,
.module-lore,
.module-timekeeping,
.module-book-series,
.module-mmorpg,
.module-font-project,
.module-language-rules,
.module-lexicon,
.module-follow,
.module-support {
  scrollbar-width: thin;
  scrollbar-color: rgba(3, 144, 144, 0.5) transparent;
}

body::-webkit-scrollbar,
.module-navigation::-webkit-scrollbar,
.module-lore::-webkit-scrollbar,
.module-timekeeping::-webkit-scrollbar,
.module-book-series::-webkit-scrollbar,
.module-mmorpg::-webkit-scrollbar,
.module-font-project::-webkit-scrollbar,
.module-language-rules::-webkit-scrollbar,
.module-lexicon::-webkit-scrollbar,
.module-follow::-webkit-scrollbar,
.module-support::-webkit-scrollbar {
  width: 14px;
  height: 14px;
}

body::-webkit-scrollbar-track,
.module-navigation::-webkit-scrollbar-track,
.module-lore::-webkit-scrollbar-track,
.module-timekeeping::-webkit-scrollbar-track,
.module-book-series::-webkit-scrollbar-track,
.module-mmorpg::-webkit-scrollbar-track,
.module-font-project::-webkit-scrollbar-track,
.module-language-rules::-webkit-scrollbar-track,
.module-lexicon::-webkit-scrollbar-track,
.module-follow::-webkit-scrollbar-track,
.module-support::-webkit-scrollbar-track {
  background: rgba(26, 17, 75, 0.4);
  border-radius: 10px;
}

body::-webkit-scrollbar-thumb,
.module-navigation::-webkit-scrollbar-thumb,
.module-lore::-webkit-scrollbar-thumb,
.module-timekeeping::-webkit-scrollbar-thumb,
.module-book-series::-webkit-scrollbar-thumb,
.module-mmorpg::-webkit-scrollbar-thumb,
.module-font-project::-webkit-scrollbar-thumb,
.module-language-rules::-webkit-scrollbar-thumb,
.module-lexicon::-webkit-scrollbar-thumb,
.module-follow::-webkit-scrollbar-thumb,
.module-support::-webkit-scrollbar-thumb {
  background-color: #A63A2C;
  border-radius: 10px;
  border: 3px solid rgba(4, 13, 18, 0.6);
}

body::-webkit-scrollbar-thumb:hover,
.module-navigation::-webkit-scrollbar-thumb:hover,
.module-lore::-webkit-scrollbar-thumb:hover,
.module-timekeeping::-webkit-scrollbar-thumb:hover,
.module-book-series::-webkit-scrollbar-thumb:hover,
.module-mmorpg::-webkit-scrollbar-thumb:hover,
.module-font-project::-webkit-scrollbar-thumb:hover,
.module-language-rules::-webkit-scrollbar-thumb:hover,
.module-lexicon::-webkit-scrollbar-thumb:hover,
.module-follow::-webkit-scrollbar-thumb:hover,
.module-support::-webkit-scrollbar-thumb:hover {
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
//     if (header?.querySelector('.audio-module')) {
//       header.querySelector('.audio-module').style.width = '100%';
//       header.querySelector('.audio-module').style.right = '0';
//     }
//   } else if (width <= 1024) {
//     if (header) header.style.paddingRight = '200px';
//     if (header?.querySelector('.hamburger')) {
//       header.querySelector('.hamburger').style.width = '18px';
//       header.querySelector('.hamburger').style.height = '18px';
//     }
//     if (header?.querySelector('.audio-module')) {
//       header.querySelector('.audio-module').style.width = '240px';
//     }
//     modulePositions.forEach(module => {
//       const el = document.querySelector(module.selector);
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
//     if (header?.querySelector('.audio-module')) {
//       header.querySelector('.audio-module').style.width = '300px';
//       header.querySelector('.audio-module').style.right = '24px';
//     }
//     modulePositions.forEach(module => {
// ✅ Scrollwheels handled by CSS from style.css
//         el.style.left = `${module.left}px`;
//       }
//     });
//   }
  // ✅ Scrollwheels handled by CSS from style.css
});
