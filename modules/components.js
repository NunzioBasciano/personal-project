

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
    containerEl.append(positionPointGen(obj), nameNazionalityGen(obj));
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

/*         <!-- CARD -->
        <div class="card">

            <!-- POSITION-POINT -->
           
            <!-- NAME-NATIONALITY -->
            <div class="name-nationality">
                <h2 class="pilot-name">Max Verstappen</h2>
                <span class="container-nationality">
                    <img class="pilot-nationality" src="./img/nationality/Netherlands.svg.png" alt="Bandiera olandese">
                </span>
            </div>
            <!-- END NAME-NATIONALITY -->

            <!-- TEAM -->
            <h3 class="team">Red Bull</h3>

            <!-- PILOT-IMAGE -->
            <div class="pilot-image-container">
                <img class="pilot-image" src="#" alt="Max Verstappen">
            </div>

        </div>
        <!-- END CARD --> */


export {
    navElGen,
    cardElGen,
    positionPointGen


}

