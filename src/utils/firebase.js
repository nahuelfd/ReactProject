// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {collection, addDoc, getFirestore, doc, getDocs, getDoc} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwf2JRgxRKfemYpTRXoitnsSOd14442OE",
  authDomain: "react-ecommerce-99b8d.firebaseapp.com",
  projectId: "react-ecommerce-99b8d",
  storageBucket: "react-ecommerce-99b8d.appspot.com",
  messagingSenderId: "392345740501",
  appId: "1:392345740501:web:bf9d3426471d702bee6e5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()

const cargarBaseDeDatos = async () => {
    const promise = await fetch('./Json/productos.json')
    const productos = await promise.json()
    productos.forEach( async(producto) => {
        await addDoc(collection(db,"productos"), {
            nombre: producto.nombre,
            sinopsis: producto.sinopsis,
            categoria: producto.idCategoria,
            genero: producto.genero,
            stock: producto.stock,
            precio: producto.precio,
            img: producto.img 
        })
    })
}

const getProducto = async (id) => {
    const producto = await getDoc(doc(db, "productos", id))
    const prod = [producto.id, producto.data()]
    console.log(prod)
    return prod
  }
  
  const getProductos = async () => {
    const productos = await getDocs(collection(db, "productos"))
    const items = productos.docs.map(producto => [producto.id, producto.data()])
    return items
  }


  export {db, app, cargarBaseDeDatos, getProductos, getProducto}