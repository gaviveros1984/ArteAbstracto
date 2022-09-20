import './App.css';
import NavBar from './components/navBar/NavBar'
import CartWidget from './components/navBar/cartWidget/CartWidget'
import { ItemListContainer } from './components/itemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CarritoProvider } from './context/CarritoContext';

function App() {

  return (
    <BrowserRouter> 
    <CarritoProvider> 
     <NavBar >
        <CartWidget/>
      </NavBar>

      <Routes> 
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/categoria/:categoria' element={<ItemListContainer />}/>
        <Route path='/detalles/:id' element={<ItemDetailContainer />}/>
      </Routes>
    </CarritoProvider>
    </BrowserRouter>
  ); 
} 

export default App;
