import React from 'react';
import './Square.css';
import {ISquare} from "../../types";

interface IProps extends ISquare{
    onSquareClick:React.MouseEventHandler
}

const Square: React.FC<IProps> = ({hasItem, clicked, onSquareClick}) => {

    const squareClasses =  `square  ${clicked ? 'clicked' : ''}`;
    const ring = `${hasItem ? 'hasRing' : ''}`

    return (
        <div className={squareClasses} onClick={onSquareClick}>
            <div className={ring}></div>
        </div>
    );
};

export default Square;