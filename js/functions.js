/* Nav Bar Display */

const abrirNav = () => {
    let links = document.getElementById('nav-links-mobile');
    if (links.style.display === "block") {
        links.style.display = "none";
    } else {
        links.style.display = "block";
    }
}