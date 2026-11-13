const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('#site-nav');

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    siteNav.classList.toggle('is-open', !isOpen);
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      siteNav.classList.remove('is-open');
    });
  });
}

const header = document.querySelector('[data-header]');
if (header) {
  const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();
}

const eventView = document.querySelector('#education-outreach');
const homeSections = [...document.querySelectorAll('main > section:not(#education-outreach)')];

const updateExperience = () => {
  const showEvent = window.location.hash === '#education-outreach';
  document.body.classList.toggle('event-page-active', showEvent);
  if (eventView) {
    eventView.hidden = !showEvent;
    eventView.setAttribute('aria-hidden', String(!showEvent));
  }
  homeSections.forEach((section) => { section.hidden = showEvent; });
  document.title = showEvent
    ? 'Education & Outreach | Center for Sustainable Biotechnology'
    : 'Center for Sustainable Biotechnology | Stanislaus State';
  if (showEvent) window.scrollTo({ top: 0, behavior: 'auto' });
};

window.addEventListener('hashchange', updateExperience);
updateExperience();
