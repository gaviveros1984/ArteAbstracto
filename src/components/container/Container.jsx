import './Container.css'

function Container(props) {

    return (
        <>
            <div>
            <h1>Bienvenido a AbstrArt</h1>
            <h3>Market of abstract arts</h3>
                <div className='position'>
                {props.children}
                </div>
            </div>
        </>
    )
  }
  
  export default Container