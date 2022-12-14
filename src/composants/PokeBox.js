import {Grid, Card, IconButton, CardHeader} from '@mui/material/';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useDispatch, useSelector } from "react-redux";
import { addCard, removeCard } from "../store";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


export function PokeBox({i, name, checked}) {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(checked);
  const [isFav, setIsFav] = useState();
  const [img, setImg] = useState();
  const [type, setDataType] = useState();
  const [imgbg, setDataImgbg] = useState();
  const [id, setId] = useState();
  let color = 'primary.dark';
  let logo = '/assets/logo/Plante.png'; 

  const dispatch = useDispatch();
  const pageFavorisState = useSelector((state) => state.pokemonFav);

  useEffect(() => {
  let include = pageFavorisState.find((card) => card.name === name);
      if (include) {
        setIsChecked(true);
      }
      if (!!isChecked) {
        setIsFav(true);
      } else {
        setIsFav(false);
      }
    });

    useEffect(() =>{
      let temporaireType;
      let imgTemp = 0;
      let type = 0; 
      let idTemp = 0;

      fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((response) => response.json())
        .then((data) => {
          imgTemp = data.sprites.front_default
          type = data.types[0].type.name
          idTemp = data.id
        switch(type) {
          case 'grass' :
            color = '#4caf50'
            logo = 'assets/logo/Plante.png'
            break;
          case 'normal' : 
            color = '#9e9e9e'
            logo = 'assets/logo/normal.png'
            break;
          case 'poison' :
            color = '#673ab7'
            logo = 'assets/logo/Poison.png'
            break;
          case 'psychic' : 
            color = '#ff4081'
            logo = 'assets/logo/Psy.png'
            break;
          case 'ground' :
            color = '#632800'
            logo = 'assets/logo/Sol.png'
            break;
          case 'ice' : 
            color = '#b2ebf2'
            logo = 'assets/logo/Glace.png'
            break;
          case 'fire' :
            color = '#d50000'
            logo = 'assets/logo/Fire.png'
            break;
          case 'rock' : 
            color = '#a1887f'
            logo = 'assets/logo/Roche.png'
            break;
          case 'dragon' :
            color = '#1a237e'
            logo = 'assets/logo/Dragon.png'
            break;
          case 'water' : 
            color = '#2196f3'
            logo = 'assets/logo/Eau.png'
            break;
          case 'bug' :
            color = '#8bc34a'
            logo = 'assets/logo/Insecte.png'
            break;
          case 'dark' : 
            color = '#212121'
            logo = 'assets/logo/Tenebres.png'
            break;
          case 'fighting' :
            color = '#bf360c'
            logo = 'assets/logo/Combat.png'
            break;
          case 'ghost' : 
            color = '#3f51b5'
            logo = 'assets/logo/Spectre.png'
            break;
          case 'steel' :
            color = '#607d8b'
            logo = 'assets/logo/Acier.png'
            break;
          case 'flying' : 
            color = '#bbdefb'
            logo = 'assets/logo/Vol.png'
            break;
          case 'electric' :
            color = '#ffc107'
            logo = 'assets/logo/Electrique.png'
            break;
          case 'fairy' : 
            color = '#f48fb1'
            logo = 'assets/logo/Fee.png'
            break;
          default :
            color = '#ff6e40'
            break;
          }
          console.log(color);
        temporaireType = color;
        setDataImgbg(logo)
        setImg(imgTemp);
        setDataType(temporaireType)
        setId(idTemp)
        });
        
    } )

    const handleClick = () => {
      navigate(`../pokemon/${id}`);
    };
  
    const handleFavori = (event) => {
      if (!isChecked) {
        setIsChecked(true);
        dispatch(
          addCard({
            id: i,
            name: name,
            isChecked: true,
          })
        );
        console.log("ajouté aux favoris");
      } else {
        if (event.target.baseURI.includes("HomePage")) {
          dispatch(removeCard(name));
        } else {
          setIsChecked(false);
          dispatch(removeCard(name));
          console.log("suprimé des favoris");
        }
      }
    };

    return (
        <Grid item xs={3}>
            <Card sx={{backgroundColor: type,
              '&:hover': {
                backgroundColor: 'primary.main',
                opacity: [1, 1, 0.95],
              }}}>
                <CardHeader action={ 
                  <IconButton onClick={handleFavori}>
                    {isFav ? <StarIcon /> : <StarBorderIcon />}
                  </IconButton>
                  
                }> 
                </CardHeader>
                
              <a style={{ 
                color: '#FFFF', 
                textDecoration: 'none', 
                verticalAlign: 'middle', 
                fontFamily: "Raleway"
                }}>
                <center>
                  <div key={i} onClick={handleClick}>
                    <img src={img}></img><p>{id} : {name} <img src={imgbg} width='50'/></p>
                    
                  </div>
                </center>
              </a>
            </Card>
          </Grid>
    )
    
}