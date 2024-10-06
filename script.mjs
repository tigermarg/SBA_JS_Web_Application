//Import content from modules
import * as card from "./card.mjs";
import * as quote from "./quote.mjs"

const API_KEY = "live_gV9MjVkyJTBFUW8gd3h0AHho6naaaX9jsUmSU8PMQ6UpzdLhIAbhbsV3HuzqA02S";


async function breedSelect() {  //Use of async/await syntax
    alert(`Ready to find a fur-riend?`) //window alert
    let res = await fetch(`https://api.thecatapi.com/v1/breeds`);   //GET method using fetch
    let catBreeds = await res.json();   //breeds data

    //assign variables for html elements
    let catList = document.getElementById("catList")
    let buttons = document.querySelectorAll(".btn")

    catBreeds.forEach(breed => {    //loops through breeds data
        // console.log(dogBreeds)
        let selection = document.createElement('option');   //create element
        selection.setAttribute('value', breed.id);
        selection.textContent = breed.name;
        catList.appendChild(selection); //append element to selection form
    
    catList.addEventListener(`change`, cardHandler);    //add "change" event to form


    buttons.forEach(button => { //loop through origin buttons
        button.addEventListener("click", (e) => {   //add "click" event to buttons
            e.preventDefault(); 
            let filter = e.target.dataset.filter    //assign variable to filter value
            // console.log(filter)

        //filter is not displaying filtered breeds //click event works & filtered items are console-logging
        if(filter === "All"){
            catList.style.display = "block";
            }else{
                if(breed.origin === filter){
                        console.log(breed.origin)
                        catList.style.display = "block";
                    }else{
                        catList.remove(catList.breed)
                    }
                }
            
            }                    
        )
    })
})
}

breedSelect();


async function cardHandler(e) { //event handler for form's "change" event using async/await
    card.clear()    //imported clear function to clear previous image when selecting new breed

    let breedID = e.target.value;   //assigning variable to target value for each breed
    let response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=1&breed_ids=${breedID}&api_key=${API_KEY}`) //GET request using fetch()

    let catData = await response.json() //data from fetch request

   catData.forEach((i) => { //loop through data
    //   console.log(i)
      let imgSrc = i.url; //set url = image source
      card.createCardlItem(imgSrc);     //call on imported function to add image to card
    
    //textContent for each breed
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