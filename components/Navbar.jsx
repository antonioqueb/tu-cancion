'use client';

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
    const pathname = usePathname();
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-base-100 w-52">
                        <li className={pathname === "/" ? "bg-red-600 text-white" : ""}>
                            <Link href="/">
                            <span className={pathname === "/" ? "text-white" : ""}>
                                Inicio
                            </span>
                            </Link>
                        </li>
                        <li className={pathname === "/aviso-de-privacidad" ? "bg-red-600 text-white" : ""}>
                        <Link href="/aviso-de-privacidad">
                            <span className={pathname === "/aviso-de-privacidad" ? "text-white" : ""}>
                                Aviso de Privacidad
                            </span>
                        </Link>
                    </li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <Link rel="preload" href="/">
         
                        <Image 
                            src="/tucancionlogo.png" 
                            alt="Logo de tu canción"
                            width={250}
                            height={250}
                            layout="responsive"
                            objectFit="contain"
                            className="hidden md:block"

                        />
                         <Image 
                            src="/tucancionlogo.png" 
                            alt="Logo de tu canción"
                            width={80}
                            height={80}
                            layout="responsive"
                            objectFit="contain"
                            className="block md:hidden"
                        />
             
                </Link>
            </div>
            <div className="navbar-end">
               
            </div>
        </div>
    )
}
