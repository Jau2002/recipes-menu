import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import preLoader from '../../public/preloader.gif';
import { getAllRecipes } from '../redux/actions';
import { selectRecipes } from '../redux/constants';
import Recipe from './Recipe';

function Home() {
	const dispatch = useDispatch();

	dispatch(selectRecipes);

	useEffect(() => {
		dispatch(getAllRecipes());
	}, [dispatch]);

	const dishes = useSelector(selectRecipes);

	const [currentPage, setCurrentPage] = useState(1);

	const allShowOnPage = 9;

	const lastPage = currentPage * allShowOnPage;

	const firstPage = lastPage - allShowOnPage;

	const dishesAllShow = dishes.slice(firstPage, lastPage);

	const handleOnClick = (pageNumber) => setCurrentPage(pageNumber);

	const numPages = [];

	for (let i = 1; i <= Math.ceil(dishes.length / allShowOnPage); i++) {
		numPages.push(i);
	}

	return (
		<>
			<section>
				{dishesAllShow.length ? (
					dishesAllShow.map((d) => (
						<Link
							to={`/recipes/${d.id}`}
							key={d.id}
						>
							<Recipe
								id={d.id}
								name={d.name}
								diets={d.diets}
								img={d.img}
								healthScore={d.healthScore}
							/>
						</Link>
					))
				) : (
					<img
						src={preLoader}
						alt='preLoader'
					/>
				)}
			</section>
			<footer>
				<ul>
					{numPages?.map((num) => (
						<li>
							<button
								type='button'
								onClick={() => handleOnClick(num)}
							>
								{num}
							</button>
						</li>
					))}
				</ul>
			</footer>
		</>
	);
}

export default Home;
