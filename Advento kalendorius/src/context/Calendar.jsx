import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openDay, getOpenedDays } from '../store/daySlice';

const Calendar = () => {
  const dispatch = useDispatch();
  const openedDays = useSelector(getOpenedDays);
  
  const handleDayOpen = (day) => {
    if (day <= new Date().getDate()) {
      dispatch(openDay(day));
    }
  };

  return (
    <div className="calendar">
      {[...Array(24)].map((_, index) => {
        const day = index + 1;
        const isOpened = openedDays.includes(day);
        const isFuture = day > new Date().getDate();

        return (
          <div 
            key={day} 
            className={`day ${isOpened ? 'opened' : ''} ${isFuture ? 'future' : ''}`}
            onClick={() => handleDayOpen(day)}
          >
            {day}
            {isOpened && <div className="tip">Čia bus patarimas {day} dienai</div>}
            {isFuture && <div className="tip">Ši diena dar nepasiekiama</div>}
          </div>
        );
      })}
    </div>
  );
};

export default Calendar;