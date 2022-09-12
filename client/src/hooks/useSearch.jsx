import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getRecipeByName } from '../actions';

function useSearch() {
	const [search, setSearch] = useState('');

	const handleOnChange = (event) => {
		setSearch(event.target.value);
	};

	const dispatch = useDispatch();

	const onPush = (event) => {
		event.preventDefault();
		dispatch(getRecipeByName(search));
		setSearch('');
	};

	const handleOnReset = (event) => {
		event.preventDefault();
		window.location.reload();
	};

	return { search, handleOnChange, onPush, handleOnReset };
}

export default useSearch;
