import React from 'react';
import Square from "../Square/Square";
import './Gameboard.css';
import {ISquare} from "../../types";
import Modal from "../Modal/Modal";

interface IProps {
    items:ISquare[];
    onSquareClick:(index:number)=> void;
    stopGame:boolean;
    tries:number
}

const GameBoard:React.FC<IProps> = ({items, onSquareClick, stopGame, tries}) => {

    const classNames = `gameboard ${stopGame ? 'stop-game' : ''}`

    return (
        <div className={classNames}>
            {
                items.map((i,index) => {
                   return  <Square
                       key={Date.now()+index}
                       hasItem={i.hasItem}
                       clicked={i.clicked}
                       onSquareClick={() => onSquareClick(index)}
                   />
                })
            }

            {stopGame && <Modal tries={tries}/>}


        </div>
    );
};

export default GameBoard;