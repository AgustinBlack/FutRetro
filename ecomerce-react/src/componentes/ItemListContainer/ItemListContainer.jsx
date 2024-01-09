import { useState, useEffect } from "react"
import { getProductos } from "../AsyncMock/asyncMock"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        getProductos()
        .then(response => {
            setProductos(response);
        })
    }, [])

    return (
        <>
            <ItemList productos={productos} children={'Bienvenidos'}/>
        </>
    ) 
}

export default ItemListContainer