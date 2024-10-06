//Export functions 

export function createCardlItem(imgSrc){  //Create card image
  let cardImage = document.getElementById("cardImage");
  let image = document.createElement("img");
  image.src = imgSrc; //Get image from source
  cardImage.appendChild(image)  //Append image to cardImage element
}

export function clear() { //Use function to clear image as needed
  let cardImage = document.getElementById("cardImage");
  while (cardImage.firstChild) {
    cardImage.removeChild(cardImage.firstChild);
  }
}