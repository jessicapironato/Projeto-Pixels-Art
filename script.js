// chamada dos elementos

const botaoAleatorio = document.getElementById('button-random-color');
const pixelQuadro = document.getElementById('pixel-board');

// funções

//para fazer cores aleatorias a cada click (somente o primeiro black)
function corAleatoria() {
  const red = Math.ceil(Math.random() * 255);
  const green = Math.ceil(Math.random() * 255);
  const blue = Math.ceil(Math.random() * 255);
  return `rgba(${red}, ${green}, ${blue})`;
}

botaoAleatorio.addEventListener('click', () => { 
  const novaCor = document.getElementsByClassName('color');
  for (let index = 0; index < novaCor.length; index += 1) {
    if (index === 0) {
      novaCor[index].style.backgroundColor = 'black';
    } else {
      novaCor[index].style.backgroundColor = corAleatoria();
    }
  }
});

// para fazer o quadro do pixel

  for (let index = 0;  index < 25; index +=1) {
    pixelQuadro.innerHTML += `<div class ="pixel" ></div>`
  }
