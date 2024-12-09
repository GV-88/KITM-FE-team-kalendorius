const DayCard = ({ dayNumber, isOpened }) => {
  return <div className={'day-card' + isOpened ? ' is-opened' : ''}>{dayNumber}</div>;
};

export default DayCard;
