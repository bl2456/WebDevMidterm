import React, { useState } from "react";
import {Link} from 'react-router-dom';
import Dropdown from './Dropdown';
import '../css/Navbar.css';
import logo from "../media/Logo.png";

const AboutDropdown = [
    {
        name: "History",
        path: "/history",
    },
    {
        name: "Honors",
        path: "/honors",
    },
    {
        name: "News",
        path: "/news",
    }
];

const PersonnelDropdown = [
    {
        name: "Staff",
        path: "/staff",
    },
    {
        name: "Team",
        path: "/team",
    },
];

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [dropdownState, setDropdownState] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);
    /*
    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdownState(false);
        } else {
            setDropdownState(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdownState(false);
        } else {
            setDropdownState(false);
        }
    };
    */

    return(
        <>
            <div className="navbar">
                
                <Link to='/' className="navbar-logo">
                    <img src={logo} alt="arsenal logo" />
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? "fa fa-times" : "fa fa-bars"} />
                </div>
                <ul className={click ? 'nav-menu active': 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className="nav-links" onClick={closeMenu}>Home</Link>
                    </li>

                    <li className='nav-item'>
                        <div className="nav-links" onClick={closeMenu}>About</div>
                        <Dropdown dropdownItems={AboutDropdown}/>
                    </li>

                    <li className='nav-item'>
                        <div className="nav-links" onClick={closeMenu}>Personel</div>
                        <Dropdown dropdownItems={PersonnelDropdown}/>
                    </li>

                    <li className='nav-item'>
                        <Link to='/CurrentSeason' className="nav-links" onClick={closeMenu}>Season</Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Navbar;