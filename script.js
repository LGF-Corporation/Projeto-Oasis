function alternarMenuTema(e) {
    const menu = document.getElementById('menu-opcoes-tema');
    if (menu) {
        menu.classList.toggle('aberto'); 
    }
}

function mudarTema(nomeDoTema) {
    document.documentElement.setAttribute('data-theme', nomeDoTema);
    localStorage.setItem('temaSalvo', nomeDoTema);
    
    const menu = document.getElementById('menu-opcoes-tema');
    if (menu) {
        menu.classList.remove('aberto'); // remove né(menu)
    }
}

const temaGuardado = localStorage.getItem('temaSalvo');
if (temaGuardado) {
    document.documentElement.setAttribute('data-theme', temaGuardado);
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visivel');
            }, i * 200);
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.obj-card').forEach(card => {
    observer.observe(card);
});

function ativarPin(id) {
    document.querySelectorAll('.pub-popup').forEach(p => p.classList.remove('visivel'));
    document.querySelectorAll('.pub-pin').forEach(p => p.classList.remove('ativo'));

    document.getElementById('popup-' + id).classList.add('visivel');
    document.getElementById('pin-' + id).classList.add('ativo');
}