import { useDispatch, useSelector } from 'react-redux';
import { filterByDiet, filterByName, filterByScore } from '../actions';
import { selectDiets } from '../constants';

function useFilter() {
	const dispatch = useDispatch();

	const handleFilterDiets = (event) => {
		event.preventDefault();
		dispatch(filterByDiet(event.target.value));
	};

	const handleOrderName = (event) => {
		event.preventDefault();
		dispatch(filterByName(event.target.value));
	};

	const handleOrderScore = (event) => {
		event.preventDefault();
		dispatch(filterByScore(event.target.value));
	};

	const diets = useSelector(selectDiets);

	return { handleFilterDiets, handleOrderName, handleOrderScore, diets };
}

export default useFilter;
