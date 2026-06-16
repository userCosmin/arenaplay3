// Arena Play — UI kit demo data (real catalog from arenaplay.ro)
const IMG = {
  logo: 'https://dahhf9dlbgvrg.cloudfront.net/logo.png',
  interior: 'https://dahhf9dlbgvrg.cloudfront.net/arena-play-about-us.jpg',
  ps: 'https://dahhf9dlbgvrg.cloudfront.net/playstation.jpg',
  psImg: 'https://dahhf9dlbgvrg.cloudfront.net/playstation-image.jpg',
  gg1: 'https://dahhf9dlbgvrg.cloudfront.net/gg1.jpg',
  gg2: 'https://dahhf9dlbgvrg.cloudfront.net/gg2.jpg',
  gg3: 'https://dahhf9dlbgvrg.cloudfront.net/gg3.jpg',
  edu: 'https://dahhf9dlbgvrg.cloudfront.net/eduxr.png',
};

const GAMES = [
  { title: 'Beat Saber', category: 'VR static', cat: 'vr-static', genre: 'Muzical', image: IMG.gg1, players: '1 jucător', age: '10+', multiplayer: true, description: 'Lovești cuburi care vin spre tine în ritmul unei muzici electrizante.' },
  { title: 'ShootXR', category: 'VR dinamic', cat: 'vr-dinamic', genre: 'Acțiune', image: IMG.gg2, players: '1-12 jucători', age: '14+', multiplayer: true, description: 'Design futurist, efecte impresionante și tracking avansat — ideal pentru petreceri.' },
  { title: 'Journey XR', category: 'VR dinamic', cat: 'vr-dinamic', genre: 'Aventură', image: IMG.gg3, players: '1-12 jucători', age: '6+', multiplayer: true, description: 'Călătorești prin cinci lumi spectaculoase folosind doar mâinile tale.' },
  { title: 'Among Us VR', category: 'VR static', cat: 'vr-static', genre: 'Strategie', image: IMG.gg2, players: '4-10 jucători', age: '10+', multiplayer: true, description: 'Descoperă impostorul printre astronauți înainte să fie prea târziu.' },
  { title: 'Red Matter 2', category: 'VR static', cat: 'vr-static', genre: 'Aventură', image: IMG.gg1, players: '1 jucător', age: '13+', multiplayer: false, description: 'O lume sci-fi plină de mistere, planete îndepărtate și puzzle-uri.' },
  { title: 'Arizona Sunshine 2', category: 'VR static', cat: 'vr-static', genre: 'Acțiune', image: IMG.gg3, players: '1-4 jucători', age: '17+', multiplayer: true, description: 'O lume plină de zombie — arme și abilități pentru a-i învinge.' },
  { title: 'Job Simulator', category: 'VR static', cat: 'vr-static', genre: 'Simulator', image: IMG.gg2, players: '1 jucător', age: '10+', multiplayer: false, description: 'Roboții au preluat munca — vezi cum era viața oamenilor la lucru.' },
  { title: 'Iron Man VR', category: 'VR static', cat: 'vr-static', genre: 'Acțiune', image: IMG.gg1, players: '1 jucător', age: '10+', multiplayer: false, description: 'Pune-ți armura high-tech și zboară luptând cu roboți și răufăcători.' },
  { title: 'Star Wars: Vader Immortal', category: 'VR static', cat: 'vr-static', genre: 'Aventură', image: IMG.gg3, players: '1 jucător', age: '10+', multiplayer: false, description: 'Învață să folosești Forța și mânuiește o sabie laser în împărăția lui Vader.' },
  { title: 'The Walking Dead: S&S', category: 'VR static', cat: 'vr-static', genre: 'Acțiune', image: IMG.gg2, players: '1 jucător', age: '17+', multiplayer: false, description: 'Supraviețuiește într-o lume de zombie cu arme reale și decizii grele.' },
  { title: 'PowerWash Simulator', category: 'VR static', cat: 'vr-static', genre: 'Simulator', image: IMG.gg1, players: '1 jucător', age: '10+', multiplayer: true, description: 'Un jet de apă super-puternic și de curățat case, mașini și parcuri.' },
  { title: 'PlayStation Plus', category: 'PlayStation', cat: 'playstation', genre: 'Console', image: IMG.ps, players: '1-4 jucători', age: '4+', multiplayer: true, description: 'Toată biblioteca PlayStation Plus pe console de ultimă generație.' },
  { title: 'Simulator Zbor', category: 'Simulator zbor', cat: 'sim-zbor', genre: 'Simulator', image: IMG.psImg, players: '1 jucător', age: '10+', multiplayer: false, description: 'Next Level Racing® Flight Simulator — Commercial, Military, General Aviation.' },
  { title: 'Simulator Racing', category: 'Simulator racing', cat: 'sim-racing', genre: 'Simulator', image: IMG.gg3, players: '1 jucător', age: '10+', multiplayer: false, description: 'Monza Racing R16 V2 DD Base — direct drive, senzație reală de pistă.' },
  { title: 'Edu XR', category: 'VR dinamic', cat: 'vr-dinamic', genre: 'Educational', image: IMG.edu, players: 'grup școlar', age: '6+', multiplayer: true, description: 'Teleportează clasa printre canioane, orașe legendare și vulcani activi.' },
  { title: 'Cubism', category: 'VR static', cat: 'vr-static', genre: 'Puzzle', image: IMG.gg1, players: '1 jucător', age: '6+', multiplayer: false, description: 'Puzzle-uri geometrice 3D minimaliste, satisfacție pură la fiecare soluție.' },
];

const FILTERS = [
  { id: 'all', label: 'Toate jocurile' },
  { id: 'vr-static', label: 'VR static' },
  { id: 'vr-dinamic', label: 'VR dinamic' },
  { id: 'playstation', label: 'PlayStation' },
  { id: 'sim-zbor', label: 'Simulator zbor' },
  { id: 'sim-racing', label: 'Simulator racing' },
];

const EXPERIENCES = [
  { icon: 'orbit', title: 'VR Dinamic · Free-Roam', text: 'Te miști liber, wireless, în medii virtuale complexe. Acțiune cu tot corpul.', tone: 'primary' },
  { icon: 'glasses', title: 'VR Static', text: 'Sute de titluri imersive dintr-un singur loc — de la puzzle la acțiune.', tone: 'secondary' },
  { icon: 'users', title: 'Multiplayer VR', text: 'Până la 16 jucători simultan. Cooperare și competiție în aceeași arenă.', tone: 'accent' },
  { icon: 'gamepad-2', title: 'PlayStation', text: 'Cele mai noi jocuri pe console de ultimă generație, în confort total.', tone: 'primary' },
  { icon: 'car', title: 'Simulator Racing', text: 'Scaun direct-drive Monza R16 — senzația reală a pistei.', tone: 'secondary' },
  { icon: 'plane', title: 'Simulator Zbor', text: 'Cockpit dedicat Boeing Commercial Edition pentru aviație completă.', tone: 'accent' },
];

window.APData = { IMG, GAMES, FILTERS, EXPERIENCES };
