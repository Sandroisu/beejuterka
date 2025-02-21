// components/Navbar.tsx
'use client';
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from 'next/navigation';
import { signIn, signOut, useSession } from 'next-auth/react';
import { rubik } from '@/app/ui/fonts';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const pathname = usePathname();
    const { data: session, status } = useSession();

    const links = [
        {
            id: 1,
            name: "Главная страница",
            href: "/",
        },
        {
            id: 2,
            name: "Каталог",
            href: "products",
        },
        {
            id: 3,
            name: "Корзина",
            href: "cart",
        }
    ];

    return (
        <div className="fixed top-0 w-full bg-black text-white z-50">
            <div className={`max-w-7xl mx-auto h-20 px-4 flex justify-between items-center ${rubik.className} antialiased`}>
                <h1 className="text-2xl font-bold">Магазин Бижутерии</h1>
                {/* Десктоп меню */}
                <ul className="hidden md:flex">
                    {links.map((link) => (
                        <li key={link.id} className={`px-4 cursor-pointer capitalize font-medium 
                ${pathname === link.href ? 'text-white border-b-2 border-white' : 'text-gray-300 hover:text-white hover:scale-105'} 
                duration-200`}>
                            <Link href={link.href}>{link.name}</Link>
                        </li>
                    ))}
                    {/* Кнопка входа/выхода */}
                    {status === "loading" ? (
                        <li className="px-4 cursor-pointer capitalize font-medium text-gray-300">Загрузка...</li>
                    ) : session ? (
                        <li className="px-4 cursor-pointer capitalize font-medium text-gray-300 hover:text-white hover:scale-105 duration-200" onClick={() => signOut()}>
                            Выйти
                        </li>
                    ) : (
                        <li className="px-4 cursor-pointer capitalize font-medium text-gray-300 hover:text-white hover:scale-105 duration-200">
                            <Link href="/auth">Войти</Link>
                        </li>
                    )}
                </ul>
                {/* Иконка мобильного меню */}
                <div className="md:hidden z-10" onClick={() => setNav(!nav)}>
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
                                <Link href={link.href} onClick={() => setNav(false)}>
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                        {status !== "loading" && (
                            <li className="px-4 cursor-pointer capitalize py-6 text-4xl" onClick={() => session ? signOut() : () => setNav(false)}>
                                <Link href={session ? '#' : '/auth'} onClick={() => session ? signOut() : null}>
                                    {session ? "Выйти" : "Войти"}
                                </Link>
                            </li>
                        )}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Navbar;