const img = document.querySelector('img');
const loadImage = (value) => {
  if (value) {
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=R7F7GZ7VzLKhFYXgldz1WhPMJCVLS7H5&s=${value}`, { mode: 'cors' })
      .then((response) => response.json())
      .then((response) => {
        img.src = response.data.images.original.url;
      })
      .catch(() => {
        img.src = 'img/notfound.png';
      });
    // en caso de que el buscador este vacio, busca labradores
  } else {
    loadImage('labrador');
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
