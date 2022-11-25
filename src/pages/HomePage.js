import {Button, Container} from '@mui/material/';

import { cloneElement } from "react"
import App from "../App"
import { NavbarPoke } from '../composants/NavbarPoke';
import { ComposantPokemon } from "./pokedexPage"

export function HomePages() {
    return(
        <div>
            <Container fixed>
                <NavbarPoke h3={"Bienvenue dans le monde de pokemon"}></NavbarPoke> <br/>
                <center>
                    <nav>
                        <Button variant="contained" color="success" href={'pokedex/0'}>Pokedex</Button> <br/><br/>
                        <Button variant="contained" color="success" href={'prismillon'}>Prismillon</Button>
                    </nav>
                </center>
            </Container>
        </div>
    )
}

