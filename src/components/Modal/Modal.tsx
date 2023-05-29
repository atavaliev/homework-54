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
            You Can Find The Ring With a  {tries > 1 ? `${tries} tries` : "FIRST try"}!
        </div>
    );
};

export default Modal;