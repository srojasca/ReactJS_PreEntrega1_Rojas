import {CartWidget} from './CartWidget';
import logoEmpresa from '../assets/logo.png';

export const NavBar = () => {
    return (
        <nav>
            <div><img src={logoEmpresa} width='70px' height='70px' /></div>
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