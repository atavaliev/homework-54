import React from 'react';
import Square from "../Square/Square";
import './Gameboard.css';
import {ISquare} from "../../types";

interface IProps {
    items:ISquare[];
}

const GameBoard:React.FC<IProps> = ({items}) => {

    return (
        <div className="gameboard">

            {
                items.map((i,index) => {
                   return  <Square key={Date.now()+index} hasItem={i.hasItem} clicked={i.clicked}/>
                })
            }

        </div>
    );
};

export default GameBoard;