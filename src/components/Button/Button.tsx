import React from 'react';
import './Button.css';


interface IProps {
    onClick:React.MouseEventHandler
}

const Button:React.FC<IProps> = ({onClick}) => {
    return (
        <button className="button" onClick={onClick}>Reset</button>
    );
};

export default Button;