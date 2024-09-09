import { useState } from 'react'

import './App.css'
import Main from './Components/Main/Main'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

import products from '../products.json'

function App() {

  const [productoSeleccionado, setProductoSeleccionado] = useState(null)
  const [contenidoProductoSeleccionado, setContenidoProductoSeleccionado] = useState([]);

  const handleProductoClick = (producto) => {
    setProductoSeleccionado(producto);
    setContenidoProductoSeleccionado(producto.contenidos);
};

  return (
    <>
      <Navbar onProductosClick={handleProductoClick} productos={products.productos}/>
      <Main contenido={contenidoProductoSeleccionado} producto={productoSeleccionado}/>
      <Footer />
    </>
  )
}

export default App
