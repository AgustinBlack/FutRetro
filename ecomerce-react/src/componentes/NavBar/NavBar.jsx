import clases from "./NavBar.module.css"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h1 className={clases.logo}>FutRetro</h1>
            <div className={clases.divBtnNav}>
                <button className={clases.btnNav}>Remeras</button>
                <button className={clases.btnNav}>Pantalones</button>
                <button className={clases.btnNav}>Conjuntos</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar 