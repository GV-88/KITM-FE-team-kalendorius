import { useGlobalContext } from "../../contexts/CalendarContext";
import Card from "../card/Card";

const Cards = () => {
  const { isLoading, adventTips, currentDayOpen, setOpenDayFn, getOpenedDayAdviceFn, today } = useGlobalContext();

  //GV: cia kažkiek nusižiūrėjau nuo Aurelijaus,
  // man taip lengviau, negu apjunginėti per GIT

  if (isLoading) {
    return <h1 className="loading">Loading...</h1>;
  }

  const selectedAdvice = getOpenedDayAdviceFn();

  return (
    <>
      {adventTips.map((gridItem) => {
        const day = gridItem.day;
        return <Card key={day} day={day} />;
      })}
      {currentDayOpen && (
        //TODO: separate modal components for different content type
        <div className="modal">
          {selectedAdvice.advice ? (
            <div className="modal-content">
              <h3>Dienos {selectedAdvice.day} patarimas:</h3>
              <p>{selectedAdvice.advice}</p>
              <button onClick={() => setOpenDayFn(null)}>Uždaryti</button>
            </div>
          ) : (
            <div className="modal-content">
              <p>{`Kantrybes! Bus po ${currentDayOpen - today} dienu`}</p>
              <button onClick={() => setOpenDayFn(null)}>Uždaryti</button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Cards;
