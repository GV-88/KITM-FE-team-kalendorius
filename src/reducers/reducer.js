import { SET_LOADING, SET_TIPS } from "../actions/actions";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true };
    case SET_TIPS:
      const today = new Date().getDate();

      const updateAdventTips = action.payload.adventTips.map((item) => ({
        ...item,
        advice: item.day <= today ? item.advice : null,
      }));
      return {
        ...state,
        isLoading: false,
        adventTips: updateAdventTips,
      };
    default:
      throw new Error(`No matching "${action.type}" action type`);
  }
};

export default reducer;
