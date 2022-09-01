import React, {useEffect, useState} from "react";
import ItemList from "./ItemList";

const ItemContainer = () => {
    const [pokemones, setPokemones] = useState([]);

    useEffect(() => {

        const getPokes = async () =>{

            const misDatos = await fetch (
                'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'
            )
            
            const response = await misDatos.json();
            setPokemones(response.results)
        }

        getPokes();

    }, [])

    return <ItemList list = {pokemones} />
}

export default ItemContainer