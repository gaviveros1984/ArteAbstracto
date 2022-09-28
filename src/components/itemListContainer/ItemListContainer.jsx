import { useEffect, useState, useContext} from "react";
import { ItemList } from "./itemList/ItemList";
import {useParams} from 'react-router-dom';
import {DarkModeContext} from '../../context/DarkMode'
import db from '../../service/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

export const ItemListContainer = () => {

    const { categoryId } = useParams()

    const [productList, setproductList] = useState([])
    const {darkMode, toggleDarkMode} = useContext(DarkModeContext)

    const getData = async() => {
        try{
            const document = collection (db, "Items")
            const col = await getDocs(document)
            console.log("col.docs", col.docs)
            const result = col.docs.map((doc) => doc = {id:doc.id,...doc.data()})
            setproductList(result)
        }catch (error){
            console.log(error)
        }
    }

    const getDataCategory = async(categoria) => {
        try{
            const document = query(collection (db, "Items"), where ("category", "==",categoria))
            const col = await getDocs(document)
            console.log("col.docs", col.docs)
            const result = col.docs.map((doc) => doc = {id:doc.id,...doc.data()})
            setproductList(result)
        }catch (error){
            console.log(error)
        }
    }

    useEffect(() =>{
        categoryId?getDataCategory(categoryId):getData()
    }, [categoryId])

    return (
        <div className={darkMode ? 'darkMode' : 'lightMode'}>
            {<button className="btn btn-dark" onClick={() => toggleDarkMode()}>Cambiar modo</button>}
        <ItemList productList={productList}/>
        </div>
    )
}