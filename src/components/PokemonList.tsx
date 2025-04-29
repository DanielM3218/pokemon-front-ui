import { useEffect, useState } from "react";
import { getAllPokemons, Pokemon } from "../api/fetchList";
import "../styles/PokemonList.css";

export default function PokemonList() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllPokemons()
      .then((data) => {
        setPokemonList(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="pokemon-list-container">
      <ul className="pokemon-list">
        {pokemonList.map((pokemon) => (
          <li key={pokemon.pokedexNumber} className="pokemon-item">
            #{pokemon.pokedexNumber} - {pokemon.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
