import useSearch from '../hooks/useSearch';

function Navbar() {
	const { search, handleOnChange, handleOnDisabled, onPush } = useSearch();

	return (
		<form onSubmit={onPush}>
			<input
				value={search}
				placeholder='Search dishes...'
				name='recipe'
				onChange={handleOnChange}
			/>
			<button
				type='submit'
				disabled={handleOnDisabled}
			>
				Search
			</button>
		</form>
	);
}

export default Navbar;
