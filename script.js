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