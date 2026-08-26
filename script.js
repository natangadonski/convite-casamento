const wrap = document.getElementById('scrollWrap');
const seal = document.getElementById('sealZone');
const guestName = document.getElementById('guestName');

const guestFromUrl = new URLSearchParams(window.location.search).get('para');

if (guestName && guestFromUrl && guestFromUrl.trim()) {
  guestName.textContent = guestFromUrl.trim();
}

function openScroll() {
  if (wrap.classList.contains('open')) return;
  wrap.classList.add('open');
  seal.classList.add('cracked');
}

seal.addEventListener('click', openScroll);
seal.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    openScroll();
  }
});
