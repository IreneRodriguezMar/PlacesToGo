import StyleMenu from '../styles/Menu.module.css'

export default function Menu() {
    return (
        <nav className={StyleMenu.contentNav}>
            <div className={StyleMenu.logoTxt}>
                <p className={StyleMenu.txtItem}>
                    Places to Go
                </p>
            </div>
            <ul className={StyleMenu.navItems}>
                <li>
                    <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Lorem1
                    </a>
                </li>
                <li>
                    <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Lorem2
                    </a>
                </li>
                <li>
                    <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Lorem3
                    </a>
                </li>
                <li>
                    <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Lorem4
                    </a>
                </li>
                <li>
                    <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Lorem5
                    </a>
                </li>
            </ul>
        </nav>
    );
}