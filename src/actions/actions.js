export const SET_LOADING = "SET_LOADING"; //no payload (and no need to trigger "loading done" outside of reducer)
export const SET_TIPS = "SET_TIPS"; //expected payload: { adventTips: [] }
export const SET_OPENED_DAYS = "SET_OPENED_DAYS"; //expected payload: {daysOpened: []} //array of numbers
export const SET_OPEN_DAY = "SET_OPEN_DAY"; //expected payload: {day: 1} //single number, or null for close
