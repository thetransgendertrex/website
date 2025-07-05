console.log("✅ Aza'ra Donations script loaded.");

// ✅ Initialize donations logic
function initDonations() {
  console.log("✅ Aza'ra Donations initialized.");

  // ✅ Dynamically load site-wide CSS if needed
  const styleLink = document.createElement('link');
  styleLink.rel = 'stylesheet';
  styleLink.href = 'https://raw.githubusercontent.com/thetransgendertrex/website/main/style.css';
  styleLink.onload = () => console.log('✅ style.css loaded.');
  styleLink.onerror = () => console.error('❌ style.css failed to load.');
  document.head.appendChild(styleLink);

  // ✅ Grab DOM elements
  const amountInput = document.querySelector('.section.support #donation-amount');
  const donateBtn = document.querySelector('.section.support #donate-btn');
  const statusEl = document.querySelector('.section.support #donation-status');
  const intervalButtons = document.querySelectorAll('.section.support .interval-btn');

  let selectedInterval = 'one_time'; // Default interval

  // ✅ Check for essential elements
  if (!amountInput || !donateBtn || !statusEl || intervalButtons.length === 0) {
    console.warn('⚠️ Missing required donation elements.');
    return;
  }

  // ✅ Interval buttons logic
  intervalButtons.forEach(button => {
    button.addEventListener('click', () => {
      intervalButtons.forEach(b => b.classList.remove('active'));
      button.classList.add('active');
      selectedInterval = button.dataset.interval || 'one_time';
      console.log(`✅ Selected interval: ${selectedInterval}`);
    });
  });

  // ✅ Make sure first interval is active on load
  intervalButtons[0].classList.add('active');

  // ✅ Handle donate button click
  donateBtn.addEventListener('click', () => {
    const amount = parseFloat(amountInput.value);

    if (isNaN(amount) || amount < 1) {
      alert('⚠️ Minimum donation is $1.');
      return;
    }

    donateBtn.disabled = true;
    updateStatus('Redirecting to secure Stripe checkout...');

    // ✅ Replace with your actual Stripe URLs
    const stripeURL = selectedInterval === 'one_time'
      ? 'https://buy.stripe.com/8x24gz18oaCEgIc7kg0x200'
      : 'https://donate.stripe.com/cNifZhdVa268ajOeMI0x201';

    window.location.href = stripeURL;
  });

  // ✅ Helper to update donation status
  function updateStatus(message) {
    statusEl.textContent = message;
  }
}

// ✅ Init on DOM ready
document.addEventListener('DOMContentLoaded', initDonations);
