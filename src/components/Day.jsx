// Day.jsx: Atstovauja vienai kalendoriaus dienai, su logika, kuri leidžia arba neleidžia atidaryti langelio.


import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { openDay } from './Tip';
import AdviceModal from './AdviceModal';

const CalendarDay = ({ day, isOpened }) => {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();

    const handleClick = () => {
        if (!isOpened && new Date().getDate() >= day) {
            dispatch(openDay(day));
            setShowModal(true);
        } else if (isOpened) {
            setShowModal(false);
        }
    };

    return (
        <div className={`calendar-day ${isOpened ? 'opened' : ''}`} onClick={handleClick}>
            {day}
            {showModal && <AdviceModal day={day} onClose={() => setShowModal(false)} />}
        </div>
    );
};

export default CalendarDay;