import React, { useEffect, useState } from 'react'
import { products } from '../../mock/products'
import  {ItemDetail}  from './itemDetail/ItemDetail'
import  {useParams}  from 'react-router-dom'

export const ItemDetailContainer = () => {

  const {id} = useParams()

  const [item, setItem] = useState({})


  const getProducts = () => new Promise((resolve, reject) => {
    setTimeout(()=> resolve(products.find(product => product.id === Number(id))), 2000)
  })

  useEffect(() => {
    getProducts()
    .then(response => setItem(response))
  }, [])  

  return (
    <ItemDetail item={item} />
  )
}