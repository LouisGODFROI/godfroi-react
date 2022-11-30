import { Provider } from "react-redux";

import Counter from "../composants/Counter";
import History from "../composants/History";
import {store} from "../store"
import {Typography} from '@mui/material/';
 
 export function BookMarkComposant (){
    return (
    <Provider store={store}>
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
    )
 }
 