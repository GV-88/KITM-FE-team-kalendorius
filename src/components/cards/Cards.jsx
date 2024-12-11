import { useGlobalContext } from "../../contexts/CalendarContext";
import { useState } from 'react';

const Cards = () => {
  const { isLoading, adventTips, openDay, openDayAction } = useGlobalContext();
  const [selectedAdvice, setSelectedAdvice] = useState(null);
  const [showPatienceMessage, setShowPatienceMessage] = useState({ day: null, timer: null });

  const handleDayClick = (day, advice) => {
    if (!isFutureDay(day)) {
      if (!openDay.includes(day)) {
        openDayAction(day);
      }
      setSelectedAdvice(advice ? { day, advice } : null);
    } else {
      const daysUntil = day - new Date().getDate();
      setShowPatienceMessage({ day, message: `Kantrybės! bus po ${daysUntil} dienų` });
      if (showPatienceMessage.timer) clearTimeout(showPatienceMessage.timer);
      const timer = setTimeout(() => setShowPatienceMessage({ day: null, timer: null }), 3000);
      setShowPatienceMessage(prev => ({ ...prev, timer }));
    }
  };

  const isFutureDay = (day) => day > new Date().getDate();

  if (isLoading) {
    return <h1 className="loading">Loading...</h1>;
  }

  return (
    <>
      {adventTips.map((gridItem) => {
        const { day } = gridItem;
        const isDayOpen = openDay.includes(day);

        return (
          <div 
            className={`calendar-day ${isDayOpen ? 'open' : ''}`}
            key={day}
            onClick={() => handleDayClick(day, gridItem.advice)}
          >
            {day}
            {showPatienceMessage.day === day && <div className="patience-message">{showPatienceMessage.message}</div>}
          </div>
        );
      })}
      {selectedAdvice && (
        <div className="modal">
          <div className="modal-content">
            <h3>Dienos {selectedAdvice.day} patarimas:</h3>
            <p>{selectedAdvice.advice}</p>
            <button onClick={() => setSelectedAdvice(null)}>Uždaryti</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cards;
