import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProductos, getProductosByCategoria } from "../AsyncMock/asyncMock"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])

    const { categoriaId } = useParams()

    useEffect(() => {
        const asyncFunction = categoriaId ? getProductosByCategoria : getProductos

        asyncFunction(categoriaId)
        .then(response => {
            setProductos(response);
        })
    }, [categoriaId])

    return (
        <>
            <ItemList productos={productos} children={'Bienvenidos'}/>
        </>
    ) 
}

export default ItemListContainer