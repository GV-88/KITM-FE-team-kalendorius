import React from 'react';
import CalendarGrid from './components/Calendar';

const App = () => {
  return (
    <div className="App">
      <h1>Sveiki atvykę į 2024 m. Advantage Kalėdų Advento kalendorių!</h1>
      <h1>Kiekvieną dieną atidarykite duris ir galite laimėti nuostabų prizą iš vieno iš mūsų verslo partnerių.</h1>
      <h1>Sėkmės!</h1>
      <CalendarGrid />
      <footer>Aurelijus, Deividas?, Gytis, Šarūnas © 2024 Advento Kalendorius Valdymo Sistema</footer>
    </div>
  );
};

export default App;
