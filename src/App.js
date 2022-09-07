import './App.css';
import NavBar from './components/navBar/NavBar'
import CartWidget from './components/navBar/cartWidget/CartWidget'
import { ItemListContainer } from './components/itemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter> 
     <NavBar >
        <CartWidget/>
      </NavBar>

      <Routes> 
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/categoria/:categoria' element={<ItemListContainer />}/>
        <Route path='/detalles/:id' element={<ItemDetailContainer />}/>
      </Routes>
    </BrowserRouter>
  ); 
} 

export default App;
