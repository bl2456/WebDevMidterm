import React, { useState } from "react";
import {Link} from 'react-router-dom';
import '../css/Dropdown.css';


const Dropdown = ({dropdownItems}) => {
    console.log(dropdownItems);
    console.log("here");
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return(
        <ul className={click ? 'dropdown-menu clicked' : 'dropdown-menu'} onClick={handleClick}>
            {dropdownItems.map((item, index) => {
                return(
                    <li key={index}>
                        <Link 
                            className="dropdown-link" 
                            to={item.path} 
                            onClick={() => setClick(false)}>
                            {item.name}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default Dropdown;