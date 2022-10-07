import {Link} from 'react-router-dom';

const ItemListContainer = () => {
    return (
        <>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Productos</a>
                <div className="dropdown-menu">
                    
                    <Link className="dropdown-item nav-link" to={`/categoria/1`}>Ciencia Ficción</Link>
                    <Link className="dropdown-item nav-link" to={`/categoria/2`}>Novelas Románticas</Link>
                    <Link className="dropdown-item nav-link" to={`/categoria/3`}>Infantiles</Link>
                    <Link className="dropdown-item nav-link" to={`/categoria/4`}>Empresarial</Link>
                    <Link className="dropdown-item nav-link" to={`/categoria/5`}>Policiales</Link>
                    <a className="dropdown-item" href="#"></a>
                    <a className="dropdown-item" href="#"></a>
                    <a className="dropdown-item" href="#"></a>
                    <a className="dropdown-item" href="#"></a>
                    <a className="dropdown-item" href="#"></a>
                </div>
            </li>
        </>
    );
}

export default ItemListContainer;
