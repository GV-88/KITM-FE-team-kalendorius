import React from "react";
import Calendar from "../calendar/Calendar";
import AdventHeader from "../adventHeader/AdventHeader";
import AdventFooter from "../adventFooter/AdventFooter";
import ThemeProvider from "../../contexts/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <AdventHeader />
        <Calendar />
        <AdventFooter />
      </div>
    </ThemeProvider>
  );
};

export default App;
