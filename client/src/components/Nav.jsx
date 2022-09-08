import { NavLink } from 'react-router-dom';
import useSearch from '../hooks/useSearch';

function Nav() {
	const { search, handleOnChange, handleOnDisabled, onPush } = useSearch();

	return (
		<nav>
			<div>
				<NavLink to='/'>Home</NavLink>
				<NavLink to='/recipes'>Create dish</NavLink>
				<NavLink to='/About'>About</NavLink>
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
					disabled={handleOnDisabled}
				>
					Search
				</button>
			</form>
		</nav>
	);
}

export default Nav;
