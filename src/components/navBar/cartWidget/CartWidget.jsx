import lightMode from '../../../img/lightbulb.svg'
import bell from '../../../img/bell.svg'
import bag from '../../../img/bag.svg'
import { CarritoContext } from "../../../context/CarritoContext"
import './CartWidget.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

function CartWidget() {

  const {carrito, getQuantity} = useContext(CarritoContext)

    return carrito.length > 0 ? (
      <>
        <div className='position'>
          {/* <img src={lightMode} alt="img" className='icons' />
          <img src={bell} alt="img" className='icons' /> */}
          <Link to='/cart'>
          <img src={bag} alt="img" className='icons' />
          </Link>
          <span>{getQuantity()}</span>
        </div>
      </>
    ) : (<></>)
  }
  
  export default CartWidget