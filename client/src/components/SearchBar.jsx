import useSearch from '../hooks/useSearch';

function SearchBar() {
	const { search, handleOnChange, onPush, handleOnReset } = useSearch();

	return (
		<form onSubmit={onPush}>
			<input
				value={search}
				placeholder='Search dish...'
				onChange={handleOnChange}
			/>
			<button
				type='submit'
				disabled={!search.trim().length}
			>
				Search
			</button>
			<button
				onClick={handleOnReset}
				type='button'
			>
				Reset
			</button>
		</form>
	);
}

export default SearchBar;
