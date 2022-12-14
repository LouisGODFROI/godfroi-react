import React from "react";
import { useSelector } from "react-redux";
import { Typography, Grid } from '@mui/material/';
import { PokeBox } from "./PokeBox";

const FavorisComposant = () => {
  const store = useSelector((state) => state.pokemonFav);

  if (store.length === 0) {
    return (
      <>
        <Typography fontFamily= "Raleway" variant="h5" color='white'> Il n'y a pour le moment pas de favoris </Typography>
      </>
    );
  } else {
    return (
      <>
        <Grid container spacing={2} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {store.map((card) => (
            <PokeBox name={card.name} ></PokeBox>
          ))}
        </Grid>
      </>
    );
  }
};

export default FavorisComposant;