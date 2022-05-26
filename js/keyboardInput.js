// keyboardInput.js 

// armazenamos as teclas carregadas em baixo num objecto
teclasEmBaixo = {};

window.addEventListener('blur', (e) => {
    teclasEmBaixo = {};
});

window.addEventListener('keydown', function(e) {
    e.preventDefault();
    teclasEmBaixo[e.key] = true;
});

window.addEventListener('keyup', function(e) {
    e.preventDefault();
    teclasEmBaixo[e.key] = false;
});