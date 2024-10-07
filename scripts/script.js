let fundo = document.getElementById('fundo');

let montanhaL = document.getElementById('montanhaL');
let montanhaR = document.getElementById('montanhaR');

let templo = document.getElementById('templo');
let LogoImg = document.getElementById('LogoImg');

let isScrolling = false;


window.addEventListener('scroll', () => {
    if (!isScrolling) {
        window.requestAnimationFrame(() => {
            animateParallax();
            isScrolling = false;
        });
        isScrolling = true;
    }


})
function animateParallax() {
    let value = window.scrollY;

    LogoImg.style.transform = `translate3d(0, ${value * 0.5}px, 0) scale(${1 + value * -0.0001})`;
    templo.style.transform = `translate3d(0, ${value * -0.001}dvw, 0)`;
    montanhaL.style.transform = `translate3d(0, ${value * 0.2}px, 0)`;
    montanhaR.style.transform = `translate3d(0, ${value * 0.2}px, 0)`;
}

function navResponsiva() {
    let nav = document.getElementById("navbar");
    if (nav.className === "navbar") {
        nav.className += " navResponsiva";
    } else {
        nav.className = "navbar";
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const picture = document.getElementById('picture');

    // Função para lidar com a visibilidade
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Inicia a animação quando o elemento for visível
                picture.style.animationPlayState = 'running';
                // Para parar de observar depois que a animação começa
                observer.unobserve(picture);
            }
        });
    }, {
        threshold: 0.5 // O elemento precisa estar 50% visível para disparar a animação
    });

    // Começa a observar o elemento #picture
    observer.observe(picture);
});
