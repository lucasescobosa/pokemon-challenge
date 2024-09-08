import { useState } from "react";
import {
  Typography,
  Container,
  Grid2 as Grid,
  Button,
  Alert,
  Stack,
} from "@mui/material";
import { PokemonList, PokemonCard } from "./components";

import type { Pokemon } from "./types";

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [opponentPokemon, setOpponentPokemon] = useState<Pokemon | null>(null);
  const [winner, setWinner] = useState("");

  const handleStartBattle = async () => {
    if (selectedPokemon && opponentPokemon) {
      const battleData = {
        pokemon1Id: selectedPokemon.id,
        pokemon2Id: opponentPokemon.id,
      };

      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/pokemon/battle`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(battleData),
          }
        );

        if (response.ok) {
          const result = await response.json();
          setWinner(`${result.winner} wins!`);
        } else {
          console.error("Error in request:", response.statusText);
        }
      } catch (error) {
        console.error("Error in battle:", error);
      }
    }
  };

  return (
    <Container>
      <Stack spacing={2}>
        <Typography variant="h4">Battle of Pokemon</Typography>

        <PokemonList
          setWinner={setWinner}
          setSelectedPokemon={setSelectedPokemon}
          setOpponentPokemon={setOpponentPokemon}
        />

        {winner && (
          <Alert icon={false} variant="filled" severity="info">
            {winner}
          </Alert>
        )}

        {selectedPokemon && opponentPokemon && (
          <>
            <Grid
              container
              spacing={3}
              justifyContent="center"
              alignItems="center"
            >
              <Grid size={4}>
                <PokemonCard pokemon={selectedPokemon} />
              </Grid>
              <Grid size={4} sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleStartBattle}
                  disabled={winner !== ""}
                >
                  Start Battle
                </Button>
              </Grid>
              <Grid size={4}>
                <PokemonCard pokemon={opponentPokemon} />
              </Grid>
            </Grid>
          </>
        )}
      </Stack>
    </Container>
  );
}

export default App;
