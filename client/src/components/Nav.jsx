import { NavLink } from 'react-router-dom';
import useSearch from '../hooks/useSearch';

function Nav() {
	const { search, handleOnChange, onPush } = useSearch();

	return (
		<nav>
			<div>
				<NavLink to='/'>Home</NavLink>
				<NavLink to='/recipes'>Create dish</NavLink>
			</div>
			<form onSubmit={onPush}>
				<input
					value={search}
					placeholder='Search dish...'
					name='recipe'
					onChange={handleOnChange}
				/>
				<button
					type='submit'
					disabled={!search.trim().length}
				>
					Search
				</button>
			</form>
		</nav>
	);
}

export default Nav;
