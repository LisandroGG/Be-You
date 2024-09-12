import { useState } from "react";

import Carousel from "../Carousel/Carousel";

const Main = ({ producto, mostrarCarrusel }) => {

    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (imageSrc) => {
        setSelectedImage(imageSrc);
    };
    
    const closeModal = () => {
        setSelectedImage(null);
    };


    return (
        <main className="bg-[#FFFFFF] dark:bg-[#1D1D1B] flex-grow">
            {mostrarCarrusel && <Carousel />}
            <section>
                <article>
                    {producto.imagen ? <img src={producto.imagen} alt={producto.nombre} className="w-full h-48 object-cover"></img> : ''}
                </article>
            </section>
            <section className="text-black dark:text-white font-Primary p-6 md:p-9 lg:p-12 xl:px-28">
                {producto.contenidos && producto.contenidos.length > 0 && (
                    <article>
                        <ul className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-9 lg:gap-9 justify-items-center">
                            {producto.contenidos.map((item, index) => (
                                <li key={index} onClick={() => openModal(item.imagen)} className="bg-slate-200 dark:bg-slate-800 p-1 rounded text-center cursor-pointer transition-transform transform hover:scale-105 duration-300 ease-in-out">
                                    <img
                                        width="120" 
                                        height="48"
                                        src={item.imagen}
                                        alt={item.nombre || "Imagen del contenido"}
                                        className="w-auto h-44 md:h-64 lg:h-80 object-cover rounded-t"
                                    />
                                    <h4 className="break-words px-2 py-1">{item.nombre}</h4>
                                    
                                </li>
                            ))}
                        </ul>
                            {selectedImage && (
                                <div className="fixed inset-0 flex items-center justify-center z-50 mx-5">
                                    <div
                                        className="fixed inset-0 bg-black opacity-50"
                                        onClick={closeModal}
                                    ></div>

                                <div className="relative bg-white p-4 rounded-lg shadow-lg">
                                    <img
                                    src={selectedImage}
                                    alt="Imagen ampliada"
                                    className="max-w-full max-h-screen object-contain"
                                    />

                                    <button
                                    className="absolute top-2 right-2 text-white bg-black rounded-full p-2"
                                    onClick={closeModal}
                                    >
                                    &times;
                                    </button>
                                </div>
                                </div>
        )}
                    </article>
                )}
            </section>
        </main>
    );
};

export default Main;