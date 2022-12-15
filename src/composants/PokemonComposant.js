import { useEffect } from "react";
import { Container, Typography, Button} from '@mui/material/';
import { useNavigate } from "react-router-dom";
export function PokemonComposant() {
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

    
}, );

  const handleRetour = () => {
    navigate(`/pokedex`);
  };

  const handleHome = () => {
    navigate(`/`);
  };
  document.body.style.backgroundImage = `url("/assets/img/oui.jpg")`
  
return ( 
  
    <div className="backgroundPoke">
      
      <Button variant="contained" color="success" onClick={handleHome}> Retour au menu principal</Button>
        <Container fixed>
        <center>
          <Typography color="#ffffff" fontFamily= "Raleway" variant="h1" id={"nomPokemon"}></Typography>
        </center>
        <center>
          <div>
              <Typography color="#ffffff" fontFamily= "Raleway" variant="h5">Voici l'official art work du pokemon : </Typography>
              <img id="img" alt="pokemon voulu" src={urlComplet}></img>
          </div>
          <Button variant="contained" color="success" onClick={handleRetour}> Retour au pokedex</Button>
        </center>   
            
            
            
          
        </Container>
        
      </div>
      
  )
}
