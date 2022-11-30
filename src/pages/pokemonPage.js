import { useState, useEffect } from "react";
import { NavbarPoke } from "../composants/NavbarPoke";
import {Grid, Container, Typography, Button} from '@mui/material/';
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "../App";
import reducers from "../reducers";
import { BookMarkComposant } from "../composants/BookMarkComposant";
export function PokemonPage() {
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/`;
    const urlFin = '.png';
    var urlcourante = document.location.href;
    let tabUrl = urlcourante.split("/");
    let num = tabUrl[tabUrl.length - 1];
    num = parseInt(num);
    let urlComplet = url + num + urlFin;

  useEffect(() => {

  fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
    .then((response) => response.json())
    .then((data) => {
      
      console.log(data)
      
      document.querySelector("#nomPokemon").innerHTML = data.name
    });
    
}, []);
return ( 
    <div>
        <Container fixed>
          <NavbarPoke id={"nomPokemon"}></NavbarPoke>
          <center>
            <div>
                <Typography fontFamily= "Raleway" variant="h5">Voici l'official art work du pokemon : </Typography>
                <img id="img" src={urlComplet}></img>
            </div>
            <Provider store={createStore(reducers)}>
              <div>
              <Typography fontFamily= "Raleway" variant="h5">
                  Pokemon Favoris 
              </Typography>
              <div>
                  <BookMarkComposant />
              </div>
              </div>
            </Provider>
            <Button variant="contained" color="success" href={'/'}> Retour au menu principal</Button>
            &#160;&#160;&#160;&#160;&#160;
            <Button variant="contained" color="success" href={`/pokedex/${parseInt(parseInt((num-1)/20)*20)}`}> Retour au pokedex</Button>
          </center>
        </Container>
        
      </div>
      
  )
}

render(<App />, document.getElementById("root"));