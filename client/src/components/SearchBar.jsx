import useSearch from '../hooks/useSearch';
import '../styles/modules/SearchBar.css';

function SearchBar() {
	const { search, handleOnChange, onPush, handleOnReset } = useSearch();

	return (
		<form
			onSubmit={onPush}
			className='contains-form'
		>
			<input
				className='input-search'
				value={search}
				placeholder='Search dish...'
				onChange={handleOnChange}
			/>
			<button
				className='button-search-bar'
				type='submit'
				disabled={!search.trim().length}
			>
				Search
			</button>
			<button
				className='button-search-bar'
				onClick={handleOnReset}
				type='button'
			>
				Reset
			</button>
		</form>
	);
}

export default SearchBar;
