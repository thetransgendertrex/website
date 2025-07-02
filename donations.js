// ✅ Aza'ra Donations — Unified for azara-trademarked-projects.com

export function initDonations() {
  // ✅ Load style.css from GitHub for styling
  const styleLink = document.createElement('link');
  styleLink.rel = 'stylesheet';
  styleLink.href = 'https://raw.githubusercontent.com/thetransgendertrex/website/main/style.css';
  styleLink.onload = () => console.log('✅ style.css loaded (GitHub).');
  styleLink.onerror = () => console.error('❌ style.css failed to load.');
  document.head.appendChild(styleLink);

  // ✅ Pull donations.html content from GitHub
  fetch('https://raw.githubusercontent.com/thetransgendertrex/website/main/donations.html')
    .then(res => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.text();
    })
    .then(html => {
      const mount = document.getElementById('donations-module-mount');
      if (mount) {
        mount.innerHTML = html;
        console.log('✅ donations.html loaded into placeholder.');
        setupDonationsLogic();
      } else {
        console.warn('⚠️ donations-module-mount not found.');
      }
    })
    .catch(err => console.error('❌ Failed to load donations.html:', err));

  // ✅ Pull index.html (optional verify)
  fetch('https://raw.githubusercontent.com/thetransgendertrex/website/main/index.html')
    .then(res => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.text();
    })
    .then(() => console.log('✅ index.html verified (GitHub).'))
    .catch(err => console.warn('⚠️ Could not verify index.html:', err));

  function setupDonationsLogic() {
    const donateBtn = document.getElementById('donate-btn');

    if (!donateBtn) {
      console.warn('⚠️ donate-btn not found.');
      return;
    }

    donateBtn.addEventListener('click', () => {
      const amount = parseFloat(document.getElementById('donation-amount').value);
      const frequency = document.getElementById('donation-frequency').value;

      if (amount < 1) {
        alert('Minimum donation is $1.');
        return;
      }

      donateBtn.disabled = true;
      setStatus('Redirecting to secure Stripe payment...');

      // ✅ Use your published Stripe Checkout link
      if (frequency === 'one-time') {
        window.location.href = 'https://buy.stripe.com/8x24gz18oaCEgIc7kg0x200';
      } else {
        window.location.href = 'https://buy.stripe.com/test_fZu3cx0GUfbw9jGaXp4wM01';
      }
    });

    function setStatus(msg) {
      document.getElementById('donation-status').textContent = msg;
    }
  }
}

// ✅ Immediately initialize if needed:
initDonations();
