import {CartWidget} from './CartWidget';
// import Carrito from '../assets/carrito.png';

export const NavBar = () => {
    return (
        <nav>
            {/* <div><img src="../assets/logo.jpg" alt="Logo" /></div> */}
            <div id="Bname">My Company</div>
            <ul>
                <li><a href="">Faldas</a></li>
                <li><a href="">Vestidos</a></li>
                <li><a href="">Zapatos</a></li>
            </ul>
            <CartWidget />
        </nav>    
    );
};