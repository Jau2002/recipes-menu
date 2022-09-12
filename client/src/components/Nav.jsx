import { NavLink, useLocation } from 'react-router-dom';
import create from '../../public/create.png';
import home from '../../public/home.png';
import menu from '../../public/menu.png';
import SearchBar from './SearchBar';
import Select from './Select';

function Nav() {
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
					<SearchBar />
					<Select />
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
