import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePages } from './pages/HomePage';
import { ComposantPrismillon } from './pages/prismillonPage';
import { PokemonPage } from './pages/PokemonPage';
import { Provider } from "react-redux";
import {store} from "./store"
import { PagePokedex } from './pages/PagePokedex';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<HomePages />} />
          <Route path="/" element={<HomePages />} />
          <Route path="/pokedex" element={<PagePokedex />} />
          <Route path="/pokemon/:offset" element={<PokemonPage />}/>
          <Route path="/prismillon" element={<ComposantPrismillon />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
