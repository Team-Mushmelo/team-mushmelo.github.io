let text = document.getElementById('text');
let fundo = document.getElementById('fundo');
let montanha1 = document.getElementById('montanha1');
let montanha2 = document.getElementById('montanha2');
let templo = document.getElementById('templo');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + "px";

    templo.style.top = value * -0.12 + "px";
    templo.style.left = value * 0.1 + "px";

    montanha1.style.left = value * -0.5 + "px";
    montanha2.style.left = value * 0.5 + "px";

    fundo.style.scale = value * 0.1 + "px";
})