import { useState, useEffect } from "react";
import {Grid, Container, Button} from '@mui/material/';
import { PokeBox } from "./PokeBox";
import { NavbarPoke } from "./NavbarPoke";
import { useNavigate } from "react-router-dom";


export function PokedexComposant() {
  const [tab, setData] = useState([0]);
  const [pageSuivante, setPageSuivante] = useState();
  const [pagePrecedente, setPagePrecedente] = useState([0]);
  let limit = 20;
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
    let i = 0;
    let offset = 0;
    offset = parseInt(offset);

    fetch(urlPage)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        let urlSuivant = data.next
        console.log(urlSuivant)
        i += offset
        data.results.forEach(element => {
          i += 1
          tabTemporaire.push(element)
        });
        setData(tabTemporaire);
        console.log(tabTemporaire);
        setPageSuivante(urlSuivant);
        setPagePrecedente(data.previous);
      });
    }


  return ( 
    <div className="image">
      <Container fixed>
        <div>
          <center>
            <NavbarPoke h1={h1} h3={h2}></NavbarPoke>
              
                <Grid container spacing={2} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                  {tab.map((element, i)=> (
                    <PokeBox name={element.name} i={i} isChecked={false}></PokeBox>
                  ))}
                </Grid>

            <div>
            <br/>
            <div spacing={2}>
              <Button variant="contained" color="success" onClick={() => fetchPokemon(`${pagePrecedente}`)}> 
                {"<< précédent"}   
              </Button>
              <Button variant="contained" color="success" onClick={handleHome}> Retour au menu principal</Button>
              <Button variant="contained" color="success" onClick={() => fetchPokemon(`${pageSuivante}`)}> 
                {"suivant >>"}
              </Button>
              </div>
            </div>
          </center>
        </div>
      </Container>
    </div>
  )
}