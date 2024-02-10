import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"
import { getProducts } from "../../services/firebase/firestore/product"
import { useAsync } from "../../hooks/useAsync"

const ItemListContainer = () => {

    const { categoriaId } = useParams()

    const asyncFunction = () => getProducts(categoriaId)

    const { data: productos } = useAsync(asyncFunction, [categoriaId])

    return (
        <>
            <ItemList productos={productos} children={'Bienvenidos'}/>
        </>
    ) 
}

export default ItemListContainer