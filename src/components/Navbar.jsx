import {Link} from 'react-router-dom';
import CartWidget from './CartWidget';
import ItemListContainer from './ItemListContainer';



const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="nav-link" to={"/"}><i className="fa-solid fa-house" />Principal</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav me-auto">
                    <ItemListContainer />
                        <li className="nav-item">
                            <Link className="nav-link" to={"/About"}>Acerca nuestro</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/Contacto"}>Contacto</Link>
                            <a  href="#"></a>
                        </li>
                    </ul>
                   
                    <CartWidget />
                    <form className="d-flex">
                        <input className="form-control me-sm-2" type="text" placeholder="Search" />
                        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;
