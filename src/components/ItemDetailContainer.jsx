import React, { useEffect, useState } from 'react'
import { products } from '../mock/products'
import  {ItemDetail}  from './ItemDetail'

export const ItemDetailContainer = () => {
  const [item, setItem] = useState({})


  const getProducts = () => new Promise((resolve, reject) => {
    setTimeout(()=> resolve(products.find(product => product.id === 1)), 2000)
  })

  useEffect(() => {
    getProducts()
    .then(response => setItem(response))
  }, [])  

  return (
    <ItemDetail item={item} />
  )
}