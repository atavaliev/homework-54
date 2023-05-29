import React from 'react';
import './Modal.css'

interface IProps {
    tries:number;
}

const Modal:React.FC<IProps> = ({tries}) => {

    return (
        <div className="modal">
            You Can Find The Ring With a {tries}!
        </div>
    );
};

export default Modal;