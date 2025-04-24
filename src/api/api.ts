import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';  


export const getAllPokemon = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/pokemon`, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching Pokémon:', error);
        throw error;
    }
};


export const getPokemonById = async (id: number) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/pokemon/${id}`);
        return response.data;  
    } catch (error) {
        console.error(`Error fetching Pokémon with ID ${id}:`, error);
        throw error;  
    }
};
