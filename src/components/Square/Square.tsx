import React from 'react';
import './Square.css';
import {ISquare} from "../../types";
import Ring from "../Ring";

interface IProps extends ISquare{
    onSquareClick:React.MouseEventHandler
}

const Square: React.FC<IProps> = ({hasItem, clicked, onSquareClick}) => {

    const classClicked =  `square  ${clicked ? 'clicked' : ''} ${hasItem ? 'has-item' : ''}`;



    return (
        <div className={classClicked} onClick={onSquareClick}>
            {hasItem && <Ring/>}
        </div>
    );
};

export default Square;