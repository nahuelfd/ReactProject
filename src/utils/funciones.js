import { cargarBaseDeDatos } from "./firebase.js";



export const consultarBDD = async () => {
    const response = await fetch('../json/productos.json')
    const productos = await response.json()
    
    return productos
}


cargarBaseDeDatos()
