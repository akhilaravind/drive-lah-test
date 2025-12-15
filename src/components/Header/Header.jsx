// Header.jsx
import { useState } from "react";
import "./Header.scss";
import LogoIcon from "@/assets/logo.png"; // replace with your logo
import AvatarIcon from "@/assets/Avatar.png"; // replace with your avatar

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="header">
            <div className="header__container">
                <button
                    className="header__menu-btn"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    ☰
                </button>

                <div className="header__logo">
                    <img src={LogoIcon} alt="Drive lah" />
                </div>

                <div className="header__nav__group">
                    <nav className={`header__nav ${open ? "is-open" : ""}`}>
                        <a href="#">Learn more</a>
                        <a href="#">List your car</a>
                        <a href="#">Inbox</a>
                    </nav>

                    <div className="header__avatar">
                        <img src={AvatarIcon} alt="Profile" />
                    </div>

                </div>
            </div>
        </header>
    );
}
