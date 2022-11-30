import {Button, Container, Typography} from '@mui/material/';

import { cloneElement } from "react"
import App from "../App"
import { NavbarPoke } from '../composants/NavbarPoke';
import { ComposantPokemon } from "./pokedexPage"
import React, { PureComponent } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import Counter from "../composants/Counter";
import History from "../composants/History";
import reducers from "../reducers";

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
                    <br/><br/>
                    <Provider store={createStore(reducers)}>
                        <div>
                        <Typography fontFamily= "Raleway" variant="h2">
                            Pokemon Favoris 
                        </Typography>
                        <div>
                            <Counter />
                            <History /> 
                        </div>
                        </div>
                    </Provider>
                </center>
            </Container>
        </div>
    )
}

render(<App />, document.getElementById("root"));

