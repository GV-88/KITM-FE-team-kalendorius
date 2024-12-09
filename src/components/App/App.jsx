import CalendarGrid from '../CalendarGrid/CalendarGrid';
import DayCard from '../DayCard/DayCard';

function App() {
  //TODO: conditional rendering: replace <CalendarGrid> with loading component when in loading state
  return (
    <>
      <main>
        <CalendarGrid>
          {Array(24)
            .fill(undefined)
            .map((val, index) => (
              <DayCard key={index} dayNumber={index + 1} />
            ))}
        </CalendarGrid>
      </main>
    </>
  );
}

export default App;
