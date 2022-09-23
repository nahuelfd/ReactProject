import React from 'react';

const ItemListContainer = () => {
    return (
        <>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Productos</a>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Hombres</a>
                    <a className="dropdown-item" href="#">Mujeres</a>
                    <a className="dropdown-item" href="#">Niños</a>
                </div>
            </li>
        </>
    );
}

export default ItemListContainer;
