import React, {useRef} from 'react'
import {Cards} from '../../cards/Cards'


export const ItemList = ({productList}) => {

  return (
    <div style={{display: 'flex', gap: '2rem'}}>
      {
        productList.map(item => <Cards key={item.id} productList={item} />)
      }
    </div>

  )
}