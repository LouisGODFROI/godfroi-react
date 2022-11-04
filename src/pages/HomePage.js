//Bouton pokedex 

import { cloneElement } from "react"
import App from "../App"
import { ComposantPokemon } from "../composants/pokemonComposant"

export function HomePages() {
    return(
        
        <div>
            <h1>Bienvenue dans le monde de pokemon</h1>
            <nav>
                <ul>
                <li>
                    <a href={'pokedex'}>Pokedex</a>
                </li>
                <li>
                    <a href={'prismillon'}>Prismillon</a>
                </li>
                </ul>
            </nav>
        </div>
    )
}
/*<script>
                let div = document.createElement("div");
                let boutonPokedex = document.createElement("button");
                div.appendChild(boutonPokedex);
        </script>*/
