import clases from "./Item.module.css"
import { Link } from "react-router-dom"

const Item = ({ id, nombre, precio, img }) => {
 
    return (
        <div className={clases.divItem}>
            <img className={clases.divItemImg} src={img}/>
            <div className={clases.divItemInfo}>
                <h3 className={clases.divItemNombre}>{nombre}</h3>
                <p>${precio}</p>
                <div className={clases.divItemDetallesPadre}>
                    <Link to={`/detail/${id}`} className={clases.divItemDetalles}>Ver detalle</Link>                    
                </div>
            </div>
        </div>
    )
}

export default Item