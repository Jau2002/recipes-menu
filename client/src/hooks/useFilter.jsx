import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	filterByDiet,
	filterByName,
	filterByScore,
	getAllDiets,
} from '../actions';
import { selectDiets } from '../constants';
import useMemory from './useMemory';

function useFilter() {
	const { setCurrentPage } = useMemory();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllDiets());
	}, [dispatch]);

	const handleFilterDiets = (event) => {
		event.preventDefault();
		dispatch(filterByDiet(event.target.value));
	};

	const handleOrderName = (event) => {
		event.preventDefault();
		dispatch(filterByName(event.target.value));
		setCurrentPage(1);
	};

	const handleOrderScore = (event) => {
		event.preventDefault();
		dispatch(filterByScore(event.target.value));
		setCurrentPage(1);
	};

	const diets = useSelector(selectDiets);

	return { handleFilterDiets, handleOrderName, handleOrderScore, diets };
}

export default useFilter;
