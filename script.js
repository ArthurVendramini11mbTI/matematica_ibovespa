// script.js
const links = document.querySelectorAll('nav a');
links.forEach(link => {
    if (window.location.pathname.endsWith(link.getAttribute('href'))) {
        link.classList.add('active');
    }
});

function voltarHome() {
    window.location.href = 'index.html';
}

function irPara(pagina) {
    window.location.href = pagina;
}
