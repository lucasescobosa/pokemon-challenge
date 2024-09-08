import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  LinearProgress,
  linearProgressClasses,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import { Pokemon } from "../types";

const PokemonCard: React.FC<{ pokemon: Pokemon }> = ({ pokemon }) => {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[200],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: "#4eff1a",
    },
  }));

  const renderStats = (statValue: number) => (
    <Box sx={{ width: "100%", mb: 1 }}>
      <BorderLinearProgress
        variant="determinate"
        value={(statValue / 6) * 100}
      />
    </Box>
  );

  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={pokemon.imageUrl}
        alt={pokemon.name}
        style={{ objectFit: "contain" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {pokemon.name}
        </Typography>
        <Divider />
        <Typography variant="caption" color="textPrimary">
          HP
          {renderStats(pokemon.hp)}
          Attack
          {renderStats(pokemon.attack)}
          Defense
          {renderStats(pokemon.defense)}
          Speed
          {renderStats(pokemon.speed)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PokemonCard;
