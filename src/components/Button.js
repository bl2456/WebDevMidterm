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
        <button 
            className={`btn ${actualButtonStyle} ${actualButtonSize}`}>
                <Link to={path} className='btn-mobile'>
                    {name}
                </Link>
        </button>
    );
}

export default Button;