'use client'

import axios from "axios";
import {useEffect, useState} from "react";
import ComponentPokemonCard from "@/app/components/ComponentPokemonCard";
import ComponentNoRecords from "@/app/components/ComponentNoRecords";
import {createRequestResponseMocks} from "next/dist/server/lib/mock-request";

export default function Home() {

  const [pokemonList,setPokemonList] = useState([]);

  const getPokemon =async (pokemon)=>{
   await axios.get(pokemon.url).then(response=>{
      setPokemonList(prevState => {return [...prevState,response.data]})
    }).catch(error=>{
      console.log(error);
    })
  }

  const getPokemons =  () => {
    axios.get("https://pokeapi.co/api/v2/pokemon/").then(async response => {
      setPokemonList([])
      if(response.status === 200 && response.data.results.length > 0){
        await response.data.results.map(async pokemon => {
         await getPokemon(pokemon)
        })
      }
    })
  }
    useEffect(() => {
        getPokemons()
    }, []);

  return (
      <div className="grid grid-cols-5 gap-4 p-4">
        {pokemonList.length > 0 ? pokemonList.map((pokemon) => {
              return (
                  <ComponentPokemonCard key={pokemon.id} pokemon={pokemon}/>
              )
            }
        ) :
        <ComponentNoRecords/>
        }
      </div>
  );
}
