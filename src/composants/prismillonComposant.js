import { useState, useEffect } from "react";

export function ComposantPrismillon() {
    const [tab, setData] = useState();
    //let div = document.createElement('div');
    let img = document.createElement('img'); 
    let tabTemporaire = [];
    let test

    useEffect(() => {

    fetch(`https://pokeapi.co/api/v2/pokemon/666`)
      .then((response) => response.json())
      .then((data) => {
        
        console.log(data)
        
        document.querySelector("#nomPokemon").innerHTML = data.name
        //document.appendChild(div);
      });
      //console.log(tab);
      console.log(test)
    
    /*img.setAttribute('src', tab.sprites.other.home.front_default);
    document.appendChild(img);*/
      
  }, []);
  return ( 
  <div>
    <h1 id="nomPokemon"></h1>
    <h2>Ici, vous retrouvez toutes les informations concernant le pokemon </h2>
    <img id="img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/666.png"></img>
  </div>
)
}