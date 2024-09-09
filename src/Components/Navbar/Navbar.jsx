import { useEffect, useState } from "react";
import Logo from '/logo.png';

const Navbar = ({ onProductosClick, productos }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [theme, setTheme] = useState("light");

    useEffect(() => {
    const preferedTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    setTheme(preferedTheme);
    }, []);

    useEffect(() => {
    if (theme === "dark") {
        document.querySelector("html").classList.add("dark");
    } else {
        document.querySelector("html").classList.remove("dark");
    }
    }, [theme]);

    const handleChangeTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    const openMenu = () => {
    setMenuOpen(!menuOpen);
    };

    return (
        <header className="bg-[#B6CBD8] dark:bg-[#00628B]">
        <div className="flex p-4 justify-between md:justify-between items-center">
            <div className="text-4xl text-white pt-2 md:opacity-0" onClick={openMenu}>
            <ion-icon name={menuOpen ? "close" : "menu"}></ion-icon>
            </div>

        <a href="/">
            <img src={Logo} alt="logo" className="w-30 h-12 md:w-40 md:h-16" />
        </a>

        <button onClick={handleChangeTheme} aria-label="theme" className="flex">
            {theme === "dark" ? (
            <svg xmlns="http://www.w3.org/2000/svg" width=".18in" height=".18in" viewBox="0 0 20 20">
                <g id="moon" transform="translate(3, 0)">
                <path d="M9,2.9c-2,0-3.8,.8-5.2,2.2,.7-.3,1.4-.5,2.1-.5,3,.1,5.3,2.7,5.2,5.6-.1,2.9-2.4,5.1-5.2,5.2-.7,0-1.5-.2-2.1-.5,2.8,2.9,7.3,2.9,10.1,.2s3-7.3,.3-10.1c-1.4-1.3-3.3-2.2-5.2-2.1h0Z" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round"
                />
                </g>
            </svg>
            ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width=".18in" height=".18in" viewBox="5 2 20 20">
                <g id="sun" transform="translate(3, 0)">
                <path d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" fill="none" stroke="#000000" strokeWidth="1.08" strokeLinecap="round" strokeLinejoin="round"
                />
                </g>
            </svg>
            )}
        </button>
        </div>
        <nav className={`${menuOpen ? "max-h-96" : "max-h-0"} overflow-hidden transition-all duration-500 ease-in-out md:max-h-full md:flex md:justify-center`}>
        <ul className="flex flex-col pl-4 pb-4 md:flex-row gap-4 md:gap-8 text-white font-medium text-lg md:text-xl">
            {productos
            .filter((producto) => producto.nombre !== "Destacados")
            .map((producto) => (
                <li key={producto.nombre} className="cursor-pointer" onClick={() => onProductosClick(producto)}>
                {producto.nombre}
                </li>
            ))}
        </ul>
        </nav>
    </header>
    );
};

export default Navbar;