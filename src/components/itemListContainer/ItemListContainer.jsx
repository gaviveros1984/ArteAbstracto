import { useEffect } from "react";
import { useState } from "react"
import { products } from "../../mock/products";
import { ItemList } from "../ItemList";

export const ItemListContainer = () => {
    const [productList, setproductList] = useState([])

    const getProducts = () => new Promise((resolve, reject) =>{
        setTimeout(() => resolve(products), 2000);
    })

    useEffect(() => {
        getProducts()
        .then(products => setproductList(products))
        .catch(error => console.log(error))
    }, [])

    return (
        <ItemList productList={productList}/>
    )
}