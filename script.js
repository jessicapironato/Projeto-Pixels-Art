// chamada dos elementos

const botaoAleatorio = document.getElementById('button-random-color');
const pixelQuadro = document.getElementById('pixel-board');

// funções

//para fazer cores aleatorias a cada click (somente o primeiro black)
function corAleatoria() {
  const r = Math.ceil(Math.random() * 255);
  const g = Math.ceil(Math.random() * 255);
  const b = Math.ceil(Math.random() * 255);
  return `rgba(${r}, ${g}, ${b})`;
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
