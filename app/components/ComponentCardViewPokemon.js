import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Image, Chip} from "@nextui-org/react";

const ComponentCardViewPokemon = (props) => {

  return (
    <>
      <Modal
        backdrop="opaque"
        isOpen={props.isOpen}
        onOpenChange={props.onOpenChange}
        classNames={{
          backdrop: "bg-gradient-to-t from-purple-900 to-purple-900/10 backdrop-opacity-20"
        }}
      >
        <ModalContent className="bg-black">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 uppercase">{props.pokemonDetail.name}</ModalHeader>
              <ModalBody>
                <div className="w-full flex">
                  <div className="w-1/2 h-3/6">
                    <Image
                      alt="Card background"
                      className="object-cover rounded-xl"
                      src={props.pokemonDetail.sprites.front_default}
                      width={180}
                    />
                  </div>
                  <div className="w-1/2 h-3/6 flex-col">
                    <div className="w-full h-2/6 flex gap-1 p-1">
                      <Chip color="warning">Experience:{props.pokemonDetail.base_experience}</Chip>
                      <Chip color="warning">Height:{props.pokemonDetail.height}</Chip>
                    </div>
                    <div className="w-full h-4/6 flex flex-wrap gap-1 p-1">
                      {props.pokemonDetail.stats.map(stats=>{
                        return <Chip color="secondary">{stats.stat.name}:{stats.base_stat}</Chip>
                      })}
                    </div>
                  </div>
                </div>
                <div className="w-full flex">
                <div className="w-1/2 h-3/6">
                      <h1 className="uppercase border-b-2">Abilities</h1>
                      {props.pokemonDetail.abilities.map(result => {
                        return <p className="text-white text-lg">{result.ability.name}</p>
                      })}
                    </div>
                    <div className="w-1/2 h-3/6">
                      <h1 className="uppercase border-b-2">Moves</h1>
                      {props.pokemonDetail.moves.slice(0, 5).map(result => {
                        return <p className="text-white text-lg">{result.move.name}</p>
                      })}
                    </div>
                  </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default ComponentCardViewPokemon;