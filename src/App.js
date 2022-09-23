import './App.css';
import NavBar from './components/navBar/NavBar'
import CartWidget from './components/navBar/cartWidget/CartWidget'
import { ItemListContainer } from './components/itemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CarritoProvider } from './context/CarritoContext';
import CartView from './components/cartView/CartView';

function App() {

  return (
    <BrowserRouter> 
    <CarritoProvider> 
     <NavBar >
        {<CartWidget/>}
      </NavBar>

      <Routes> 
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/categoria/:categoria' element={<ItemListContainer />}/>
        <Route path='/detalles/:id' element={<ItemDetailContainer />}/>
        <Route path='/cart/' element={<CartView />}/>
      </Routes>
    </CarritoProvider>
    </BrowserRouter>
  ); 
} 

export default App;
