import clases from "./ItemListContainer.module.css"

const ItemListContainer = (props) => {
    return <h1 className={clases.titulo}>{props.label}</h1>
}

export default ItemListContainer