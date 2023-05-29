import React from 'react';
import logo from './logo.svg';
import './App.css';
import GameBoard from "./components/GameBoard";
import Counter from "./components/Counter";
import Button from "./components/Button";

function App() {
    return (
        <div className="App">
            <GameBoard/>
            <Counter/>
            <Button/>
        </div>
    );
}

export default App;
