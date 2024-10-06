//Export contents of module

export let input = document.getElementById("input");
export let fact = document.getElementById("fact");
    
export async function catFacts(){   //Use async/await syntax 
    let response = await fetch(`https://meowfacts.herokuapp.com/`); //GET method using fetch to get random meowfacts from Web API
    let quote = await response.json(); 
    // console.log(quote)
    fact.textContent = quote.data //Insert quote in html element "fact"
  }  

input.addEventListener("keydown", catFacts) //Add keydown event to "input" button to generate random facts