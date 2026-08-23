const works = [
  ['holzkunst-ring', 'Holzkunst-Ring', 'images/holzkunst.jpg', 'Holzkunst-Ring auf Stahlplatte gebürstet', 'Auf Anfrage', 'Eberesche gestockt'],
  ['eierbecher', 'Eierbecher', 'images/Eierbecher.jpg', 'Eierbecher aus Eiche', '10 Euro je Stück', 'Eiche'],
  ['lebensbaum', 'Lebensbaum', 'images/lebensbaum.jpg', 'Lebensbaum', '230 Euro', 'Flieder, Buche'],
  ['rohrkreuz', 'Holz-Esche Rohrkreuz', 'images/rohrkreuz.jpg', 'Rohrkreuz', 'Auf Anfrage', 'Esche'],
  ['flaschenverschluesse', 'Flaschenverschlüsse', 'images/Foto4_Flaschenverschluss.jpg', 'Flaschenverschlüsse', '10 Euro je Stück', 'diverse Hölzer'],
  ['flaschenoeffner', 'Flaschenöffner', 'images/Foto5_Flaschenöffner.jpg', 'Flaschenöffner', 'Auf Anfrage', 'diverse Hölzer'],
  ['flaschenlichter', 'Flaschenlichter', 'images/Foto3_Flaschenlichter.jpg', 'Flaschenlichter', '30 Euro je Stück', 'diverse Hölzer'],
  ['flaschenwald', 'Flaschenwald', 'images/Foto2_Flaschenwald.jpg', 'Flaschenwald', '45 Euro', 'diverse Hölzer'],
  ['schneemaenner', 'Schneemänner', 'images/Foto1_Schneemänner.jpg', 'Schneemänner aus Kirschholz', '20 Euro je Stück', 'diverse Hölzer'],
  ['kerzenstaender', 'Kerzenständer aus Kirschholz', 'images/Foto_98.jpg', 'Kerzenständer', '30 Euro je Stück', 'Kirschholz'],
  ['schuessel-wallnuss', 'Schüssel aus Walnussholz', 'images/Foto_97.jpg', 'Schüssel aus Walnussholz', 'Auf Anfrage', 'Walnussholz'],
  ['vase-linde', 'Vase aus Linde', 'images/Foto_99.jpg', 'Vase aus Linde', '85 Euro', 'Linde'],
  ['kronkorkenuhr', 'Kronkorkenuhr', 'images/Foto_96.jpg', 'Kronkorkenuhr', 'Auf Anfrage', 'Kronkorken'],
  ['vase-robinie', 'Vase aus Robinie', 'images/Foto_1.JPG', 'Vase aus Robinie', '65 Euro', 'Robinie'],
  ['multigadget', 'Multigadget', 'images/Foto_15.jpg', 'Multigadget', '20 Euro je Stück', 'diverse Hölzer'],
  ['flaschenverschluesse-2', 'Flaschenverschlüsse', 'images/Foto_3.JPG', 'Flaschenverschlüsse aus Kirschholz', '10 Euro je Stück', 'Kirschholz'],
  ['eibenblume-herz', 'Eibenblume mit Herz', 'images/Foto_4.JPG', 'Eibenblume mit Herz', '35 Euro', 'Eibenholz'],
  ['flaschenlicht-walnuss', 'Flaschenlicht aus Walnussholz', 'images/Foto_5.JPG', 'Flaschenlicht aus Walnussholz', '30 Euro je Stück', 'Walnussholz'],
  ['ostereidose', 'Ostereidose aus Walnussholz', 'images/Foto_6.jpg', 'Ostereidose aus Walnussholz', '55 Euro', 'Walnussholz'],
  ['pflaume-deckel', 'Pflaume mit gelochiertem Deckel', 'images/Foto_7.jpg', 'Pflaume mit gelochiertem Deckel', 'Auf Anfrage', 'diverse Hölzer'],
  ['skulptur-walnuss', 'Skulptur aus Walnussholz', 'images/Foto_88.JPG', 'Skulptur aus Walnussholz', 'Auf Anfrage', 'Walnussholz'],
  ['apfel-lufterfrischer', 'Apfel-Lufterfrischer', 'images/Foto_9.jpg', 'Apfel-Lufterfrischer', '15 Euro je Stück', 'diverse Hölzer'],
  ['apfel-lufterfrischer-2', 'Apfel-Lufterfrischer', 'images/Foto_10.jpg', 'Apfel-Lufterfrischer', '15 Euro je Stück', 'diverse Hölzer'],
  ['vase-robinie-2', 'Vase aus Robinie', 'images/Foto_11.jpg', 'Vase aus Robinie]', '65 Euro', 'Robinie'],
  ['wiking-bowl', 'Walnussschüssel Wiking Bowl', 'images/Foto_17.jpg', 'Walnussschüssel Wiking Bowl', '120 Euro', 'Walnussholz'],
  ['pflaumendose', 'Pflaumendose strukturiert', 'images/Foto_18.jpg', 'Pflaumendose strukturiert', '30 Euro', 'Pflaumenholz'],
  ['walnussschüssel', 'Walnussschüssel strukturiert', 'images/Foto_19.jpg', 'Walnussschüssel strukturiert', 'Auf Anfrage', 'Walnussholz'],
  ['kuksa-tasse', 'Kuksa Tasse Walnuss', 'images/Foto_20.jpg', 'Kuksa Tasse Walnuss', '35 Euro', 'Walnussholz'],
  ['dübelspiel', 'Dübelspiel aus Apfelbaum', 'images/Foto_21.jpg', 'Dübelspiel aus Apfelbaum', '25 Euro', 'Apfelbaum']
];

