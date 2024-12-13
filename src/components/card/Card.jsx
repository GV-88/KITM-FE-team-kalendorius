import { useGlobalContext } from "../../contexts/CalendarContext";
import { useThemeContext } from "../../contexts/ThemeContext";

const Card = ({ day, iconSrc }) => {
  const { isOpenedFn, setOpenDayFn, today } = useGlobalContext();
  const { isDarkMode } = useThemeContext();

  const classList = ["calendar-day"];
  if (day < today) {
    classList.push("past");
  } else if (day === today) {
    classList.push("today");
  }
  if (isOpenedFn(day)) {
    classList.push("open");
  }
  if (isDarkMode) {
    classList.push("dark");
  }

  return (
    <div className={classList.join(" ")} data-day={day} onClick={() => setOpenDayFn(day)}>
      {day}
      <img src={iconSrc} alt={`Icon for day ${day}`} className="random-icon" />
    </div>
  );
};

export default Card;
