import useDetail from '../hooks/useDetail';
import Loader from './Loader';

function Detail() {
	const { detail } = useDetail();

	return (
		<header>
			{detail.length ? (
				<div>
					<div>
						<h2>{detail[0].name}</h2>
					</div>
					<div>
						<img
							src={detail[0].img}
							alt={detail[0].name}
						/>
						<div>
							<h3>Diets</h3>
							<h4>
								{detail[0].diets
									? detail[0].diets.map((d) => `${d}, `)
									: 'Dish type not found'}
							</h4>
						</div>
						<div>
							<h3>Dish types</h3>
							<h4>
								{detail[0].types
									? detail[0].types.map((t) => `${t}, `)
									: 'Dish type not found'}
							</h4>
						</div>
					</div>
					<div>
						<h3>Summary</h3>
						<h4>
							<div dangerouslySetInnerHTML={{ __html: detail[0].summary }} />
						</h4>
					</div>
					<div>
						<h4>Health score: {detail[0].healthScore}%</h4>
					</div>
					<div>
						<h3>Steps</h3>
						<h4>
							{detail[0].steps
								? detail[0].steps.map((s) => s)
								: 'This recipe doesn´t have steps'}
						</h4>
					</div>
				</div>
			) : (
				<Loader />
			)}
		</header>
	);
}

export default Detail;
