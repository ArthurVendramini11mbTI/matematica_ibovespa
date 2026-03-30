// script.js
const links1 = document.querySelectorAll('nav a');
links1.forEach(link => {
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

 const links = document.querySelectorAll('nav a');
  const currentPath = window.location.pathname.split("/").pop(); // pega só o arquivo atual

  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });