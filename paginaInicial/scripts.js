

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
// const cards = document.querySelectorAll('.card-front');

// cards.forEach(card => {
//   card.addEventListener('click', () => {
//     const btn = document.createElement("button")
//     btn.innerText = botao.innerText.replace(estaAberto ? '⬆' : '⬇', estaAberto ? '⬇' : '⬆');
//     btn.appendChild(textoBotao)
//     //     const conteudo = botao.nextElementSiblin
//     // g;
//     // const estaAberto = conteudo.style.display === 'block';

//     // conteudo.style.display = estaAberto ? 'none' : 'block';
//     // botao.innerText = botao.innerText.replace(estaAberto ? '⬆' : '⬇', estaAberto ? '⬇' : '⬆');
//   });
// });

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
