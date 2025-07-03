// ✅ Aza'ra Donations — Unified for azara-trademarked-projects.com

export function initDonations() {
  console.log("✅ Aza'ra Donations script loaded.");

  // ✅ Load site-wide CSS (optional, skip if already linked in <head>)
  const styleLink = document.createElement('link');
  styleLink.rel = 'stylesheet';
  styleLink.href = 'https://raw.githubusercontent.com/thetransgendertrex/website/main/style.css';
  styleLink.onload = () => console.log('✅ style.css loaded (GitHub).');
  styleLink.onerror = () => console.error('❌ style.css failed to load.');
  document.head.appendChild(styleLink);

  // ✅ DOM elements
  const amountInput = document.getElementById('donation-amount');
  const donateBtn = document.getElementById('donate-btn');
  const statusEl = document.getElementById('donation-status');
  const intervalButtons = document.querySelectorAll('.interval-btn');

  let selectedInterval = 'one_time'; // default

  if (!donateBtn || !amountInput || intervalButtons.length === 0) {
    console.warn('⚠️ Missing donation elements.');
    return;
  }

  // ✅ Interval button logic
  intervalButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove .active from all
      intervalButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedInterval = btn.dataset.interval;
      console.log(`✅ Interval selected: ${selectedInterval}`);
    });
  });

  // ✅ Default active on load
  intervalButtons[0].classList.add('active');

  // ✅ Donation click
  donateBtn.addEventListener('click', () => {
    const amount = parseFloat(amountInput.value);

    if (isNaN(amount) || amount < 1) {
      alert('Minimum donation is $1.');
      return;
    }

    donateBtn.disabled = true;
    setStatus('Redirecting to secure Stripe payment...');

    if (selectedInterval === 'one_time') {
      // ✅ One-time link
      window.location.href = 'https://buy.stripe.com/8x24gz18oaCEgIc7kg0x200';
    } else {
      // ✅ Subscription link (same for all recurring)
      window.location.href = 'https://donate.stripe.com/cNifZhdVa268ajOeMI0x201';
    }
  });

  function setStatus(msg) {
    statusEl.textContent = msg;
  }
}

// ✅ Auto-run
initDonations();

