let trilho = document.getElementById('trilho')
let buttonTrilho = document.getElementById('buttonTrilho')
let darkMode = false;

buttonTrilho.addEventListener("click", function () {
  let deslocamento = window.innerWidth <= 768 ? 16 : 24; // valor menor em telas pequenas

  if (!darkMode) {
    buttonTrilho.style.transform = `translateX(${deslocamento}px)`;
    trilho.style.background = '#000';
    buttonTrilho.style.background = '#E0FFFF';
  } else {
    trilho.style.justifyContent = 'flex-start';
    buttonTrilho.style.transform = "translateX(0px)";
    trilho.style.background = '#E0FFFF';
    buttonTrilho.style.background = '#000';
  }
  darkMode = !darkMode;
  aplicarModoDark(darkMode);
});

function aplicarModoDark(ativo) {
  document.body.classList.toggle('dark', ativo);
}
const menuBtn = document.getElementById("bnt-menu");
const nav = document.getElementById("nav-menu");
const icon = menuBtn.querySelector("i"); // pega o <i class="fas fa-bars">

// Função para redirecionar para a página de currículo
function irParaCurriculo() {
  window.location.href = "../PaginaCurriculo/index.html";
}

// Botão "Saiba mais"
const botaoSaibaMais = document.querySelector(".bnt-saibaMais");
if (botaoSaibaMais) {
  botaoSaibaMais.addEventListener("click", irParaCurriculo);
}

// Foto de perfil
const fotoPerfil = document.querySelector(".logoPerfil");
if (fotoPerfil) {
  fotoPerfil.addEventListener("click", irParaCurriculo);
}

// Nome do perfil
const nomePerfil = document.querySelector(".nomePerfil");
if (nomePerfil) {
  nomePerfil.addEventListener("click", irParaCurriculo);
}
// Abrir/fechar menu ao clicar no botão
menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");

  // Troca o ícone
  if (icon.classList.contains("fa-bars")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
});

// Fechar menu ao clicar em qualquer link dentro dele
const navLinks = nav.querySelectorAll("a");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");

    // Volta o ícone pro hambúrguer
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  });
});
// Fechar menu ao clicar fora dele
document.addEventListener("click", function (event) {
  const isClickDentroDoMenu = nav.contains(event.target);
  const isClickNoBotao = menuBtn.contains(event.target);

  if (!isClickDentroDoMenu && !isClickNoBotao && nav.classList.contains("active")) {
    nav.classList.remove("active");

    // Volta o ícone pro hambúrguer
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
});
document.addEventListener('DOMContentLoaded', () => {

  const carrossel = document.getElementById('carrossel');
  const cards = carrossel.querySelectorAll('.card-projeto');
  const btnEsquerda = document.querySelector('.seta.esquerda');
  const btnDireita = document.querySelector('.seta.direita');
  const bolinhasContainer = document.querySelector('.bolinhas');

  function calcularCardsPorPagina() {
    const largura = window.innerWidth;
    return largura > 1300 ? 3 : largura >= 800 ? 2 : 1;
  }

  let cardsPorPagina = calcularCardsPorPagina();
  let totalPaginas = Math.ceil(cards.length / cardsPorPagina);
  let paginaAtual = 0;

  function criarBolinhas() {
    bolinhasContainer.innerHTML = '';
    for (let i = 0; i < totalPaginas; i++) {
      const bolinha = document.createElement('span');
      bolinha.classList.add('bolinha');
      if (i === 0) bolinha.classList.add('ativa');
      bolinha.addEventListener('click', () => irParaPagina(i));
      bolinhasContainer.appendChild(bolinha);
    }
  }

  function atualizarBolinhas() {
    const todas = document.querySelectorAll('.bolinha');
    todas.forEach((b, i) => {
      b.classList.toggle('ativa', i === paginaAtual);
    });
  }

  function irParaPagina(pagina) {
    paginaAtual = pagina;

    const card = cards[0];
    const cardEstilo = window.getComputedStyle(card);
    const margemDireita = parseFloat(cardEstilo.marginRight);
    const margemEsquerda = parseFloat(cardEstilo.marginLeft);
    const larguraCard = card.offsetWidth + margemDireita + margemEsquerda;

    const scrollValor = larguraCard * cardsPorPagina * pagina;

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

  function atualizarCards() {
    cardsPorPagina = calcularCardsPorPagina();
    totalPaginas = Math.ceil(cards.length / cardsPorPagina);
    paginaAtual = 0;
    criarBolinhas();
    irParaPagina(0);

    const cardsEl = document.querySelectorAll('.card');

    cardsEl.forEach(card => {
      const front = card.querySelector('.card-front');
      const back = card.querySelector('.card-back');
      let btn = front.querySelector('.toggle-arrow');

      if (window.innerWidth < 1300) {
        if (!btn) {
          btn = document.createElement("button");
          btn.classList.add('toggle-arrow');
          btn.innerText = '▼';
          front.appendChild(btn);

          back.style.display = 'none';

          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const aberto = back.style.display === 'block';
            back.style.display = aberto ? 'none' : 'block';
            btn.innerText = aberto ? '▼' : '▲';
          });
        }
      } else {
        if (btn) btn.remove();
        back.style.display = 'block';
      }
    });
  }

  // Executa na carga da página
  atualizarCards();

  // Atualiza no redimensionamento
  window.addEventListener('resize', atualizarCards);
});
const scrollBar = document.getElementById('scroll-progress');
const header = document.querySelector('header');

