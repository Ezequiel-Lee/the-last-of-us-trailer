const navLinks = document.getElementById('mobile-menu');
const btnMobile = document.getElementById('mobile-menu-icon');

navLinks.addEventListener('click', animarMenu);

function animarMenu() {
    btnMobile.classList.toggle('open');
    if (navLinks.classList.contains('open')) {
        navLinks.classList.toggle('open');
        document.querySelector('.icon').src = "assets/img/hamburguer-btn.svg";
    } else {
        navLinks.classList.toggle('open');
        document.querySelector('.icon').src = "assets/img/close-btn.svg";
    }

    document.onclick = function(e) {
        if (!navLinks.contains(e.target) && !btnMobile.contains(e.target)) {
            navLinks.classList.remove('open');
            btnMobile.classList.remove('open');
            document.querySelector('.icon').src = "assets/img/hamburguer-btn.svg";
        }
    }
}


const botao = document.querySelector(".btn-plataforma");
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

botao.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativo");
});

const botao2 = document.querySelector(".btn-plataforma2");
const elementoPlataformas2 = document.querySelector(".btn-plataforma2 .plataformas");

botao2.addEventListener("click", () => {
    elementoPlataformas2.classList.toggle("ativo");
});


const audio = new Audio('./assets/audio/ellie.mp3');
audio.play();
audio.volume = 0.9;

const playstation = new Audio('./assets/audio/playstation.mp3');
playstation.play();
playstation.volume = 0.6;