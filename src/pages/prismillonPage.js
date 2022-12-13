import { useState, useEffect } from "react";
import { NavbarPoke } from "../composants/NavbarPoke";
import {Grid, Container, Typography, Button} from '@mui/material/';
import { PrismillonBox } from "../composants/PrismillonBox";
import { useNavigate } from "react-router-dom";

export function ComposantPrismillon() {
  const [tab, setData] = useState([0]);
  const [tabImg, setDataImg] = useState([0]);
  const h3 = "Ici, vous retrouvez toutes les formes du pokemon"
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/666`;
  const urlFin = '.png';
  const navigate = useNavigate();

  useEffect(() => {
    let i = 0;
    let tabTemporaire = [];
    let nom = [];
    let tabImgTemp = [];

  fetch(`https://pokeapi.co/api/v2/pokemon/666`)
    .then((response) => response.json())
    .then((data) => {
      
      console.log(data)
      
      document.querySelector("#nomPokemon").innerHTML = data.name
      data.forms.forEach(element => {
        i += 1
        tabTemporaire.push(element.name)
        nom = element.name.substr(8)
        tabImgTemp.push(url + nom + urlFin)
      });
      setData(tabTemporaire);
      setDataImg(tabImgTemp)
      console.log(tabTemporaire);
    });
    
  },   []);

  const handleHome = () => {
    navigate(`/`);
  };

  return ( 
  <div className="backgroundHome">
      <Container fixed>
        <NavbarPoke id={"nomPokemon"} h3={h3}></NavbarPoke>
        <center>
          <img id="img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/666.png"></img>
          <div>
            <Typography fontFamily= "Raleway" variant="h5">Voici la liste des différentes formes de prismillon :</Typography>
          </div>  
            <center>
            <Grid container spacing={2} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              {tab.map((name, i)=> (
                <PrismillonBox name={name} i={i} tabImage={tabImg}></PrismillonBox>
              ))}
            </Grid><br/>
            <Button variant="contained" color="success" onClick={handleHome}> Retour au menu principal</Button> 
            </center>
        </center>
      </Container>
     
    </div>
    
)
}