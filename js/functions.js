/* Nav Bar Display */

const abrirNav = () => {
    let links = document.getElementById('nav-links-mobile');
    if (links.style.display === "block") {
        links.style.display = "none";
    } else {
        links.style.display = "block";
    }
};

const mascOption = document.getElementById('opt-masc');
const genderSelect = document.getElementById('txt-sexo')

const cambiarSelectSize = () => {

    if (mascOption.selected == 'true') {
        genderSelect.style.cssText += 'width: 100px';
    }
}

cambiarSelectSize();