import { NavLink, useLocation } from 'react-router-dom';
import create from '../../public/create.png';
import home from '../../public/home.png';
import menu from '../../public/menu.png';
import '../styles/modules/Nav.css';
import SearchBar from './SearchBar';
import Select from './Select';

function Nav() {
	const { pathname } = useLocation();

	return (
		<nav className='container-nav'>
			{pathname === '/home' ? (
				<>
					<div className='container-links'>
						<div className='container-link'>
							<NavLink to='/'>
								<img
									src={home}
									alt='home'
									width='70'
									height='90'
								/>
								<p
									type='button'
									className='button-link-home'
								>
									Home
								</p>
							</NavLink>
						</div>
						<div className='container-link'>
							<NavLink to='/recipes'>
								<img
									src={create}
									alt='create'
									width='70'
									height='90'
								/>
								<p
									type='button'
									className='button-link-create'
								>
									Create
								</p>
							</NavLink>
						</div>
					</div>
					<div>
						<SearchBar />
					</div>
					<div>
						<Select />
					</div>
				</>
			) : (
				<div className='container-links'>
					<NavLink to='/home'>
						<img
							src={menu}
							alt='menu'
							width='70'
							height='90'
						/>
						<p
							className='button-link-home'
							type='button'
						>
							Menu
						</p>
					</NavLink>
				</div>
			)}
		</nav>
	);
}

export default Nav;
