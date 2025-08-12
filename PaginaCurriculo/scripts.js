const btnVoltar = document.getElementById('btn-anterior');

btnVoltar.addEventListener('click', () => {
    window.history.back();
});

const btnMenu = document.getElementById('btn-menu');
const asideMenu = document.querySelector('aside');

// Criar overlay para fundo escurecido
const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.appendChild(overlay);

// Abrir/fechar menu
btnMenu.addEventListener('click', () => {
  asideMenu.classList.toggle('menu-ativo');
  overlay.classList.toggle('ativo');
});

// Fechar menu ao clicar no overlay
overlay.addEventListener('click', () => {
  asideMenu.classList.remove('menu-ativo');
  overlay.classList.remove('ativo');
});
