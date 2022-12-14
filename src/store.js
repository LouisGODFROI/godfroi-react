import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const pageFavoris = createSlice({
  name: "pokemonFav",
  initialState: [],
  reducers: {
    addCard: (state, action) => {
      if (!state.includes(action.payload.id)) {
        state.push(action.payload);
      }
    },
    removeCard: (state, action) => {
      state = state.filter((it) => it.name !== action.payload);
      return state;
    },
  },
});

export const { addCard, removeCard } = pageFavoris.actions;

const filtre = createSlice({
  name: "filtres",
  initialState: [""],
  reducers: {
    addFilter: (state, action) => {
      state[0] = action.payload;
    },
  },
});

export const { addFilter } = filtre.actions;

export const store = configureStore({
  reducer: {
    pokemonFav: pageFavoris.reducer,
    filtres: filtre.reducer,
  },
});