import {Button, Container} from '@mui/material/';
import { NavbarPoke } from '../composants/NavbarPoke';
import React from "react";
import { useNavigate } from "react-router-dom";
import ListeDeFavoris from '../composants/FavorisComposant';

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
                <NavbarPoke h3={"Bienvenue dans le monde de pokemon"}></NavbarPoke> <br/>
                <center>
                    <nav>
                        <Button variant="contained" color="success" onClick={handlePokedex}>Pokedex</Button> <br/><br/>
                        <Button variant="contained" color="success" onClick={handlePrismillon}>Prismillon</Button>
                    </nav>
                    <br/><br/>
                    <div>
                        <ListeDeFavoris/>
                    </div>
                </center>
            </Container>
        </div>
    )
}

