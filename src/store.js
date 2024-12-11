import { configureStore } from "@reduxjs/toolkit";
import calendarReducer from "./components/Tip";

export const store = configureStore({
  reducer: {
    calendar: calendarReducer,
  },
});
