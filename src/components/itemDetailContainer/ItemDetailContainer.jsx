import React, { useEffect, useState } from 'react'
import  {ItemDetail}  from './itemDetail/ItemDetail'
import  {useParams}  from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore';
import db from '../../service/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

export const ItemDetailContainer = () => {

  const {id} = useParams()
  const [selectedItem, setSelectedItem] = useState()


  const getSelected = async (idItem) => {
    try {
      const document = query(collection (db, "Items"), where ("id", "==",Number(idItem)))
      const col = await getDocs(document)
      console.log("col.docs", col.docs)
      const result = col.docs.map((doc) => doc = {id:doc.id,...doc.data()})
      setSelectedItem(...result)
    } catch (error) {
        console.log(error)
    }
}

  useEffect(() => {
    getSelected(id)
  }, [id])

  return (
    <ItemDetail item={selectedItem} />
  )
}