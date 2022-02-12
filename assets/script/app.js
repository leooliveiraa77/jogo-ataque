const ATAQUE = 10;
const ATAQUE_FORTALECIDO = 17;
const ATAQUE_MONSTRO = 14;
const CURA_JOGADOR = 20;
const BARRA_VALOR = 100;
const MAGIA = 20;
const PROGRESSO_BARRA_MANA = 50;

let vidaAtualJogador = BARRA_VALOR;
let vidaAtualMonstro = BARRA_VALOR;

configurandoBarras(BARRA_VALOR);

function qualAtaque(tipoAtaque) {
  switch (tipoAtaque) {
    case 'ATAQUE':
      ataqueJogador(ATAQUE);
      break;
    case 'ATAQUE_FORTALECIDO':
      ataqueJogador(ATAQUE_FORTALECIDO);
      break;
    case 'ATAQUE_MAGIA':
      ataqueJogador(MAGIA);
      break;
  }

  ataqueMonstro(ATAQUE_MONSTRO);

  if (vidaAtualJogador <= 0 && vidaAtualMonstro > 0) {
    alert('Você Perdeu!');
  } else if (vidaAtualMonstro <= 0 && vidaAtualJogador > 0) {
    alert('Você Ganhou!');
  } else if (vidaAtualJogador <= 0 && vidaAtualMonstro <= 0) {
    alert('Você Empatou, Treine mais!');
  }

  if (vidaAtualJogador <= 0 || vidaAtualMonstro <= 0) {
    resetGame();
  }
}

function ataqueNormal() {
  qualAtaque('ATAQUE');
}

function ataqueFortalecido() {
  qualAtaque('ATAQUE_FORTALECIDO');
}

function chamaCura() {
  curaVida(CURA_JOGADOR);
  qualAtaque();
}

function magia() {
  if (manaBarra.value > 0) {
    controleBarraMana(PROGRESSO_BARRA_MANA);
    qualAtaque('ATAQUE_MAGIA');
  } else {
    return;
  }
}

ataqueBtn.addEventListener('click', ataqueNormal);
ataqueFortalecidoBtn.addEventListener('click', ataqueFortalecido);
curaBtn.addEventListener('click', chamaCura);
magiabtn.addEventListener('click', magia);
