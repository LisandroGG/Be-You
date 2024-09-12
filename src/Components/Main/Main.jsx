import Carousel from "../Carousel/Carousel";

const Main = ({ producto, mostrarCarrusel }) => {
    return (
        <main className="bg-[#FFFFFF] dark:bg-[#1D1D1B] flex-grow">
            {mostrarCarrusel && <Carousel />}
            <section className="text-black dark:text-white font-nav mt-3 md:mt-6">
            {producto ? 
            (
                <article>
                    {producto.imagen ? <img src={producto.imagen} className="w-full h-48 object-cover"></img> : ''}
                    {producto.contenidos && producto.contenidos.length > 0 && (
                        <ul>
                            {producto.contenidos.map((item, index) => (
                                <li key={index}>
                                    <img src={item.imagen}></img>
                                    <h4>{item.nombre}</h4>
                                    <p>{item.descripcion}</p>
                                </li>
                            ))}
                        </ul>
                    )}
                </article>)
            : 
            ''
            }
            </section>
        </main>
    );
};

export default Main;