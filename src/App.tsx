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

        for(let i:number = 1; i < size; i++) {
            if(randomNumber === i) {
                console.log("Ring", i)
                arr.push({hasItem: true, clicked: false});
            }
            arr.push({hasItem: false, clicked: false})
        }

        return arr;
    }

    const [items, setItems] = useState<ISquare[]>(createItems(36))
    const [tries, setTries] = useState<number>(0);

    const clickHandle = (index:number) => {
        console.log(index)
        if(!items[index].clicked) {
            setItems(prevState => {
                const copyItems = [...prevState];
                copyItems[index].clicked = true;
                return copyItems;
            })
            setTries(prevState => prevState + 1);
        }
    }

    return (
        <div className="App">
            <div className="inner">
                <GameBoard items={items} onSquareClick={clickHandle}/>
                <Counter tries={tries}/>
                <Button/>
            </div>
        </div>
    );
}

export default App;
