import axios from "axios";

const ApiURL = import.meta.env.VITE_API;

export const getPokemon = () => {
  return axios
    .get(`${ApiURL}pokemon?limit=151`)
    .then((res) => res.data.results)
    .catch((err) => console.log(err));
};

export const getPokemonDetails = (pokemon) => {
  return axios
    .get(pokemon.url)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
