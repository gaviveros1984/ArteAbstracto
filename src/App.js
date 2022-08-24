import './App.css';
import NavBar from './components/navBar/NavBar'
import CartWidget from './components/cartWidget/CartWidget'
import Cards from './components/cards/Cards'
import Container from './components/container/Container'
import kandinsky from './img/kandinsky.png'
import pollock from './img/pollock.jpg'
import lissitzky from './img/lissitzky.jpg'

function App() {
  return (
    <>
    <NavBar >
      <CartWidget/>
    </NavBar>

    <Container >
      <Cards imagenObra = {kandinsky} artista = "Kandinsky" nombreObra = "Obra"/>
      <Cards imagenObra = {pollock} artista = "Pollock" nombreObra = "Obra"/>
      <Cards imagenObra = {lissitzky} artista = "El Lissitzky" nombreObra = "Obra"/>
    </Container >
  </>
  ); 
} 

export default App;
