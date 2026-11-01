/* Bootstrap owns the navigation, slide transitions, gallery and scrollspy.
   Regroup the nine game cards when the number of visible columns changes. */
(() => {
  'use strict';

  const carouselElement = document.getElementById('games-carousel');
  const carouselInner = carouselElement.querySelector('.carousel-inner');
  const cards = [...carouselElement.querySelectorAll('.game-card')];
  const gallery = document.querySelector('#all-games .all-games-grid');
  let visibleCount = 0;

  cards.forEach(card => {
    const column = document.createElement('div');
    column.className = 'col';
    const copy = card.cloneNode(true);
    copy.removeAttribute('id');
    column.append(copy);
    gallery.append(column);
  });

  function arrangeGames() {
    const count = window.matchMedia('(min-width: 1024px)').matches ? 3
      : window.matchMedia('(min-width: 768px)').matches ? 2 : 1;
    if (count === visibleCount) return;
    if (carouselInner.querySelector('.carousel-item-next, .carousel-item-prev')) {
      carouselElement.addEventListener('slid.bs.carousel', arrangeGames, {once: true});
      return;
    }
    const currentCard = carouselInner.querySelector('.active .game-card');
    const currentIndex = Math.max(0, cards.indexOf(currentCard));
    bootstrap.Carousel.getInstance(carouselElement)?.dispose();
    carouselInner.replaceChildren();
    for (let index = 0; index < cards.length; index += count) {
      const slide = document.createElement('div');
      slide.className = 'carousel-item';
      if (index === Math.floor(currentIndex / count) * count) slide.classList.add('active');
      slide.setAttribute('role', 'group');
      slide.setAttribute('aria-roledescription', 'slide');
      slide.setAttribute('aria-label', `${Math.floor(index / count) + 1} of ${Math.ceil(cards.length / count)}`);
      const row = document.createElement('div');
      row.className = 'row games-row';
      cards.slice(index, index + count).forEach(card => {
        const column = document.createElement('div');
        column.className = 'col-12 col-md-6 col-lg-4';
        column.append(card);
        row.append(column);
      });
      slide.append(row);
      carouselInner.append(slide);
    }
    visibleCount = count;
    new bootstrap.Carousel(carouselElement, {interval: false, ride: false, touch: true, keyboard: true});
  }
  arrangeGames();
  window.addEventListener('resize', arrangeGames);

  const menu = document.getElementById('navigation-menu');
  const menuButton = document.querySelector('.navbar-toggler');
  const collapse = bootstrap.Collapse.getOrCreateInstance(menu, {toggle: false});
  menu.addEventListener('show.bs.collapse', () => {
    menuButton.querySelector('i').className = 'fa-solid fa-xmark';
  });
  menu.addEventListener('hidden.bs.collapse', () => {
    menuButton.querySelector('i').className = 'fa-solid fa-bars';
  });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => collapse.hide()));
  document.addEventListener('click', event => {
    if (!event.target.closest('.site-header') && menu.classList.contains('show')) collapse.hide();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.classList.contains('show')) {
      collapse.hide();
      menuButton.focus();
    }
  });
  window.matchMedia('(min-width: 1024px)').addEventListener('change', event => {
    if (event.matches) collapse.hide();
  });

  document.body.addEventListener('activate.bs.scrollspy', () => {
    document.querySelectorAll('#primary-navigation .nav-link').forEach(link => {
      if (link.classList.contains('active')) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  });

  document.querySelectorAll('[data-contact-subject]').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('subject').value = link.dataset.contactSubject;
    });
  });
})();
