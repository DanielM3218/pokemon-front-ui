
import './App.css'
import React, { useEffect, useState } from 'react';
import { getAllPokemon } from './api/api';  // Import the API utility

const App: React.FC = () => {
    const [pokemon, setPokemon] = useState<any[]>([]);

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const data = await getAllPokemon();
                setPokemon(data);  // Store the fetched data in state
            } catch (error) {
                console.error('Error fetching Pokémon:', error);
            }
        };

        fetchPokemon();
    }, []);  // Empty array ensures it runs only once when the component mounts

    return (
        <div>
            <h1>Pokémon List</h1>
            <ul>
                {pokemon.map((poke) => (
                    <li key={poke.id}>{poke.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;
