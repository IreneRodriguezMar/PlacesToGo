import StyleMenu from '../styles/Menu.module.css';
import React, {useState} from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(true)
    return (
        <nav className={StyleMenu.navbar}>
            <div className={StyleMenu.navLogo}>
                <p className={StyleMenu.txtItem}>
                    Places to Go
                </p>
            </div>
            <ul className={`${StyleMenu.navItems} ${isOpen && StyleMenu.openNav}`}>
                <li>
                    <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Inicio
                    </a>
                </li>
                <li>
                    <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Lugares CDMX
                    </a>
                </li>
                <li>
                    <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Lugares México
                    </a>
                </li>
                <li>
                    <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Otros
                    </a>
                </li>
            </ul>
            <div className={`${StyleMenu.navToggle} ${isOpen && StyleMenu.openNav}`} onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

        </nav>
    );
}