import './App.css';
import NavBar from './components/navBar/NavBar'
import CartWidget from './components/cartWidget/CartWidget'
import { ItemListContainer } from './components/itemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer';

function App() {
  return (
    <>
    <NavBar >
      <CartWidget/>
    </NavBar>

    <ItemListContainer />
    <ItemDetailContainer/>
  </>
  ); 
} 

export default App;
