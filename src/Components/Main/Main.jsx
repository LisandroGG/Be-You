import Carousel from "../Carousel/Carousel";

const Main = ({ contenido, producto, mostrarCarrusel }) => {
    return (
        <main className="bg-[#FFFFFF] dark:bg-[#1D1D1B] h-screen">
            {mostrarCarrusel && <Carousel />}
            <h2 className="text-black dark:text-white font-nav">
            {producto ? 
            producto.nombre 
            : 
            'Destacados'}
            </h2>
        </main>
    );
};

export default Main;