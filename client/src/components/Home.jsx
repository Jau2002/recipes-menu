import { Link } from 'react-router-dom';
import useMemory from '../hooks/useMemory';
import Loader from './Loader';
import Page from './Page';
import Recipe from './Recipe';

function Home() {
	const { dishesAllShow, handleOnClick } = useMemory();

	return (
		<>
			<section>
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
			<Page handleOnClick={handleOnClick} />
		</>
	);
}

export default Home;
