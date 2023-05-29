import React from 'react';
import Square from "../Square/Square";
import './Gameboard.css';
import {ISquare} from "../../types";

interface IProps {
    items:ISquare[];
    onSquareClick:(index:number)=> void;
}

const GameBoard:React.FC<IProps> = ({items, onSquareClick}) => {

    return (
        <div className="gameboard">

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

        </div>
    );
};

export default GameBoard;