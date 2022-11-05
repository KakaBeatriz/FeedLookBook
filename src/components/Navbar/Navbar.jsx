import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import Logo from "../../imagens/Logo.svg";
import {HiOutlineMenuAlt3} from "react-icons/hi";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const handleNavbar = () => setToggleMenu(!toggleMenu);

    return(
        <nav className='navbar' id="navbar">
            <div className='container navbar-content flex'>
                <div className='brand-and-toggler flex flex-sb'>
                    <Link to = "/" className='navbar-brand flex'>
                        <img src ={Logo} alt = "site logo"/>
                        <span className='text-uppercase fw-6 fs-24 ls-1 text-purple'>LookBook</span>
                    </Link>
                    <button type="button" className='navbar-toggler-btn' onClick={handleNavbar}>
                        <HiOutlineMenuAlt3 size = {35} style = {{
                            color: `${toggleMenu ? "#fff" : "#010101"}`
                        }} />
                    </button>
                </div>

                <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link to = "/" className='nav-link text-uppercase text-light-purple fs-22 fw-6 ls-1'>Biblioteca</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/feed" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Feed</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/perfil" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Perfil</Link>
                        </li>

                        <li className='nav-item'>
                            <Link to="/troca" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Troca</Link>
                        </li>


                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar