

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

 // Garante que só funcione no mobile
  if (window.innerWidth <= 768) {
    document.querySelectorAll('.card').forEach(card => {
      card.addEventListener('click', () => {
        card.classList.toggle('active');
      });
    });
  }