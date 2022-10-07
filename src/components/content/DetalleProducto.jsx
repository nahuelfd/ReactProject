import React from 'react';

const DetalleProducto = ({ producto }) => {
    return (
        <>
        
        <div className="card mb-3" style={{ maxWidth: 540 }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={`../img/${producto.img}`} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{producto.nombre}</h5>
                        <p className="card-text">{producto.sinopsis}</p>
                        <p className="card-text">{producto.precio}</p>
                        <p className="card-text">{producto.categoria}</p>
                        <button className='btn btn-dark'>Comprar</button>
                    </div>
                </div>
            </div>
        </div>

        </>
    );
}

export default DetalleProducto;