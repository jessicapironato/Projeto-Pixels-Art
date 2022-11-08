// Event listeners

window.onload = () => {
  criarPixelBoard();
  if (localStorage.getItem('pixelBoard') === null) {
    localStorage.setItem('pixelBoard', JSON.stringify([]));
  }
  if (localStorage.getItem('colorPalette') === null) {
    salvarCores();
  }
  colorirQuadros();
  colorirPixels();

  document.getElementById('button-random-color').addEventListener('click', () => {
    salvarCores();
    colorirQuadros();
  });

  document.getElementById('clear-board').addEventListener('click', () => {
    const pixels = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'white'
    }
  })

  const quadros = document.querySelectorAll('.color');
  for (let index = 0; index < quadros.length; index += 1) {
    quadros[index].addEventListener('click', () => {
      atualizaQuadroSelecionado(quadros[index]);
    });
  }
  
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', () => {
      const quadroSelecionado = document.querySelector('.selected');
      pixels[index].style.backgroundColor = quadroSelecionado.style.backgroundColor;
      const posicaoCor = {"posicao": index, "cor": quadroSelecionado.style.backgroundColor};
      const pixelBoards = JSON.parse(localStorage.getItem('pixelBoard'));
      pixelBoards.push(posicaoCor);
      localStorage.setItem('pixelBoard', JSON.stringify(pixelBoards));
    });
  }
}

// Functions

function criarPixelBoard() {
  const pixelQuadro = document.getElementById('pixel-board');
  for (let index = 0;  index < 25; index +=1) {
    pixelQuadro.innerHTML += `<div class ="pixel" ></div>`
  }
}

function salvarCores() {
  const cores = [];
  cores.push('black');
  cores.push(criarCorAleatoria());
  cores.push(criarCorAleatoria());
  cores.push(criarCorAleatoria());
  localStorage.setItem('colorPalette', JSON.stringify(cores));
}

function criarCorAleatoria() {
  const red = Math.ceil(Math.random() * 255);
  const green = Math.ceil(Math.random() * 255);
  const blue = Math.ceil(Math.random() * 255);

  return `rgba(${red}, ${green}, ${blue})`;
}

function colorirQuadros() {
  const quadros = document.getElementsByClassName('color');
  const cores = JSON.parse(localStorage.getItem('colorPalette'));
  for (let index = 0; index < quadros.length; index += 1) {
    quadros[index].style.backgroundColor = cores[index];
  }
}

function colorirPixels() {
  const pixels = document.getElementsByClassName('pixel');
  const posicaoCor = JSON.parse(localStorage.getItem('pixelBoard'));
  for (let index = 0; index < posicaoCor.length; index += 1) {
    pixels[posicaoCor[index].posicao].style.backgroundColor = posicaoCor[index].cor;
  }
}

function atualizaQuadroSelecionado(novoQuadroSelecionado)
{
  const quadroSelecionadoAtual = document.querySelector('.selected');
  quadroSelecionadoAtual.className = 'color';
  novoQuadroSelecionado.className += ' selected';
}