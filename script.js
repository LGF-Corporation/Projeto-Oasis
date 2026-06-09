// se precisar volta no vídeo do cara Matheus Catiglione (troca de temas )
const temasValidos = {
    'padrao': 'padrao',
    'dark': 'dark',
    'oasis': 'oasis'
};

function alternarMenuTema() {
    const menu = document.getElementById('menu-opcoes-tema');
    if (menu) {
        menu.classList.toggle('aberto'); 
    }
}

function mudarTema(nomeDoTema) {
    const temaEscolhido = temasValidos[nomeDoTema] || 'padrao';
    document.documentElement.setAttribute('data-theme', temaEscolhido);
    localStorage.setItem('temaSalvo', nomeDoTema);
    
    const menu = document.getElementById('menu-opcoes-tema');
    if (menu) {
        menu.classList.remove('aberto');
    }
}

const temaGuardado = localStorage.getItem('temaSalvo');
if (temaGuardado) {
    const temaVerificado = temasValidos[temaGuardado] || 'padrao';
    document.documentElement.setAttribute('data-theme', temaVerificado);
}


function ativarPin(id) {
    const popup = document.getElementById('popup-' + id);
    const pin = document.getElementById('pin-' + id);
    const jaEstaAberto = popup ? popup.classList.contains('visivel') : false;

    document.querySelectorAll('.pub-popup').forEach(p => p.classList.remove('visivel'));
    
    document.querySelectorAll('.pub-pin').forEach(p => p.classList.remove('ativo'));

    if (!jaEstaAberto && popup && pin) {
        popup.classList.add('visivel');
        pin.classList.add('ativo');
    }
}


var intervalo = 3000;
const slides = document.querySelectorAll('.slide');

function limparSlides() {
    slides[0].classList.remove('ativo');
    slides[1].classList.remove('ativo');
    slides[2].classList.remove('ativo');
}

function slide1() {
    limparSlides();
    slides[0].classList.add('ativo');
    setTimeout(slide2, intervalo);
}

function slide2() {
    limparSlides();
    slides[1].classList.add('ativo');
    setTimeout(slide3, intervalo);
}

function slide3() {
    limparSlides();
    slides[2].classList.add('ativo');
    setTimeout(slide1, intervalo);
}


slide1();