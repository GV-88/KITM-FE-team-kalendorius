// AdviceModal.jsx: Modalas, kuris rodo patarimą, kai pasirenkama diena.


import React from 'react';
import { useSelector } from 'react-redux';
import { selectAdviceByDay } from './Tip';

const AdviceModal = ({ day, onClose }) => {
    const advice = useSelector(state => selectAdviceByDay(state, day));

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <p>{advice}</p>
            </div>
        </div>
    );
};

export default AdviceModal;