import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getRecipeDetail } from '../actions';
import { selectDetails } from '../constants';

function useDetail() {
	const { id } = useParams();

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getRecipeDetail(id));
	}, [dispatch]);

	const detail = useSelector(selectDetails);

	return { detail };
}

export default useDetail;
