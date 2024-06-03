import {
    drivers

} from "./modules/data.js";

import {
    navElGen,
    cardElGen,
    positionPointGen
} from "./modules/components.js";

/* APPENDE NAVELGEN AL MAIN */
const mainEl = document.querySelector('main');
mainEl.insertAdjacentElement('beforebegin', navElGen());


/* CICLO LE FUNZIONI  */
drivers.forEach((el) => {
    mainEl.insertAdjacentElement('afterend', cardElGen(el));
})