function updateScrollBarPosition() {
  const headerHeight = header.offsetHeight;
  scrollBar.style.top = headerHeight + 'px';
}

function updateScrollProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  scrollBar.style.width = scrollPercent + '%';
}

// Atualiza posição da barra ao carregar e ao redimensionar
window.addEventListener('load', updateScrollBarPosition);
window.addEventListener('resize', updateScrollBarPosition);

// Atualiza progresso de rolagem
window.addEventListener('scroll', updateScrollProgress);



// Js do formulario

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("meuFormulario");
  const btnEnviar = document.getElementById("btnEnviar");
  const mensagemSucesso = document.getElementById("mensagemSucesso");
  const mensagemErro = document.getElementById("mensagemErro");
  let ultimoEnvio = 0;

  function emailValido(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    btnEnviar.disabled = true;
    btnEnviar.textContent = "Enviando...";
    btnEnviar.classList.add("loading");

    mensagemSucesso.style.display = "none";
    mensagemErro.style.display = "none";

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const assunto = document.getElementById("assunto").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();
    const honeypot = form.querySelector('input[name="_honey"]').value;

    if (honeypot !== "") {
      mensagemErro.textContent = "🚫 Ação bloqueada.";
      mensagemErro.style.display = "block";
      btnEnviar.disabled = false;
      btnEnviar.textContent = "Enviar";
      btnEnviar.classList.remove("loading");
      return;
    }

    if (!nome || !email || !assunto || !mensagem) {
      mensagemErro.textContent = "⚠️ Preencha todos os campos.";
      mensagemErro.style.display = "block";
      btnEnviar.disabled = false;
      btnEnviar.textContent = "Enviar";
      btnEnviar.classList.remove("loading");
      return;
    }

    if (!emailValido(email)) {
      mensagemErro.textContent = "❌ Email inválido.";
      mensagemErro.style.display = "block";
      btnEnviar.disabled = false;
      btnEnviar.textContent = "Enviar";
      btnEnviar.classList.remove("loading");
      return;
    }

    if (mensagem.length < 10) {
      mensagemErro.textContent = "✏️ Escreva uma mensagem mais detalhada.";
      mensagemErro.style.display = "block";
      btnEnviar.disabled = false;
      btnEnviar.textContent = "Enviar";
      btnEnviar.classList.remove("loading");
      return;
    }

    const agora = Date.now();
    if (agora - ultimoEnvio < 10000) {
      mensagemErro.textContent = "⏳ Aguarde antes de enviar novamente.";
      mensagemErro.style.display = "block";
      btnEnviar.disabled = false;
      btnEnviar.textContent = "Enviar";
      btnEnviar.classList.remove("loading");
      return;
    }
    ultimoEnvio = agora;

    const timeoutId = setTimeout(() => {
      btnEnviar.disabled = false;
      btnEnviar.textContent = "Enviar";
      btnEnviar.classList.remove("loading");
      mensagemErro.textContent = "⏱️ Tempo excedido. Tente novamente.";
      mensagemErro.style.display = "block";
    }, 8000);

    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
    })
      .then((response) => {
        clearTimeout(timeoutId);
        if (response.ok) {
          mensagemSucesso.style.display = "block";
          form.reset();
        } else {
          mensagemErro.textContent = "❌ Erro ao enviar. Tente novamente.";
          mensagemErro.style.display = "block";
        }
      })
      .catch(() => {
        mensagemErro.textContent = "❌ Erro de conexão.";
        mensagemErro.style.display = "block";
      })
      .finally(() => {
        btnEnviar.disabled = false;
        btnEnviar.textContent = "Enviar";
        btnEnviar.classList.remove("loading");

        setTimeout(() => {
          mensagemSucesso.style.display = "none";
          mensagemErro.style.display = "none";
        }, 5000);
      });
  });
});

