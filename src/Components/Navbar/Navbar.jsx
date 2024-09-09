import { useState } from "react"
import Logo from '/logo.png'

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const openMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return(
        <header className="bg-[#00628B]">
            <div className="flex p-4 justify-between md:justify-center items-center">

                <div className="text-4xl text-white  pt-2 md:hidden" onClick={openMenu}>
                <ion-icon name={menuOpen ? "close" : "menu"}></ion-icon>
                </div>

                <img src={Logo} alt="logo" className="w-30 h-12 md:w-40 md:h-16"></img>
            </div>
            <nav className={`${menuOpen ? "max-h-96" : "max-h-0"} overflow-hidden transition-all duration-500 ease-in-out md:max-h-full md:flex md:justify-center`}> 
                <ul className="flex flex-col pl-4 pb-4 md:flex-row gap-5 text-white font-medium text-lg  md:text-xl">
                    <li>Remeras</li>
                    <li>Pantalones</li>
                    <li>Vestidos</li>
                    <li>Abrigos</li>
                    <li>Zapatillas</li>
                    <li>Conjuntos</li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;