import React from "react";
import Item from './Item'

const ItemList = ({list}) => {
    return (
        <ul>
        {list.map((pokemon) => (
        <Item pokemon = {pokemon} key = {pokemon.name}/>
        ))}
        </ul>)
}

export default ItemList 