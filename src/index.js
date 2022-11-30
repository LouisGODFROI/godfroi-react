import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import { ComposantPokemon } from './pages/pokedexPage';
import { HomePages } from './pages/HomePage';
import { ComposantPrismillon } from './pages/prismillonPage';
import { PokemonPage } from './pages/pokemonPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePages/>,
  },
  {
    path: "/pokedex/:offset",
    element: <ComposantPokemon/>,
  },
  {
    path: "/pokemon/:offset",
    element: <PokemonPage/>,
  },
  {
    path: "/prismillon",
    element: <ComposantPrismillon/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
