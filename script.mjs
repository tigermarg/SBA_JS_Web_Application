import * as card from "./card.mjs";


const API_KEY = "live_gV9MjVkyJTBFUW8gd3h0AHho6naaaX9jsUmSU8PMQ6UpzdLhIAbhbsV3HuzqA02S";


async function breedSelect() {
    let res = await fetch(`https://api.thedogapi.com/v1/breeds`);
    let dogBreeds = await res.json(); 

    let dogList = document.getElementById("dogList")
    let buttons = document.querySelectorAll(".btn")

    dogBreeds.forEach(breed => {
        // console.log(dogBreeds)
        let selection = document.createElement('option');
        selection.setAttribute('value', breed.id);
        selection.textContent = breed.name;
        dogList.appendChild(selection);
    
    dogList.addEventListener(`change`, cardHandler);

    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            let filter = e.target.dataset.filter
            console.log(filter)

        if(filter === "All"){
                dogList.style.display = "block";
            }else if(breed.breed_group === filter){
                console.log(breed.breed_group)
                        dogList.style.display = "block"
                    }else{
                        dogList.style.display = "none";
                    }
            }                    
        )
    })
})
}

breedSelect();


async function cardHandler(e) {
    card.clear()
    console.log(e)
    let breedID = e.target.value; 
    let response = await fetch(`https://api.thedogapi.com/v1/images/search?limit=1&breed_ids=${breedID}&api_key=${API_KEY}`) //GET request using fetch()

    let dogData = await response.json()

   dogData.forEach((i) => {
    //   console.log(i)
      let imgSrc = i.url; 
      card.createCardlItem(imgSrc); 
      
    let cardTitle = document.getElementById("card-title")
    cardTitle.textContent = `${i.id}`;

    })

    console.log(dogData)
}
  

  