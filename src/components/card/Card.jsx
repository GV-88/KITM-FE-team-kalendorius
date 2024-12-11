import { useGlobalContext } from "../../contexts/CalendarContext";

const Card = ({ day }) => {
  const { isOpenedFn, setOpenDayFn, today } = useGlobalContext();

  const classList = ["calendar-day"];
  if (day < today) {
    classList.push("past");
  } else if (day === today) {
    classList.push("today");
  }
  if (isOpenedFn(day)) {
    classList.push("open");
  }

  return (
    <div className={classList.join(" ")} data-day={day} onClick={() => setOpenDayFn(day)}>
      {day}
    </div>
  );
};

export default Card;
