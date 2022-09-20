import { useEffect, useState, useContext} from "react";
import { products } from "../../mock/products";
import { ItemList } from "./itemList/ItemList";
import {useParams} from 'react-router-dom';
import {DarkModeContext} from '../../context/DarkMode'

export const ItemListContainer = () => {

    const {categoria} = useParams()

    const [productList, setproductList] = useState([])
    const {darkMode, toggleDarkMode} = useContext(DarkModeContext)

    const getProducts = () => new Promise((resolve) =>{
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
        <div className={darkMode ? 'darkMode' : 'lightMode'}>
            <button className="btn btn-dark" onClick={() => toggleDarkMode()}>Cambiar modo</button>
        <ItemList productList={productList}/>
        </div>
    )
}