import React, { useEffect, useState } from 'react'
import  {ItemDetail}  from './itemDetail/ItemDetail'
import  {useParams}  from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore';
import db from '../../service/firebase';

export const ItemDetailContainer = () => {

  const {id} = useParams()
  const [selectedItem, setSelectedItem] = useState()


  const getSelected = async (idItem) => {
    try {
        const document = doc(db, "Items", idItem)
        const response = await getDoc(document)
        const result = { id: response.id, ...response.data() }
        console.log(result)
        setSelectedItem(result)
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