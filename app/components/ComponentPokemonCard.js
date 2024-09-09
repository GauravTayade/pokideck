import {Card, CardHeader, CardBody, Image, Button, CardFooter} from "@nextui-org/react";
import ComponentBtnPokemonInfo from "@/app/components/ComponentBtnPokemonInfo";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFire} from "@fortawesome/free-solid-svg-icons";

const ComponentPokemonCard = (props) =>{
    return(
        <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny text-gray-700 uppercase font-bold">{props.pokemon.name}</p>
                <FontAwesomeIcon className="text-gray-700 text-xl px-2" icon={faFire}></FontAwesomeIcon>
                {props.pokemon.abilities.map((ability,index)=> {
                   return(<small className="text-default-500" key={index}>{ability.ability.name}</small>)
                })}
            </CardHeader>
            <CardBody className="overflow-visible flex items-center justify-center">
                <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={props.pokemon.sprites.front_default}
                    width={180}
                />
            </CardBody>
            <CardFooter>
                <ComponentBtnPokemonInfo/>
            </CardFooter>
        </Card>
    )
}

export default ComponentPokemonCard;