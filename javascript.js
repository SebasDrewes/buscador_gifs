const img = document.querySelector('img');
const loadImage = async (value) => {
  try {
    if (value) {
      const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=R7F7GZ7VzLKhFYXgldz1WhPMJCVLS7H5&s=${value}`, { mode: 'cors' });
      const gifData = await response.json();
      img.src = gifData.data.images.original.url;
    // en caso de que el buscador este vacio, busca labradores
    } else {
      loadImage('labrador');
    }
  } catch {
    img.src = 'img/notfound.png';
  }
};
const buscar = document.querySelector('#buscar');
const valor = document.querySelector('#valor');
buscar.addEventListener('click', () => {
  loadImage(valor.value);
});
img.addEventListener('click', () => {
  loadImage(valor.value);
});
window.onload = loadImage();
