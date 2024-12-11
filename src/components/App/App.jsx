import React from "react";
import Calendar from "../calendar/Calendar";
import AdventHeader from "../adventHeader/AdventHeader";
import AdventFooter from "../adventFooter/AdventFooter";

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
