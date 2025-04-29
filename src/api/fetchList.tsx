
export type Pokemon = {
    pokedexNumber: number;
    name: string;
}

export async function getAllPokemons(): Promise<Pokemon[]> {
    const  response = await fetch("http://localhost:8080/api/pokemons")

    if (!response.ok) {
        throw new Error("Failed to fetch pokemons");
    }
    
    return response.json();
}