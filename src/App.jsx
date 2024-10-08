import { useState } from 'react'

import './App.css'
import Main from './Components/Main/Main'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

import products from '../products.json'

function App() {

  const [productoSeleccionado, setProductoSeleccionado] = useState(products.productos[0])
  const [mostrarCarrusel, setMostrarCarrusel] = useState(true);

  const handleProductoClick = (producto) => {
    setProductoSeleccionado(producto);
    setMostrarCarrusel(false)
};

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onProductosClick={handleProductoClick} productos={products.productos} productoSeleccionado={productoSeleccionado}/>
      <Main producto={productoSeleccionado} mostrarCarrusel={mostrarCarrusel}/>
      <Footer />
    </div>
  )
}

export default App
