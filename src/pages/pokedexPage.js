import { useState, useEffect } from "react";
import {Grid, Container, Button} from '@mui/material/';
import { PokeBox } from "../composants/PokeBox";
import { NavbarPoke } from "../composants/NavbarPoke";

export function ComposantPokemon() {
  const [tab, setData] = useState([0]);
  const [tabImg, setDataImg] = useState([0]);
  const [tabType, setDataType] = useState([0]);
  let limit = 20;
  let urlPage = window.location.href.split("/")
  let offset = urlPage[urlPage.length-1];
  offset = parseInt(offset);
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`;
  const urlFin = '.png';
  let color = 'primary.dark';
  const h1 = 'Le Pokedex';
  const h2 = 'Ici, vous retrouvez la liste des Pokemon'
  useEffect(() => {
    let tabTemporaire = [];
    let tabTemporaireType = [];
    let tabImgTemp = [];
    let i = 0;
    let type = []; 

    fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        i += offset
        data.results.forEach(element => {
          i += 1
          tabTemporaire.push(element.name)
          tabImgTemp.push(url+i+urlFin)
        });
        setData(tabTemporaire);
        setDataImg(tabImgTemp);
        console.log(tabTemporaire);
      });
      
    for (let j = 1; j <= limit; j++) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${j+offset}/`)
      .then((response) => response.json())
      .then((data) => {
        type = data.types[0].type.name
      switch(type) {
        case 'grass' :
          color = '#4caf50'
          break;
        case 'normal' : 
          color = '#9e9e9e'
          break;
        case 'poison' :
          color = '#673ab7'
          break;
        case 'psychic' : 
          color = '#ff4081'
          break;
        case 'ground' :
          color = '#632800'
          break;
        case 'ice' : 
          color = '#b2ebf2'
          break;
        case 'fire' :
          color = '#d50000'
          break;
        case 'rock' : 
          color = '#a1887f'
          break;
        case 'dragon' :
          color = '#1a237e'
          break;
        case 'water' : 
          color = '#2196f3'
          break;
        case 'bug' :
          color = '#8bc34a'
          break;
        case 'dark' : 
          color = '#212121'
          break;
        case 'fighting' :
          color = '#bf360c'
          break;
        case 'ghost' : 
          color = '#3f51b5'
          break;
        case 'steel' :
          color = '#607d8b'
          break;
        case 'flying' : 
          color = '#bbdefb'
          break;
        case 'electric' :
          color = '#ffc107'
          break;
        case 'fairy' : 
          color = '#f48fb1'
          break;
        default :
          color = '#ff6e40'
          break;
        }
        console.log(color);
      tabTemporaireType[j - 1] = color;
      });
      setDataType(tabTemporaireType)
      tabType.forEach(element => console.log(element))
    }
    
  }, []);
  return ( 
    <Container fixed>
      <div>
        <center>
          <NavbarPoke h1={h1} h3={h2}></NavbarPoke>
            
              <Grid container spacing={2} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {tab.map((name, i)=> (
                  <PokeBox name={name} i={i} tabType={tabType} offset={offset} tabImage={tabImg}></PokeBox>
                ))}
              </Grid>

          <div>
          <br/>
            <Button variant="contained" color="success" href={`../pokedex/${offset==0? 0 : parseInt(offset)-20}`}> 
              {"<< précédent"}   
            </Button>
            &#160;&#160;&#160;&#160;&#160;
            <Button variant="contained" color="success" href={'/'}> Retour au menu principal</Button>
            &#160;&#160;&#160;&#160;&#160;
            <Button variant="contained" color="success" href={`../pokedex/${offset==880? 880 : parseInt(offset)+20}`}> 
              {"suivant >>"}
            </Button>
            <div><br/></div>
          </div>
        </center>
      </div>
    </Container>
  )
}