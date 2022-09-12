import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllDiets, getAllRecipes } from '../redux/actions';
import { selectRecipes } from '../redux/constants';
import Loader from './Loader';
import Page from './Page';
import Recipe from './Recipe';

function Home() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllRecipes());
		dispatch(getAllDiets());
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
