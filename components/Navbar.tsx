'use client';
import Link from "next/link";
import React, {useState} from "react";

const Navbar = () => {
    const [nav, setNav] = useState(false);

const links = [
    {
        id: 1,
        link: "Главная страница",
    
    },
    {
        id: 2,
        link: "Каталог",
    }
]

return (
    <div className = "flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed nav">
        {links.map((link) => (
            <Link href="">{link.link}</Link>
        ))}
    </div>
)
}

export default Navbar;