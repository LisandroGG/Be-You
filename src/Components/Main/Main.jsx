const Main = ({ contenido, producto }) => {
    return(
        <main className="bg-[##FFFFFF] dark:bg-[#1D1D1B] h-screen">
            <h2 className="text-white">{producto ? producto.nombre : 'Destacados'}</h2>
        </main>
    )
}

export default Main;