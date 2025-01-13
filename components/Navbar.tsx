'use client';
import Link from "next/link";
import React, {useState} from "react";

const Navbar = () => {
    const [nav, setNav] = useState(false);

const links = [
    {
        id: 1,
        name: "Главная страница",
        href: "/",
    
    },
    {
        id: 2,
        name: "Каталог",
        href: "/products",
    }
]

return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed top-0 z-50">
    <h1 className="text-2xl font-bold">Магазин Бижутерии</h1>
    {/* Десктоп меню */}
    <ul className="hidden md:flex">
        {links.map((link) => (
            <li key={link.id} className="px-4 cursor-pointer capitalize font-medium text-gray-300 hover:text-white hover:scale-105 duration-200">
                <Link href={link.href}>{link.name}</Link>
            </li>
        ))}
    </ul>
    {/* Мобильное меню */}
    <div className="md:hidden z-10" onClick={() => setNav(!nav)}>
        {/* Иконка меню */}
        <button>
            {nav ? (
                // Иконка закрытия
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            ) : (
                // Иконка гамбургера
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            )}
        </button>
    </div>
    {/* Мобильные ссылки */}
    {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-300">
            {links.map((link) => (
                <li key={link.id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
                    <Link href={link.href} onClick={() => setNav(false)}>{link.link}</Link>
                </li>
            ))}
        </ul>
    )}
</div>
)
}

export default Navbar;