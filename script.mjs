import * as card from "./card.mjs";


const API_KEY = "live_gV9MjVkyJTBFUW8gd3h0AHho6naaaX9jsUmSU8PMQ6UpzdLhIAbhbsV3HuzqA02S";

let dogList = document.getElementById("dogList")


async function breedSelect() {
    let res = await fetch(`https://api.thedogapi.com/v1/breeds`, {  //GET request using fetch()
      header: { "x-api-key": API_KEY }, 
    });
    let dogBreeds = await res.json(); 
    // console.log(dogBreeds);
  
    dogBreeds.forEach((breed) => {  
      let selection = document.createElement(`option`); 
      selection.setAttribute(`value`, breed.id); 
      selection.textContent = breed.name; 
      dogList.appendChild(selection); 
    //   console.log(selection);
    });

    dogList.addEventListener(`change`, cardHandler)
}
  
  breedSelect();


  async function cardHandler(e) {
    card.clear()
    let breedID = e.target.value; 
    let response = await fetch(
      `https://api.thedogapi.com/v1/images/search?limit=1&breed_ids=${breedID}&api_key=${API_KEY}` 
    );
  
    let dogData = await response.json();
    console.log(dogData)
  
    dogData.forEach((i) => {
      console.log(i)
      let imgSrc = i.url; 
      card.createCardlItem(imgSrc); 
      
    let cardTitle = document.getElementById("card-title")
    cardTitle.textContent = `${i.id}`;

    })
}
  
  