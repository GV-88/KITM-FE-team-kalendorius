import { SET_LOADING, SET_TIPS, SET_OPENED_DAYS, SET_OPEN_DAY } from "../actions/actions";
import Storage from "../utilities/Storage";

const reducer = (state, action) => {
  const storeOpenedDays = (days) => {
    Storage.setCalendarDaysOpened(days);
  };

  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true };
    case SET_TIPS: {
      const today = new Date().getDate();

      //GV: ideally this would be already done in backend, so this is like an extra check
      const updateAdventTips = action.payload.adventTips.map((item) => ({
        ...item,
        advice: item.day <= today ? item.advice : null,
      }));
      return {
        ...state,
        isLoading: false,
        adventTips: updateAdventTips,
      };
    }
    case SET_OPENED_DAYS:
      return { ...state, daysOpened: action.payload.daysOpened };
    // storeOpenedDays(newOpenedDays);
    //GV: storing doesn't make sense here, because the event is only triggered on retrieval
    case SET_OPEN_DAY: {
      let newOpenedDays = state.daysOpened;
      const day = action.payload.day;

      if (Number.isInteger(day) && day <= new Date().getDate()) {
        newOpenedDays = Array.from(new Set(newOpenedDays).add(day)); //GV: using Set is a way to ensure unique elements in array
        // Storage.addToCalendarDaysOpened(day);
        storeOpenedDays(newOpenedDays);
      }
      return { ...state, daysOpened: newOpenedDays, currentDayOpen: day };
    }
    default:
      throw new Error(`No matching "${action.type}" action type`);
  }
};

export default reducer;
