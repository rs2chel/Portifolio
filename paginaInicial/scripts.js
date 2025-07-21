

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

const container = document.querySelector('.container-cards');
const cards = document.querySelectorAll('.card-projeto');
const bolinhas = document.querySelectorAll('.bolinha');
let index = 0;

function atualizarCarrossel() {
    container.style.transform = `translateX(-${index * 30}%)`;
    bolinhas.forEach((b, i) => {
        b.classList.toggle('ativa', i === index);
    });
}

document.querySelector('.seta.direita').addEventListener('click', () => {
    if (index < cards.length - 1) {
        index++;
        atualizarCarrossel();
    }
});

document.querySelector('.seta.esquerda').addEventListener('click', () => {
    if (index > 0) {
        index--;
        atualizarCarrossel();
    }
});

bolinhas.forEach((b, i) => {
    b.addEventListener('click', () => {
        index = i;
        atualizarCarrossel();
    });
});

