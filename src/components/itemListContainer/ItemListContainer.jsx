import { useEffect } from "react";
import { useState } from "react"
import { products } from "../../mock/products";
import { ItemList } from "./itemList/ItemList";
import {useParams} from 'react-router-dom'

export const ItemListContainer = () => {

    const {categoria} = useParams()

    const [productList, setproductList] = useState([])

    const getProducts = () => new Promise((resolve, reject) =>{
        if (categoria) {
        setTimeout(() => resolve(products.filter(item => item.category === categoria)), 2000);
        } else {
            setTimeout(() => resolve(products), 2000)
        }
    })

    useEffect(() => {
        getProducts()
        .then(products => setproductList(products))
        .catch(error => console.log(error))
    }, [categoria])

    return (
        <ItemList productList={productList}/>
    )
}