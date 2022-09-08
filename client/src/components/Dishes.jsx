import { Link } from 'react-router-dom';
import useDishes from '../hooks/useDishes';
import Recipe from './Recipe';

function Dishes() {
	const { dish } = useDishes();

	return (
		<section>
			{!dish ? (
				<img
					src='../../public/preloader.gif'
					alt='preloader'
				/>
			) : (
				dish.map((d) => (
					<Link
						to={`/recipes/${d.id}`}
						key={d.id}
					>
						<Recipe
							key={d.id}
							name={d.name}
							diets={d.diets}
							img={d.img}
							healthScore={d.healthScore}
						/>
					</Link>
				))
			)}
		</section>
	);
}

export default Dishes;
