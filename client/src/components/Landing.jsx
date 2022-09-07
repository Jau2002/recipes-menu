import { Link } from 'react-router-dom';

function Landing() {
	return (
		<main>
			<aside>
				<Link to='/home'>
					<button type='button'>Menu</button>
				</Link>
			</aside>
			<img
				src='../../public/page_landing.jpg'
				alt='landing'
			/>
		</main>
	);
}

export default Landing;
