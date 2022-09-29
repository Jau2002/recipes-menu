import { Link } from 'react-router-dom';
import '../styles/modules/Landing.css';

function Landing() {
	return (
		<main className='container-landing'>
			<header className='landing'>
				<h1 className='title-landing'>Recipes</h1>
				<Link to='/home'>
					<button
						type='button'
						className='button-landing'
					>
						Menu
					</button>
				</Link>
			</header>
		</main>
	);
}

export default Landing;
