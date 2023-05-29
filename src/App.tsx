import React, {useState} from 'react';
import './App.css';
import GameBoard from "./components/Gameboard/GameBoard";
import Counter from "./components/Counter/Counter";
import Button from "./components/Button/Button";
import {ISquare} from "./types";


const App = () => {

    // Create Array of Square Objects
    const createItems = (size: number):ISquare[] => {

        let arr:ISquare[] = [];
        const randomNumber: number = Math.floor(Math.random() * 36) + 1;

        for(let i:number = 1; i < size; i++) {
            if(randomNumber === i) {
                arr.push({hasItem: true, clicked: false});
            }
            arr.push({hasItem: false, clicked: false})
        }
        return arr;
    }

    const [items, setItems] = useState<ISquare[]>(createItems(36));
    const [tries, setTries] = useState<number>(0);
    const [stopGame, setStopGame] = useState<boolean>(false);

    const clickHandle = (index:number) => {

        // Open/toggle squares
        if(!items[index].clicked) {
            setItems(prevState => {
                const copyItems = [...prevState];
                copyItems[index].clicked = true;
                return copyItems;
            })
            setTries(prevState => prevState + 1);
        }

        // Block GameBoard for clicks if Ring founded
        if(items[index].hasItem) {
            setStopGame(true);
        }
    }

    //Reset Game

    const resetGame = () => {
        setItems(createItems(36));
        setTries(0);
        setStopGame(false);
    }

    return (
        <div className="App">
            <div className="inner">
                <GameBoard
                    items={items}
                    onSquareClick={clickHandle}
                    stopGame={stopGame}
                    tries={tries}
                />
                <Counter tries={tries}/>
                <Button onClick={resetGame}/>
            </div>
        </div>
    );
}

export default App;
