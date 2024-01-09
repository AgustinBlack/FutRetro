import clases from "./Item.module.css"
import ItemCount from "../ItemCount/ItemCount.jsx"

const Item = ({nombre, talles, precio, categoria, img, stock}) => {
    return (
        <div className={clases.divItem}>
            <img className={clases.divItemImg} src={img}/>
            <div className={clases.divItemInfo}>
                <h3>{nombre}</h3>
                <h4>{categoria}</h4>
                <p className={clases.divItemTalles}>{talles} </p>
                <p>${precio}</p>
                <p className={clases.divItemStock}>Stock: {stock}</p>
                <div className={clases.divItemCount}>
                    <ItemCount/> 
                </div>
            </div>

        </div>
    )
}

export default Item