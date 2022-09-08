import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRecipes } from '../redux/actions';
import { selectAllRecipes } from '../redux/constants';

function useDishes() {
	const dispatch = useDispatch();

	const dish = useSelector(selectAllRecipes);

	useEffect(() => {
		dispatch(getAllRecipes());
	}, [dispatch]);

	return { dish };
}

export default useDishes;
