import { Link } from 'react-router-dom';
import pageLanding from '../../public/page_landing.jpg';

function Landing() {
	return (
		<main>
			<aside>
				<Link to='/home'>
					<button type='button'>Menu</button>
				</Link>
			</aside>
			<img
				src={pageLanding}
				alt='landing'
			/>
		</main>
	);
}

export default Landing;
