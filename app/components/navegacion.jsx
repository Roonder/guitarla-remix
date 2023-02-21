import {Link, useLocation} from "@remix-run/react";
import Carrito from '../../public/img/carrito.png'

const Navegacion = () => {

    const location = useLocation();

    return (
        <nav className="navegacion">
            <Link
                to="/"
                prefetch="render"
                className={location.pathname === '/' ? 'active' : ''}
            >Inicio</Link>
            <Link
                to="/nosotros"
                prefetch="render"
                className={location.pathname === '/nosotros' ? 'active' : ''}
            >Nosotros</Link>
            <Link
                to="/guitarras"
                prefetch="render"
                className={location.pathname === '/guitarras' ? 'active' : ''}
            >Tienda</Link>
            <Link
                to="/blog"
                prefetch="render"
                className={location.pathname === '/blog' ? 'active' : ''}
            >Blog</Link>
            <Link
                to="/carrito"
                prefetch="render"
            ><img src={Carrito} alt="Carrito de Compras" /></Link>
        </nav>
    );
}
 
export default Navegacion;