export let input = document.getElementById("input");
export let fact = document.getElementById("fact");
    
export async function catFacts(){
    let response = await fetch(`https://meowfacts.herokuapp.com/`);
    let quote = await response.json(); 
    console.log(quote)
    fact.textContent = quote.data
  }  

input.addEventListener("keydown", catFacts)