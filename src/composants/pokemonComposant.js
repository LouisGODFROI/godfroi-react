import { useState, useEffect } from "react";

export function ComposantPokemon() {
  const [tab, setData] = useState([0]);
  const [tabImg, setDataImg] = useState([0]);
  let limit = 905;
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`;
  const urlFin = '.png';
  useEffect(() => {
    let tabTemporaire = [];
    let tabImg = [];
    let i = 0;

    fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${limit}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        data.results.forEach(element => {
          i += 1
          tabTemporaire.push(element.name)
          tabImg.push(url+i+urlFin)
        });
        setData(tabTemporaire);
        setDataImg(tabImg);
        console.log(tabTemporaire);
      });
      
    
  }, []);
  return ( 
    <div>
      <h1>Le Pokedex</h1>
      <h2>Ici, vous retrouvez toutes la liste des pokemon</h2>
      {tab.map((name, i)=> (
        <div key={i}><p>{i+1} : {name}</p> <img src={tabImg[i]}></img></div>
      ))}
    </div>
  )
}