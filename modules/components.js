/* CREA IL CONTENITORE DELLE FEATURES */
const navElGen = () => {
    const navEl = document.createElement('nav');
    navEl.className = 'features';
    const divEl = document.createElement('div');
    divEl.className = 'container-features';
    const ulEl = document.createElement('ul');
    ulEl.className = 'features-item';
    const item1 = document.createElement('li');
    item1.textContent = 'features';
    const item2 = document.createElement('li');
    item2.textContent = 'features';
    const item3 = document.createElement('li');
    item3.textContent = 'features';
    const item4 = document.createElement('li');
    item4.textContent = 'features';
    const item5 = document.createElement('li');
    item5.textContent = 'features';
    ulEl.append(item1, item2, item3, item4, item5);
    divEl.append(ulEl);
    navEl.append(divEl);
    return navEl;
}

/* CREA LA STRUTTURA DELLA CARD */
const cardElGen = (obj) => {
    const containerEl = document.createElement('div');
    containerEl.className = 'card';
    containerEl.append(
        positionPointGen(obj),
        nameNazionalityGen(obj),
        teamGen(obj),
        pilotImageGen(obj));
    return containerEl;
}

/* CREA LA SEZIONE DELLA CARD POSITION-POINTS */
function positionPointGen(obj) {
    const containerEl = document.createElement('div');
    containerEl.className = 'position-point';
    const positionEl = document.createElement('h4');
    positionEl.textContent = obj.position;
    const pointsEl = document.createElement('h4');
    pointsEl.textContent = obj.points;
    containerEl.append(positionEl, pointsEl);
    return containerEl;
}

/* CREA LA SEZIONE DELLA CARD NAME-NATIONALITY */
function nameNazionalityGen(obj) {
    const containerEl = document.createElement('div');
    containerEl.className = "name-nationality";
    const pilotNameEl = document.createElement('h2');
    pilotNameEl.className = "pilot-name";
    pilotNameEl.textContent = obj.name;
    const nationalityContainerEl = document.createElement('span');
    nationalityContainerEl.className = "container-nationality";
    const flagEl = document.createElement('img');
    flagEl.className = "pilot-nationality";
    flagEl.src = obj.flag;
    nationalityContainerEl.append(flagEl);
    containerEl.append(pilotNameEl, nationalityContainerEl);
    return containerEl;
}

/* CREA L'H3 CHE CONTIENE IL NOME DELLA SCUDERIA */
function teamGen(obj) {
    const teamEl = document.createElement('h3');
    teamEl.textContent = obj.team;
    return teamEl;
}

/* CREA L'H3 CHE CONTIENE IL NOME DELLA SCUDERIA */
function pilotImageGen(obj) {
    const pilotImageEl = document.createElement('img');
    pilotImageEl.className = "pilot-image";
    pilotImageEl.src = obj.image;
    return pilotImageEl;
}

export {
    navElGen,
    cardElGen,
    positionPointGen,
}

