import { useGlobalContext } from "../../contexts/CalendarContext";
import { useState, useEffect } from 'react';
import { useThemeContext } from "../../contexts/ThemeContext";
import { OPEN_DAY } from "../../actions/actions"; 

// Import your icons here
import icon1 from '../../assets/images/icon/1.png';
import icon2 from '../../assets/images/icon/2.png';
import icon3 from '../../assets/images/icon/3.png';
import icon4 from '../../assets/images/icon/4.png';
import icon5 from '../../assets/images/icon/5.png';
import icon6 from '../../assets/images/icon/6.png';
import icon7 from '../../assets/images/icon/7.png';
import icon8 from '../../assets/images/icon/8.png';
import icon9 from '../../assets/images/icon/9.png';
import icon10 from '../../assets/images/icon/10.png';
import icon11 from '../../assets/images/icon/11.png';
import icon12 from '../../assets/images/icon/12.png';

const icons = [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, icon10, icon11, icon12];

const Cards = () => {
  const { isLoading, adventTips, openDay, dispatch } = useGlobalContext(); 
  const [selectedAdvice, setSelectedAdvice] = useState(null);
  const [showPatienceMessage, setShowPatienceMessage] = useState({ day: null, timer: null });
  const [iconMap, setIconMap] = useState({});
  const { isDarkMode } = useThemeContext();

  useEffect(() => {
    const newIconMap = {};
    adventTips.forEach(({ day }) => {
      if (day % 2 === 0) {
        newIconMap[day] = icons[Math.floor(Math.random() * icons.length)];
      }
    });
    setIconMap(newIconMap);
  }, [adventTips]);

  const handleDayClick = (day, advice) => {
    if (!isFutureDay(day)) {
      if (!openDay.includes(day)) {
        dispatch({ type: OPEN_DAY, payload: day });
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
    return <h1 className="loading">Palaukite...</h1>;
  }
  
  return (
    <div className={`calendar-grid-wrapper ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="calendar-grid">
        {adventTips.map((gridItem) => {
          const { day, advice } = gridItem;
          const isDayOpen = openDay.includes(day);
          const showIcon = day % 2 === 0;

          return (
            <div 
              className={`calendar-day ${isDayOpen ? 'open' : ''} ${isDarkMode ? 'dark' : ''}`}
              key={day}
              onClick={() => handleDayClick(day, advice)}
            >
              {day}
              {showIcon && <img src={iconMap[day]} alt={`Icon for day ${day}`} className="random-icon" />}
            </div>
          );
        })}
      </div>
      {showPatienceMessage.day && (
        <div className="patience-overlay">
          <div className={`patience-message ${isDarkMode ? 'dark' : ''}`}>{showPatienceMessage.message}</div>
        </div>
      )}
      {selectedAdvice && (
        <div className="modal">
          <div className={`modal-content ${isDarkMode ? 'dark' : ''}`}>
            <h3>{selectedAdvice.day} Dienos patarimas:</h3>
            <p>{selectedAdvice.advice}</p>
            <button onClick={() => setSelectedAdvice(null)}>Uždaryti</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cards;