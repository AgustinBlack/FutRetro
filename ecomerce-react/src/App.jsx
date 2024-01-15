import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer children={'Listado de productos'} />}/>
          <Route path='/categoria/:categoriaId' element={<ItemListContainer/>} />
          <Route path='/detail/:productoId' element={<ItemDetailContainer/>} />          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
