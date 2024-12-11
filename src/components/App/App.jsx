import React from "react";
import Calendar from "../calendar/Calendar";
import AdventHeader from "../adventHeader/adventHeader";
import AdventFooter from "../adventFooter/adventFooter";

const App = () => {
  return (
    <div className="App">
      <AdventHeader />
      <Calendar />
      <AdventFooter />
    </div>
  );
};

export default App;
