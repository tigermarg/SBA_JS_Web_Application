export function createCardlItem(imgSrc){
  let cardImage = document.getElementById("cardImage");
  let image = document.createElement("img");
  image.src = imgSrc;
  cardImage.appendChild(image)

}

export function clear() {
  let cardImage = document.getElementById("cardImage");
  while (cardImage.firstChild) {
    cardImage.removeChild(cardImage.firstChild);
  }
}