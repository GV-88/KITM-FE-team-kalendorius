import React from 'react';
import { useThemeContext } from "../../contexts/ThemeContext";
import ChristmasTree from "../../assets/images/christmas-tree.gif";

const AdventHeader = () => {
  const { isDarkMode, toggleDarkMode } = useThemeContext();

  return (
    <>
			<button 
        onClick={toggleDarkMode}
        className="theme-toggle-button"
      >
        {isDarkMode ? "Šviesus režimas" : "Tamsus režimas"}
      </button>
      <h1>Sveiki atvykę į 2024 m. Advantage Kalėdų Advento kalendorių!</h1>
      <h1>
        Kiekvieną dieną atidarykite duris ir galite laimėti nuostabų prizą iš
        vieno iš mūsų verslo partnerių.
      </h1>
      <h1>Sėkmės!</h1>
			<div className='tree1'>
				<img src={ChristmasTree} alt="christmas tree" />
			</div>
			<div className='tree2'>
				<img src={ChristmasTree} alt="christmas tree" />
			</div>
    </>
  );
};

export default AdventHeader;
