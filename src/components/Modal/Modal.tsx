import React from 'react';
import './Modal.css'

interface IProps {
    tries:number;
    modalOnTop:boolean;
}

const Modal:React.FC<IProps> = ({tries, modalOnTop}) => {

    const classClicked =  `modal  ${modalOnTop ? 'onTop' : 'onBottom'} `;

    return (
        <div className={classClicked}>
            You Can Find The Ring With a {tries}!
        </div>
    );
};

export default Modal;