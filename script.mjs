import * as card from "./card.mjs";
import * as quote from "./quote.mjs"

const API_KEY = "live_gV9MjVkyJTBFUW8gd3h0AHho6naaaX9jsUmSU8PMQ6UpzdLhIAbhbsV3HuzqA02S";


async function breedSelect() {
    alert(`Ready to find a fur-riend?`)
    let res = await fetch(`https://api.thecatapi.com/v1/breeds`);
    let catBreeds = await res.json(); 

    let catList = document.getElementById("dogList")
    let buttons = document.querySelectorAll(".btn")

    catBreeds.forEach(breed => {
        // console.log(dogBreeds)
        let selection = document.createElement('option');
        selection.setAttribute('value', breed.id);
        selection.textContent = breed.name;
        catList.appendChild(selection);
    
    catList.addEventListener(`change`, cardHandler);


    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            let filter = e.target.dataset.filter
            console.log(filter)

        if(filter === "All"){
            catList.style.display = "block";
            }else{
                if(breed.origin === filter){
                        console.log(breed.origin)
                        catList.style.display = "block";
                    }else{
                        catList.style.display = "none"
                    }
                }
            
            }                    
        )
    })
})
}

breedSelect();


async function cardHandler(e) {
    card.clear()

    let breedID = e.target.value; 
    let response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=1&breed_ids=${breedID}&api_key=${API_KEY}`) //GET request using fetch()

    let catData = await response.json()

   catData.forEach((i) => {
      console.log(i)
      let imgSrc = i.url; 
      card.createCardlItem(imgSrc); 
      
    let cardTitle = document.getElementById("card-title");
    cardTitle.textContent= `${i.breeds[0].name}`;
   
    let p1 = document.querySelector(`p1`);
    p1.innerHTML= `Origin: ${i.breeds[0].origin}`

    let p2 = document.querySelector(`p2`);
    p2.innerHTML= `Weight: ${i.breeds[0].weight.imperial} lbs`

    let p3 = document.querySelector(`p3`);
    p3.innerHTML= `Personality: ${i.breeds[0].temperament}`

    let p4 = document.querySelector(`p4`);
    p4.innerHTML= `${i.breeds[0].description}`


    })

}