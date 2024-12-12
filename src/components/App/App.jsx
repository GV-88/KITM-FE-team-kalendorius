import React from "react";
import Calendar from "../Calendar/Calendar";
import AdventHeader from "../adventHeader/AdventHeader";
import AdventFooter from "../adventFooter/AdventFooter";
import ThemeProvider from '../../contexts/ThemeContext';
import { AppProvider } from "../../contexts/CalendarContext"; 

const App = () => {
  return (
    <ThemeProvider>
      <AppProvider>
        <div className="App">
          <AdventHeader />
          <Calendar />
          <AdventFooter />
        </div>
      </AppProvider>
    </ThemeProvider>
  );
};

export default App;
