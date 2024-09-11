import Carousel from "../Carousel/Carousel";

const Main = ({ contenido, producto, mostrarCarrusel }) => {
    return (
        <main className="bg-[#FFFFFF] dark:bg-[#1D1D1B] flex-grow">
            {mostrarCarrusel && <Carousel />}
            <h2 className="text-black dark:text-white font-nav">
            {producto ? 
            (
                <div>
                    <h3>Categoria: {producto.nombre}</h3>
                    
                    {producto.contenidos && producto.contenidos.length > 0 && (
                        <ul>
                            {producto.contenidos.map((item, index) => (
                                <li key={index}>
                                    <h4>{item.nombre}</h4>
                                    <p>{item.descripcion}</p>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>)
            : 
            'destacados'
            }
            </h2>
        </main>
    );
};

export default Main;