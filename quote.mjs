export async function catFacts(){
  
  let res = await fetch(`https://meowfacts.herokuapp.com/`);

  let quote = await res.json(); 
  console.log(quote)
}  
