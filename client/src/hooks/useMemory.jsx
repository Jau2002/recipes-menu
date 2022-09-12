import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDiets, getAllRecipes } from '../actions';
import { selectRecipes } from '../constants';

function useMemory() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllRecipes());
		dispatch(getAllDiets());
	}, [dispatch]);

	const [isActive, setActive] = useState('');

	const [currentPage, setCurrentPage] = useState(1);

	const handleOnClick = (pageNumber) => {
		setCurrentPage(pageNumber);
		setActive(pageNumber);
	};

	const allShowOnPage = 9;

	const lastPage = currentPage * allShowOnPage;

	const firstPage = lastPage - allShowOnPage;

	const dishes = useSelector(selectRecipes);

	const dishesAllShow = dishes.slice(firstPage, lastPage);

	return {
		dishesAllShow,
		isActive,
		handleOnClick,
		allShowOnPage,
		dishes,
	};
}

export default useMemory;
