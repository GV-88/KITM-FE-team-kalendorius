import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/reducer";
import { SET_LOADING, SET_TIPS, OPEN_DAY } from "../actions/actions";

const initialState = {
  isLoading: true,
  adventTips: [],
  openDay: JSON.parse(localStorage.getItem('openedDays')) || []
};

const JSON_LINK = "/src/adventTips.json";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchStories = async (url) => {
    dispatch({ type: SET_LOADING });
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({
        type: SET_TIPS,
        payload: { adventTips: data.adventTips },
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStories(JSON_LINK);
  }, []);

  useEffect(() => {
    localStorage.setItem('openedDays', JSON.stringify(state.openDay));
  }, [state.openDay]);

  const openDayAction = (day) => {
    dispatch({ type: OPEN_DAY, payload: day });
  };

  return (
    <AppContext.Provider value={{ ...state, openDayAction }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