const thumbnailList = document.querySelector('[data-work-thumbnails]');
if (thumbnailList) {
  const currentKey = document.querySelector('[data-work-key]')?.dataset.workKey || 'holzkunst-ring';
  works.forEach(([key, name, imagePath]) => {
    const link = document.createElement('a');
    link.className = 'detail-thumbnail';
    link.href = `detail-werk.html?werk=${encodeURIComponent(key)}`;
    link.title = name;
    link.setAttribute('aria-label', name);
    if (key === currentKey) link.classList.add('is-active');

    const image = document.createElement('img');
    image.src = imagePath;
    image.alt = '';
    image.loading = 'lazy';
    image.decoding = 'async';
    link.appendChild(image);
    thumbnailList.appendChild(link);
  });
}

const detailNames = document.querySelectorAll('[data-work-name]');
const detailImage = document.querySelector('[data-work-image]');
const detailPrice = document.querySelector('[data-work-price]');
const detailMaterial = document.querySelector('[data-work-material]');
const detailMail = document.querySelector('[data-work-mail]');
const detailPrevious = document.querySelector('[data-work-previous]');
const detailNext = document.querySelector('[data-work-next]');
const currentKey = document.querySelector('[data-work-key]')?.dataset.workKey || new URLSearchParams(window.location.search).get('werk') || 'holzkunst-ring';
const currentWork = works.find(([key]) => key === currentKey) || works[0];
const currentIndex = works.indexOf(currentWork);
const previousWork = works[(currentIndex - 1 + works.length) % works.length];
const nextWork = works[(currentIndex + 1) % works.length];

detailNames.forEach((element, index) => {
  element.textContent = index === 0 ? currentWork[1] : (currentWork[3] || currentWork[1]);
});
if (detailImage) {
  detailImage.src = currentWork[2];
  detailImage.alt = `${currentWork[1]} aus Holz`;
}
if (detailPrice) detailPrice.textContent = currentWork[4] || 'Auf Anfrage';
if (detailMaterial) detailMaterial.textContent = currentWork[5] || 'Bitte ergänzen';
if (detailMail) detailMail.href = `mailto:info@mp-kunsthandwerk.de?subject=${encodeURIComponent(`Anfrage (${currentWork[1]})`)}`;
if (detailPrevious) detailPrevious.href = `detail-werk.html?werk=${encodeURIComponent(previousWork[0])}`;
if (detailNext) detailNext.href = `detail-werk.html?werk=${encodeURIComponent(nextWork[0])}`;
document.title = `${currentWork[1]} | MP Kunsthandwerk`;

const imageWrapper = document.querySelector('.detail-image-wrapper');
let touchStartX = 0;
let touchStartY = 0;

if (imageWrapper) {
  imageWrapper.addEventListener('touchstart', (event) => {
    const touch = event.changedTouches[0];
    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
  }, { passive: true });

  imageWrapper.addEventListener('touchend', (event) => {
    const touch = event.changedTouches[0];
    const horizontalDistance = touch.clientX - touchStartX;
    const verticalDistance = touch.clientY - touchStartY;

    if (Math.abs(horizontalDistance) < 50 || Math.abs(horizontalDistance) <= Math.abs(verticalDistance)) {
      return;
    }

    const targetKey = horizontalDistance < 0 ? nextWork[0] : previousWork[0];
    window.location.href = `detail-werk.html?werk=${encodeURIComponent(targetKey)}`;
  }, { passive: true });
}
