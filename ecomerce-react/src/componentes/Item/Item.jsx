import clases from "./Item.module.css"
import ItemCount from "../ItemCount/ItemCount.jsx"
import { Link } from "react-router-dom"

const Item = ({ id, nombre, talles, precio, categoria, img, stock }) => {
    return (
        <div className={clases.divItem}>
            <img className={clases.divItemImg} src={img}/>
            <div className={clases.divItemInfo}>
                <h3 className={clases.divItemNombre}>{nombre}</h3>
                <h4 className={clases.divItemCat}>{categoria}</h4>
                <p className={clases.divItemTalles}>{talles} </p>
                <p>${precio}</p>
                <p className={clases.divItemStock}>Stock: {stock}</p>
                <div className={clases.divItemCount}>
                    <ItemCount/> 
                </div>
                <div className={clases.divItemDetallesPadre}>
                    <Link to={`/detail/${id}`} className={clases.divItemDetalles}>Ver detalle</Link>                    
                </div>
            </div>
        </div>
    )
}

export default Item