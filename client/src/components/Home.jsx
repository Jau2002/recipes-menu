import { Link } from 'react-router-dom';
import useMemory from '../hooks/useMemory';
import '../styles/modules/Home.css';
import Loader from './Loader';
import Page from './Page';
import Recipe from './Recipe';

function Home() {
	const { dishesAllShow, handleOnClick } = useMemory();

	return (
		<div className='container-home'>
			<section className=''>
				{dishesAllShow.length ? (
					dishesAllShow.map(({ id, name, diets, img, healthScore }) => (
						<Link
							key={id}
							to={`/recipes/${id}`}
						>
							<Recipe
								name={name}
								diets={diets}
								img={img}
								healthScore={healthScore}
							/>
						</Link>
					))
				) : (
					<Loader />
				)}
			</section>
			<div className='container-home'>
				<Page handleOnClick={handleOnClick} />
			</div>
		</div>
	);
}

export default Home;
