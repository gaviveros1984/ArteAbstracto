import './Cards.css';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const Cards = ({productList}) => {
  const {title, img, price, id, description} = productList

  return (
    <>
    <Card style={{ width: '20rem'}} className="card">
    <Card.Img variant="top" className="imgCard" src={img} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <p className='price'>{price} $</p>
      <Card.Text>{description}</Card.Text>
      <Link to={`/detalles/${id}`}> 
        <Button className='button button-detail'> Ver más detalles</Button>
      </Link>
    </Card.Body>
    </Card>
    </>
  )
} 