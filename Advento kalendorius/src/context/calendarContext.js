import React, { createContext, useReducer, useEffect } from 'react';

const CalendarContext = createContext();

const initialState = {
    openedDays: JSON.parse(localStorage.getItem('openedDays')) || [],
};

function calendarReducer(state, action) {
    switch (action.type) {
        case 'OPEN_DAY':
            if (!state.openedDays.includes(action.payload)) {
                return {
                    ...state,
                    openedDays: [...state.openedDays, action.payload]
                };
            }
            return state;
        default:
            return state;
    }
}

export function CalendarContextProvider({ children }) {
    const [state, dispatch] = useReducer(calendarReducer, initialState);

    useEffect(() => {
        localStorage.setItem('openedDays', JSON.stringify(state.openedDays));
    }, [state.openedDays]);

    return (
        <CalendarContext.Provider value={{ state, dispatch }}>
            {children}
        </CalendarContext.Provider>
    );
}

export default CalendarContext;