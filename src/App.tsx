import React, {useState} from 'react';
import './App.css';
import GameBoard from "./components/Gameboard/GameBoard";
import Counter from "./components/Counter/Counter";
import Button from "./components/Button/Button";
import {ISquare} from "./types";




const App = () => {

    const createItems = (size: number):ISquare[] => {

        let arr:ISquare[] = [];

        const randomNumber: number = Math.floor(Math.random() * 36) + 1;

        console.log(randomNumber, "Rand")

        for(let i:number = 1; i < size; i++) {


            if(randomNumber === i) {
                console.log("O")
                arr.push({hasItem: false, clicked: true});

            }
            arr.push({hasItem: false, clicked: false})
        }

        return arr;
    }
    const [items, setItems] = useState<ISquare[]>(createItems(36))


    return (
        <div className="App">
            <div className="inner">
                <GameBoard items={items}/>
                <Counter/>
                <Button/>
            </div>
        </div>
    );
}

export default App;
