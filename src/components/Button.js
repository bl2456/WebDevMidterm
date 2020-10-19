import React from 'react';
import {Link} from 'react-router-dom';
import '../css/Button.css';


const STYLES = ['btn-primary', 'btn-secondary'];
const SIZES = ['btn-medium', 'btn-large'];

const Button = ({
    buttonStyle,
    buttonSize,
    path,
    name
}) => {
    const actualButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const actualButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    return (
        <Link to={path} className='btn-mobile'>
            <button 
                className={`btn ${actualButtonStyle} ${actualButtonSize}`}>
                    {name}
            </button>
        </Link>
    );
}

export default Button;