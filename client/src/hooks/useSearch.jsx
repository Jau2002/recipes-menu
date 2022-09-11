import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getRecipeByName } from '../redux/actions';

function useSearch() {
	const dispatch = useDispatch();

	const [search, setSearch] = useState('');

	const handleOnChange = (e) => {
		setSearch(([e.target.name] = e.target.value));
		dispatch(getRecipeByName(search));
	};

	const onPush = (e) => {
		e.preventDefault();
		setSearch('');
	};

	return { search, handleOnChange, onPush };
}

export default useSearch;
