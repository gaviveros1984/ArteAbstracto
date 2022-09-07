import lightMode from '../../../img/lightbulb.svg'
import bell from '../../../img/bell.svg'
import bag from '../../../img/bag.svg'
import './CartWidget.css'

function CartWidget() {

    return (
      <>
        <div className='position'>
          <img src={lightMode} alt="img" className='icons' />
          <img src={bell} alt="img" className='icons' />
          <img src={bag} alt="img" className='icons' />
        </div>
      </>
    )
  }
  
  export default CartWidget