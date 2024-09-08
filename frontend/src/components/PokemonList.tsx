import React, { useEffect, useState } from "react";
import type { Pokemon, PokemonListProps } from "../types";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid2 as Grid,
  Typography,
} from "@mui/material";

const PokemonList: React.FC<PokemonListProps> = ({
  setWinner,
  setSelectedPokemon,
  setOpponentPokemon,
}) => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const getPokemons = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/pokemon`);
      const data = await response.json();
      setPokemonList(data);
    } catch (error) {
      console.error("Error getting Pokemons:", error);
    }
  };

  useEffect(() => {
    getPokemons();
  }, []);

  const handleSelectPokemon = (pokemon: any) => {
    setWinner("");
    setSelectedPokemon(pokemon);
    let opponent = pokemonList[Math.floor(Math.random() * pokemonList.length)];
    while (opponent.name === pokemon.name) {
      opponent = pokemonList[Math.floor(Math.random() * pokemonList.length)];
    }
    setOpponentPokemon(opponent);
  };
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Select your pokemon
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3} justifyContent="center">
          {pokemonList.map((pokemon) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2.4 }} key={pokemon.name}>
              <Card
                style={{ textAlign: "start", cursor: "pointer" }}
                onClick={() => handleSelectPokemon(pokemon)}
              >
                <CardMedia
                  component="img"
                  height="100"
                  image={pokemon.imageUrl}
                  alt={pokemon.name}
                  style={{ objectFit: "contain" }}
                />
                <CardContent>
                  <Typography variant="h6">{pokemon.name}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};
export default PokemonList;
