import { useState, useEffect } from "react";
import {Grid, Container, Button, Typography} from '@mui/material/';
import { PokeBox } from "./PokeBox";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


export function PokedexComposant() {
  const [tab, setData] = useState([0]);
  const [pageSuivante, setPageSuivante] = useState();
  const [pagePrecedente, setPagePrecedente] = useState([0]);
  const limit = 20;
  const h1 = 'Le Pokedex';
  const h2 = 'Ici, vous retrouvez la liste des Pokemon';
  const navigate = useNavigate();

  const handleHome = () => {
    navigate(`/`);
  };

  useEffect(() => {
    fetchPokemon(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${limit}`)
  }, []);

  let fetchPokemon = (urlPage) => { 
    let tabTemporaire = [];

    fetch(urlPage)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        let urlSuivant = data.next
        console.log(urlSuivant)
        data.results.forEach(element => {
          tabTemporaire.push(element)
        });
        setData(tabTemporaire);
        console.log(tabTemporaire);
        setPageSuivante(urlSuivant);
        setPagePrecedente(data.previous);
      });
    }

    document.body.style.backgroundImage = `url("/assets/img/cave.jpg")`

  return ( 
    <div>
      <Button variant="contained" color="success" onClick={handleHome}> Retour au menu principal</Button>
      <Container fixed>
        <div>
          <center>
          <Typography color="#ffffff" fontFamily= "Raleway" variant="h1"> {h1}</Typography>
          <Typography color="#ffffff" fontFamily= "Raleway" variant="h3"> {h2}</Typography>  
                <Grid container spacing={2} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                  {tab.map((element, i)=> (
                    <PokeBox name={element.name} i={i} isChecked={false}></PokeBox>
                  ))}
                </Grid>

            <div>
            <br/>
            <div spacing={30}>
              <Button variant="contained" color="success" onClick={() => fetchPokemon(`${pagePrecedente}`)}> 
                <ArrowBackIcon/> précédent  
              </Button>
              
              <Button variant="contained" color="success" onClick={() => fetchPokemon(`${pageSuivante}`)}> 
                suivant <ArrowForwardIcon/>
              </Button>
              </div> <br/>
            </div>
          </center>
        </div>
      </Container>
    </div>
  )
}