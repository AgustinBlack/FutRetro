import clases from "../Nav/Nav.module.css"
import CartWidget from "../CartWidget/CartWidget"
import Nav from "../Nav/Nav.jsx"

const NavBar = () => {
    return (
        <nav className={clases.nav}>
            <Nav/>
            <CartWidget/>
        </nav>
    )
}

export default NavBar 