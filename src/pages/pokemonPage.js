import { useState, useEffect } from "react";
import { NavbarPoke } from "../composants/NavbarPoke";
import {Grid, Container, Typography, Button} from '@mui/material/';
import { PrismillonBox } from "../composants/PrismillonBox";

export function PokemonPage() {
    const [tab, setData] = useState([0]);
    const [tabImg, setDataImg] = useState([0]);
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/`;
    const urlFin = '.png';
    var urlcourante = document.location.href;
    let tabUrl = urlcourante.split("/");
    let num = tabUrl[tabUrl.length - 1];
    num = parseInt(num);
    let urlComplet = url + num + urlFin;

  useEffect(() => {
    let i = 0;
    let tabTemporaire = [];
    let nom = [];
    let tabImgTemp = [];
    

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
            <Button variant="contained" color="success" href={'/'}> Retour au menu principal</Button>
            &#160;&#160;&#160;&#160;&#160;
            <Button variant="contained" color="success" href={`/pokedex/${parseInt(parseInt((num-1)/20)*20)}`}> Retour au pokedex</Button>
          </center>
        </Container>
        
      </div>
      
  )
}