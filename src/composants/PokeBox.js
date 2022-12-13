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
  const [id, setId] = useState();
  let color = 'primary.dark';

  const dispatch = useDispatch();
  const pageFavorisState = useSelector((state) => state.PageFavoris);

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
        temporaireType = color;
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
                backgroundColor: 'success.main',
                opacity: [0.9, 0.8, 0.7],
              }}}>
              <CardHeader action={ 
                <IconButton onClick={handleFavori}>
                  {isFav ? <StarIcon /> : <StarBorderIcon />}
                </IconButton>
              }/>
              <a style={{ 
                color: '#FFFF', 
                textDecoration: 'none', 
                verticalAlign: 'middle', 
                fontFamily: "Raleway"
                }}>
                <center>
                  <div key={i} onClick={handleClick}><img src={img}></img><p>{id} : {name} </p></div>
                </center>
              </a>
            </Card>
          </Grid>
    )
    
}