import CounterCustomHook from '../counterCustomHook/CounterCustomHook'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const ItemDetail = ({item}) => {

  return (
    <>
    <article>
    <Card style={{ width: '20rem'}} className="card">
    <Card.Img variant="top" className="imgCard" src={item.img} />
    <Card.Body>
      <Card.Title><strong>{item.title}</strong></Card.Title>
      <p className='price'>{item.price} $</p>
      <Card.Text>{item.description}</Card.Text>
      <CounterCustomHook stock={item.stock} initial={0} name={item.title} price={item.price}/> 
    </Card.Body>
    </Card>
    </article>
    </>
  );
}
