const options = {
  strings: [
    'Typed.js manipuleerib DOM-i sisu.', 
    'See on kergem kui animeeritud GIF.', 
    'See on SEO-sõbralik tekstianimatsioon.', 
    'See kasutab nutikat kursorit (smart cursor).',
    'See on täiuslik maandumislehtede jaoks.'
  ],
  typeSpeed: 60,
  backSpeed: 40,
  smartBackspace: true, // See on oluline! See ei kustuta korduvaid sõnu.
  loop: true,
  backDelay: 1500,
  showCursor: true,     // Lisab vilkuva kursori teksti lõppu
  cursorChar: '|'       // Saab valida kursori sümbolit
};

const typed = new Typed('#typed-tekst', options);