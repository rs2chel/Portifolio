

let trilho = document.getElementById('trilho')
let buttonTrilho = document.getElementById('buttonTrilho')
let darkMode = false;
let body = document.getElementById('body')


buttonTrilho.addEventListener("click", function () {
  if (darkMode === false) {
    buttonTrilho.style.transform = "translateX(24px)";
    darkMode = true;
    trilho.style.background = '#000';
    buttonTrilho.style.background = '#E0FFFF';
    /// chamar uma funcao para mudar para o modo dark ou nao 
  } else {
    trilho.style.justifyContent = 'flex-start';
    darkMode = false;
    buttonTrilho.style.transform = "translateX(0px)";
    trilho.style.background = '#E0FFFF';
    buttonTrilho.style.background = '#000';
    // body.style.background = 'blue'
    // chamar uma funcao para mudar para o modo dark ou nao 
  }

});

  document.addEventListener('DOMContentLoaded', () => {
    const carrossel = document.getElementById('carrossel');
    const cards = carrossel.querySelectorAll('.card-projeto');
    const btnEsquerda = document.querySelector('.seta.esquerda');
    const btnDireita = document.querySelector('.seta.direita');
    const bolinhasContainer = document.querySelector('.bolinhas');

    const cardsPorPagina = 3;
    const totalPaginas = Math.ceil(cards.length / cardsPorPagina);
    let paginaAtual = 0;

    // Cria as bolinhas
    for (let i = 0; i < totalPaginas; i++) {
      const bolinha = document.createElement('span');
      bolinha.classList.add('bolinha');
      if (i === 0) bolinha.classList.add('ativa');
      bolinha.addEventListener('click', () => irParaPagina(i));
      bolinhasContainer.appendChild(bolinha);
    }

    function atualizarBolinhas() {
      const todas = document.querySelectorAll('.bolinha');
      todas.forEach((b, i) => {
        b.classList.toggle('ativa', i === paginaAtual);
      });
    }

    function irParaPagina(pagina) {
      paginaAtual = pagina;
      const scrollValor = cards[0].offsetWidth * cardsPorPagina * pagina;
      carrossel.scrollTo({
        left: scrollValor,
        behavior: 'smooth'
      });
      atualizarBolinhas();
    }

    btnEsquerda.addEventListener('click', () => {
      if (paginaAtual > 0) {
        irParaPagina(paginaAtual - 1);
      }
    });

    btnDireita.addEventListener('click', () => {
      if (paginaAtual < totalPaginas - 1) {
        irParaPagina(paginaAtual + 1);
      }
    });
  });



document.addEventListener('DOMContentLoaded', () => {
  function atualizarCards() {
    const cards = document.querySelectorAll('.card');
    const largura = window.innerWidth;

    cards.forEach(card => {
      const front = card.querySelector('.card-front');
      const back = card.querySelector('.card-back');
      let btn = front.querySelector('.toggle-arrow');

      if (largura < 1300) {
        // Se o botão não existir, cria e adiciona
        if (!btn) {
          btn = document.createElement("button");
          btn.classList.add('toggle-arrow');
          btn.innerText = '▼';
          front.appendChild(btn);

          // Inicialmente, esconde o back
          back.style.display = 'none';

          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const aberto = back.style.display === 'block';
            back.style.display = aberto ? 'none' : 'block';
            btn.innerText = aberto ? '▼' : '▲';
          });
        }
      } else {
        // Remove o botão, se existir
        if (btn) {
          btn.remove();
        }
        // Garante que o back fique visível (ou escondido, como preferir)
        back.style.display = 'block';
      }
    });
  }

  // Executa na carga da página
  atualizarCards();

  // Escuta o redimensionamento e atualiza
  window.addEventListener('resize', atualizarCards);
});
