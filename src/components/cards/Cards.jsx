import './Cards.css'

function Cards(props) {
    return (
      <>
        <div className="card size text-white">
          <img className="card-img-top img" src={props.imagenObra} alt="Card image" />
            <div className="card-img-overlay">
              <h1 className="card-title">{props.artista}</h1>
              <p className="card-text">{props.nombreObra}</p>
              <a href="#" className="btn btn-primary">Ver más</a>
            </div>
        </div>
      </>
    )
  }
  
  export default Cards