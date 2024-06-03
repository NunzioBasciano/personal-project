import { drivers } from "./modules/data.js";

import { navElGen, cardElGen, } from "./modules/components.js";

/* APPENDE NAVELGEN AL MAIN */
const mainEl = document.querySelector('main');
mainEl.className = 'main-element';
mainEl.insertAdjacentElement('beforebegin', navElGen());

/* CICLO LE FUNZIONI  */
drivers.forEach((el) => {
    mainEl.insertAdjacentElement('beforeend', cardElGen(el));
})
