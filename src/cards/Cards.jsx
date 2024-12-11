import { useGlobalContext } from "../contexts/CalendarContext";

const Cards = () => {
	const{isLoading, adventTips} = useGlobalContext();

	if(isLoading){
		return <h1>Loading....</h1>
	}
	return(
		<>
			{adventTips.map(gridItem => {
				const{day, advice} = gridItem
					return(
					<div className='calendar-day' key={day}>
						{day}
					</div>
			)
		})}
		</>
	)
}

export default Cards;