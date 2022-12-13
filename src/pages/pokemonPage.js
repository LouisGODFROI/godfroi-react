import { useEffect } from "react";
import { NavbarPoke } from "../composants/NavbarPoke";
import { Container, Typography, Button} from '@mui/material/';
import { useNavigate } from "react-router-dom";
export function PokemonPage() {
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/`;
    const urlFin = '.png';
    var urlcourante = document.location.href;
    let tabUrl = urlcourante.split("/");
    let num = tabUrl[tabUrl.length - 1];
    num = parseInt(num);
    let urlComplet = url + num + urlFin;
    const navigate = useNavigate();

  useEffect(() => {

  fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
    .then((response) => response.json())
    .then((data) => {
      
      console.log(data)
      
      document.querySelector("#nomPokemon").innerHTML = data.name
    });

    
}, []);

  const handleRetour = () => {
    navigate(`/pokedex`);
  };

  const handleHome = () => {
    navigate(`/`);
  };
  
return ( 
    <div className="backgroundPoke">
        <Container fixed>
        <center>
          <NavbarPoke id={"nomPokemon"}></NavbarPoke>
          
            <div>
                <Typography color="#ffffff" fontFamily= "Raleway" variant="h5">Voici l'official art work du pokemon : </Typography>
                <img id="img" src={urlComplet}></img>
            </div>
              <div>
              <Typography fontFamily= "Raleway" variant="h5" color="#ffffff">
                  Pokemon Favoris 
              </Typography>
              </div>
            <Button variant="contained" color="success" onClick={handleHome}> Retour au menu principal</Button>
            &#160;&#160;&#160;&#160;&#160;
            <Button variant="contained" color="success" onClick={handleRetour}> Retour au pokedex</Button>
          </center>
        </Container>
        
      </div>
      
  )
}
