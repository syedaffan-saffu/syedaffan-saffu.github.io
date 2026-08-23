const header = document.querySelector('#site-header');
const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');
const allNavLinks = [...document.querySelectorAll('.nav-link')];

function closeMenu() {
  mobileNav.hidden = true;
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open menu');
  document.body.classList.remove('menu-open');
  menuButton.innerHTML = '<i data-lucide="menu" aria-hidden="true"></i>';
  window.lucide?.createIcons();
}

menuButton.addEventListener('click', () => {
  const opening = menuButton.getAttribute('aria-expanded') === 'false';
  mobileNav.hidden = !opening;
  mobileNav.style.display = opening ? 'flex' : '';
  menuButton.setAttribute('aria-expanded', String(opening));
  menuButton.setAttribute('aria-label', opening ? 'Close menu' : 'Open menu');
  document.body.classList.toggle('menu-open', opening);
  menuButton.innerHTML = `<i data-lucide="${opening ? 'x' : 'menu'}" aria-hidden="true"></i>`;
  window.lucide?.createIcons();
});

allNavLinks.forEach(link => link.addEventListener('click', closeMenu));

const sections = [...document.querySelectorAll('main section[id]')];
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    allNavLinks.forEach(link => link.classList.toggle('active', link.hash === `#${entry.target.id}`));
  });
}, { rootMargin: '-25% 0px -65% 0px' });
sections.forEach(section => sectionObserver.observe(section));

document.querySelectorAll('.timeline-trigger').forEach(trigger => {
  trigger.addEventListener('click', () => {
    const item = trigger.closest('.timeline-item');
    const willOpen = !item.classList.contains('open');
    document.querySelectorAll('.timeline-item').forEach(row => {
      row.classList.remove('open');
      row.querySelector('.timeline-trigger').setAttribute('aria-expanded', 'false');
    });
    if (willOpen) {
      item.classList.add('open');
      trigger.setAttribute('aria-expanded', 'true');
    }
  });
});

document.querySelectorAll('.filter').forEach(filter => {
  filter.addEventListener('click', () => {
    const category = filter.dataset.filter;
    document.querySelectorAll('.filter').forEach(button => {
      const selected = button === filter;
      button.classList.toggle('active', selected);
      button.setAttribute('aria-pressed', String(selected));
    });
    document.querySelectorAll('.project-card').forEach(card => {
      card.hidden = category !== 'all' && !card.dataset.category.split(' ').includes(category);
    });
  });
});

document.querySelector('.copy-email').addEventListener('click', async event => {
  const button = event.currentTarget;
  try {
    await navigator.clipboard.writeText(button.dataset.email);
    button.querySelector('span').textContent = 'Email copied';
    setTimeout(() => { button.querySelector('span').textContent = 'Copy email'; }, 1800);
  } catch {
    window.location.href = `mailto:${button.dataset.email}`;
  }
});

window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 12), { passive: true });
window.addEventListener('resize', () => { if (window.innerWidth > 900) closeMenu(); });
document.querySelector('#year').textContent = new Date().getFullYear();
window.addEventListener('DOMContentLoaded', () => window.lucide?.createIcons());
