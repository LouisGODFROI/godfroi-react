import {Button, Container, Typography, Grid} from '@mui/material/';
import { NavbarPoke } from '../composants/NavbarPoke';
import React from "react";
import { useNavigate } from "react-router-dom";
import FavorisComposant from '../composants/FavorisComposant';

export function HomePages() {
    const navigate = useNavigate();

    const handlePokedex = () => {
        navigate(`pokedex`);
    };

    const handlePrismillon = () => {
        navigate(`prismillon`);
    };
    return(
        <div className='backgroundHome'>
            <Container fixed>
                <NavbarPoke h1={"Bienvenue dans le monde de pokemon"}></NavbarPoke> <br/>
                <center>
                <Typography fontFamily= "Raleway" variant="h4" color='#4B0082'>Vous pouvez cliquer sur les images afin d'accéder aux pages du site </Typography> <br/>
                    <Grid container center>
                        <Typography fontFamily= "Raleway" variant="h5" color='#4B0082'>Le pokedex : </Typography>
                        <Button variant="text" color="success" onClick={handlePokedex}> <img src="../assets/img/pokedex.png" width='250'></img></Button> 
                        <Typography fontFamily= "Raleway" variant="h5" color='#4B0082'>Prismillon : </Typography>
                        <Button variant="text" color="success" onClick={handlePrismillon}> <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/666.png' width='300'></img></Button>
                    </Grid>
                        
                    <br/><br/>
                    <div>
                        <Typography fontFamily= "Raleway" variant="h5" color='#4B0082'>Voici la liste de vos favoris : </Typography>
                        <FavorisComposant/>
                    </div>
                </center>
            </Container>
        </div>
    )
}

