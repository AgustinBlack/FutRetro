import { useState } from 'react'
import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemCount from './componentes/ItemCount/ItemCount'

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer>
        Bienvenidos
      </ItemListContainer>
      <ItemCount/>
    </>
  )
}

export default App
