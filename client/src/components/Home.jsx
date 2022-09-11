import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllRecipes } from '../redux/actions';
import { selectRecipes } from '../redux/constants';
import Loader from './Loader';
import Page from './Page';
import Recipe from './Recipe';

function Home() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllRecipes());
	}, [dispatch]);

	dispatch(selectRecipes);

	const dishes = useSelector(selectRecipes);

	const [currentPage, setCurrentPage] = useState(1);

	const [isActive, setActive] = useState('');

	const handleOnClick = (pageNumber) => {
		setCurrentPage(pageNumber);
		setActive(pageNumber);
	};

	const allShowOnPage = 9;

	const lastPage = currentPage * allShowOnPage;

	const firstPage = lastPage - allShowOnPage;

	const dishesAllShow = dishes.slice(firstPage, lastPage);

	return (
		<>
			<section>
				{dishesAllShow.length ? (
					dishesAllShow.map((d) => (
						<Link
							key={d.id}
							to={`/recipes/${d.id}`}
						>
							<Recipe
								name={d.name}
								diets={d.diets}
								img={d.img}
								healthScore={d.healthScore}
							/>
						</Link>
					))
				) : (
					<Loader />
				)}
			</section>
			<Page
				isActive={isActive}
				allShowOnPage={allShowOnPage}
				dishes={dishes.length}
				handleOnClick={handleOnClick}
			/>
		</>
	);
}

export default Home;