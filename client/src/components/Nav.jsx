import { NavLink, useLocation } from 'react-router-dom';
import create from '../../public/create.png';
import home from '../../public/home.png';
import menu from '../../public/menu.jpeg';
import useSearch from '../hooks/useSearch';

function Nav() {
	const { search, handleOnChange, onPush } = useSearch();

	const { pathname } = useLocation();

	return (
		<nav>
			{pathname === '/home' ? (
				<>
					<div>
						<NavLink to='/'>
							<img
								src={home}
								alt='home'
							/>
							<p type='button'>Home</p>
						</NavLink>
						<NavLink to='/recipes'>
							<img
								src={create}
								alt='create'
							/>
							<p type='button'>Create</p>
						</NavLink>
					</div>
					<div>
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
					</div>
				</>
			) : (
				<NavLink to='/home'>
					<img
						src={menu}
						alt='menu'
					/>
					<p type='button'>Menu</p>
				</NavLink>
			)}
		</nav>
	);
}

export default Nav;
