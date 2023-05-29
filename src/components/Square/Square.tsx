import React from 'react';
import './Square.css';
import {ISquare} from "../../types";
import Ring from "../Ring";

interface IProps extends ISquare{
    onSquareClick:React.MouseEventHandler
}

const Square: React.FC<IProps> = ({hasItem, clicked, onSquareClick}) => {

    const squareClasses =  `square  ${clicked ? 'clicked' : ''}`;

    return (
        <div className={squareClasses} onClick={onSquareClick}>
            {hasItem && <Ring/>}
        </div>
    );
};

export default Square;