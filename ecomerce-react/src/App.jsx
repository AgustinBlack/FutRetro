import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
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
          </Routes>          
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
