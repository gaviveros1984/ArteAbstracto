import './Cards.css'
import CounterCustomHook  from '../CounterCustomHook'
import ItemContainer from '../ItemContainer'

function Cards(props) {

  function onAdd (count){
    console.log('El total es ' + count)
  }
    return (
      <>
        <div className="card size text-white">
          <img className="card-img-top img" src={props.imagenObra} alt="Card image" />
            <div className="card-img-overlay">
              <h1 className="card-title">{props.artista}</h1>
              <p className="card-text">{props.nombreObra}</p>
              <button href="#" className="btn btn-primary">Ver más</button>
            </div>
        </div>
        <CounterCustomHook stock = {5} onAdd = {onAdd}/>
        <ItemContainer/>
      </>
    )
  }
  
  export default Cards