import React, {useContext, useEffect, useState} from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { mostrarCarrito } from '../../utils/funciones';
const Carrito = () => {
    const {carrito, agregarProducto, quitarProducto} = useContext(CarritoContext)
    const [carritoLocal, setCarritoLocal] = useState([])
   
    useEffect(() => {
        const prodMostrar = carrito.map(producto => 
            <div className="card sm-12" style={{ maxWidth: 800 }} key={producto.id}>
                <div className="row g-0">
                    <div className="col-md-4">
                            <img src={producto.img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body row">
                            <h5 className="card-title">{producto.nombre}</h5>
                            <p className="card-text">Cantidad: {producto.cantidad}</p>
                            <p className='card-text'>Precio Total: {producto.precio * producto.cantidad}</p>
                            <button className='btn btn-dark' onClick={() => quitarProducto(producto)}>Eliminar producto</button>
                        </div>
                    </div>
                </div>
            </div>
            
        );
        
        setCarritoLocal(prodMostrar)
    }, [carrito]);

    const app = (carrito.lenght != 0) ? <div className='row'> {carritoLocal} </div> : <> <h1 color='white'>Tu carrito está vacío</h1> 
    <button className='btn btn-secondary'>Home</button></>

    return app
    }
    


export default Carrito;
