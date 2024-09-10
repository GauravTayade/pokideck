'use client'

import axios from "axios";
import {useEffect, useState} from "react";
import ComponentPokemonCard from "@/app/components/ComponentPokemonCard";
import ComponentNoRecords from "@/app/components/ComponentNoRecords";
import {Button} from "@nextui-org/react";

export default function Home() {

  const [pokemonList, setPokemonList] = useState([]);
  const [url,setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState(null);
  const [prevUrl, setPrevUrl] = useState(null);

  const getPokemon = async (pokemon) => {
    await axios.get(pokemon.url).then(response => {
      setPokemonList(prevState => {
        return [...prevState, response.data]
      })
    }).catch(error => {
      console.log(error);
    })
  }

  const getPokemons = () => {
    axios.get(url).then(async response => {
      setPokemonList([])
      if (response.data.previous) {
        setPrevUrl(response.data.previous)
      }
      if (response.data.next) {
        setNextUrl(response.data.next)
      }
      if (response.status === 200 && response.data.results.length > 0) {
        await response.data.results.map(async pokemon => {
          await getPokemon(pokemon)
        })
      }
    })
  }

  const handlePreviousClick = () =>{
    setUrl(prevUrl)
  }

  const handleNextClick = () =>{
    setUrl(nextUrl)
  }

  useEffect(() => {
    getPokemons()
  }, [url]);

  return (
    <div className="w-screen h-screen overflow-hidden">
      <div className="w-full h-full overflow-y-scroll scrollbar-hide">
      <div className="w-full h-16 flex items-center justify-around">
          <Button className="uppercase" variant="light" color="secondary" onClick={handlePreviousClick}>Previous</Button>
          <Button className="uppercase" variant="light" color="secondary" onClick={handleNextClick}>Next</Button>
      </div>
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
      </div>
    </div>
  );
}
