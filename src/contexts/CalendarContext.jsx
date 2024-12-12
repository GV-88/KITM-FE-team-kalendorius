import { SET_LOADING, SET_TIPS, SET_OPENED_DAYS, SET_OPEN_DAY } from "../actions/actions";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/reducer";
import Storage from "../utilities/Storage";

const initialState = {
  isLoading: true,
  adventTips: [], //GV: this data object is supposed to hold calendar days with texts only for past days
  daysOpened: [],
  currentDayOpen: null,
};

const JSON_LINK = "/src/adventTips.json";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const setOpenDayFn = (day) => dispatch({ type: SET_OPEN_DAY, payload: { day: day } });
  const isOpenedFn = (day) => state.daysOpened.includes(day); // function to check if the day number is in opened days
  const getOpenedDayAdviceFn = () => {
    const day = state.currentDayOpen;
    return {
      day: day,
      advice: day ? state.adventTips.find((obj) => obj.day === day)?.advice : null,
    };
  };
  const today = new Date().getDate(); // month day number

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

  const loadOpenedDaysFromStorage = async () => {
    const daysOpened = await Storage.getCalendarDaysOpened();
    if (daysOpened) {
      dispatch({ type: SET_OPENED_DAYS, payload: { daysOpened: daysOpened } });
    }
  };

  useEffect(() => {
    loadOpenedDaysFromStorage();
  }, []);

  useEffect(() => {
    fetchStories(JSON_LINK);
  }, []);

  // these values live in context and are accessible to any components that use this context
  return (
    <AppContext.Provider
      value={{
        ...state,
        setOpenDayFn: setOpenDayFn,
        isOpenedFn: isOpenedFn,
        getOpenedDayAdviceFn: getOpenedDayAdviceFn,
        today: today,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
