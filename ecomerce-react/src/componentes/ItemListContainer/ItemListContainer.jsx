import clases from "./ItemListContainer.module.css"

const ItemListContainer = ({children}) => {
    return <h1 className={clases.titulo}>{children}</h1>
}

export default ItemListContainer