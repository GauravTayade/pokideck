import {Button} from "@nextui-org/react";

const ComponentBtnPokemonInfo= (props) => {
    return(
      <Button size="md" onClick={()=>props.getPokemonDetails(props.pokemonId)} fullWidth={true} variant="shadow" color="secondary" onPress={props.onOpen}>View Info</Button>
    )
}

export default ComponentBtnPokemonInfo;

