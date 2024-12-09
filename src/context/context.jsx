import { createContext, useContext, useReducer } from "react";
import { 
    DO_ACTION_1,
    DO_ACTION_2
    } from "../actions/actions";
import reducer from "../reducers/reducer";

const initialState = {}

const AppContext = createContext();

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return(
        <AppContext.Provider value={({...state})}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export {AppContext, AppProvider}
