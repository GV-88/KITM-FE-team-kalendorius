// // Calendar.jsx: Komponentas, kuris renderina visus kalendoriaus langelius.

import React from 'react';
import CalendarDay from './Day';
import { useSelector } from 'react-redux';
import { selectOpenedDays } from './Tip';

const Calendar = () => {
    const openedDays = useSelector(selectOpenedDays);

    return (
        <div className="calendar-grid">
            {[...Array(24)].map((_, index) => (
                <CalendarDay key={index + 1} day={index + 1} isOpened={openedDays.includes(index + 1)} />
            ))}
        </div>
    );
};

export default Calendar;
