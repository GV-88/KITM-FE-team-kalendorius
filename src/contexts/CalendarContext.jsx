import { SET_LOADING, SET_TIPS} from "../actions/actions";
import React from "react";
import { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/reducer";

const initialState = {
	isLoading: true,
	adventTips: [],
}

const JSON_LINK = '/src/adventTips.json'

const AppContext = React.createContext();

const AppProvider = ({children}) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const fetchStories = async (url) =>{
			dispatch({type:SET_LOADING});
			try{
					const response = await fetch(url);
					const data = await response.json();
					dispatch({
							type: SET_TIPS,
							payload:{adventTips: data.adventTips}
					})
			}catch(error){
					console.log(error)
			}
	}

	useEffect(()=>{
			fetchStories(JSON_LINK)
	}, [])

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
