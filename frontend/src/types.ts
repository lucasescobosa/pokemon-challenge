export interface Pokemon {
  id: string;
  name: string;
  hp: number;
  attack: number;
  defense: number;
  speed: number;
  imageUrl: string;
}

export interface PokemonListProps {
  setWinner: (winner: string) => void;
  setSelectedPokemon: (pokemon: Pokemon) => void;
  setOpponentPokemon: (pokemon: Pokemon) => void;
}
