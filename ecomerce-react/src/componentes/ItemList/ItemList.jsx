import clases from "../Item/Item.module.css"
import Item from "../Item/Item"

const ItemList = ({productos, children}) => {
    return (
        <>
            <h1 className={clases.titulo}>{children}</h1>
            <div className={clases.div}>
                {
                    productos.map( prod => {
                        return (
                            <Item key={prod.id} {...prod}/>
                        )
                    })
                } 
            </div>
        </>
    )
}

export default ItemList