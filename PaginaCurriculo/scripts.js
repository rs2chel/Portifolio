document.addEventListener('DOMContentLoaded', () => {
  const btnVoltar = document.getElementById('btn-anterior');

  btnVoltar.addEventListener('click', () => {
    window.location.href = '../index.html';
  });

  const btnMenu = document.getElementById('btn-menu');
  const asideMenu = document.querySelector('aside');

  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  document.body.appendChild(overlay);

  btnMenu.addEventListener('click', () => {
    asideMenu.classList.toggle('menu-ativo');
    overlay.classList.toggle('ativo');
  });

  overlay.addEventListener('click', () => {
    asideMenu.classList.remove('menu-ativo');
    overlay.classList.remove('ativo');
  });

  const menuLinks = asideMenu.querySelectorAll('a');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      asideMenu.classList.remove('menu-ativo');
      overlay.classList.remove('ativo');
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Lê o valor salvo no localStorage
  const darkModeAtivo = localStorage.getItem('darkMode') === 'true';

  // Só aplica a classe se estiver ativo
  if (darkModeAtivo) {
    document.body.classList.add('dark');
  }
});
