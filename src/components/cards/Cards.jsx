import React, { useState } from 'react';
import './Cards';
import ItemDetailContainer from '../ItemDetailContainer';
import CounterCustomHook from '../CounterCustomHook'
import ItemDetail from '../ItemDetail';
import Button from 'react-bootstrap/Button';

export const Cards = ({productList}) => {
  const {title, img, price, id} = productList

  return (
    <div>
      <h4>{title}</h4>
      <div>
        <img className='img' src={img} alt={`Imagen del producto ${title}`} />
      </div>
      <p className='price'>{price} $</p>
      <button className='button button-detail'> Ver más detalles</button>
    </div>
  )
}