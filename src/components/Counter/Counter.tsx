import React from 'react';
import './Counter.css';

interface IProps {
    tries:number;
}
const Counter:React.FC<IProps> = ({tries}) => {
    return (
        <div className="counter">
            Tries: {tries}
        </div>
    );
};

export default Counter;