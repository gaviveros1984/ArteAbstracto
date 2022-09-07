import './Cards.css';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const Cards = ({productList}) => {
  const {title, img, price, id} = productList

  return (
    <div>
      <h4>{title}</h4>
      <div>
        <img className='img' src={img} alt={`Imagen del producto ${title}`} />
      </div>
      <p className='price'>{price} $</p>
      <Link to={`/detalles/${id}`}> 
        <button className='button button-detail'> Ver más detalles</button>
      </Link>
    </div>
  )
} 