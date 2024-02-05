import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import Cart from './componentes/Cart/Cart'
import Checkout from './componentes/Checkout/Checkout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContent'

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer children={'Listado de productos'} />}/>
            <Route path='/categoria/:categoriaId' element={<ItemListContainer/>} />
            <Route path='/detail/:productoId' element={<ItemDetailContainer/>} />   
            <Route path='/cart' element={<Cart/>} />   
            <Route path='/checkout' element={<Checkout/>} />    
          </Routes>          
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
