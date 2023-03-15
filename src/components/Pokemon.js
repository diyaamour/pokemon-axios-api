import axios from 'axios';
import React, { useState} from 'react';


export const Pokemon = () => {
    const [pokemons, setPokemons] = useState([]);

    const fetchPokemon = () => {
        axios
            .get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => {
                console.log(response);
                setPokemons(response.data.results);
            })
            .catch((err) => {
                console.log(err);
            })
    };


    return (
        <div className="flex-col align-items-center text-center">
            <button  onClick={fetchPokemon} style={{backgroundColor:"grey", color:'white', borderRadius:5, marginTop:20, marginBottom:20}}>Fetch Pokemons</button>
            {pokemons.map((pokemon) => {
                const { id, name } = pokemon;

                return (
                    <div key={id} className="w-25pct mb-md shadow rounded">
                        <h2> {name}</h2>
                    </div>
                );
            })}
        </div>
    );
};