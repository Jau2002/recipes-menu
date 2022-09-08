import { useMemo, useState } from 'react';

function useSearch() {
	const [search, setSearch] = useState('');

	const handleOnDisabled = () => {
		useMemo(() => search.trim().length <= 1, [search]);
	};

	const handleOnChange = (e) => {
		setSearch(([e.target.name] = e.target.value));
	};

	const onPush = (e) => {
		e.preventDefault();
		setSearch('');
	};

	return { search, handleOnChange, handleOnDisabled, onPush };
}

export default useSearch;
