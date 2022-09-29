import '../styles/modules/Recipe.css';

function Recipe({ name, diets, img, healthScore }) {
	return (
		<div className='site-container'>
			<div className='article-container'>
				<article className='article-card'>
					<figure className='article-image'>
						<img
							src={img}
							alt={name}
						/>
					</figure>
					<div className='card-category'>
						<h2 className='card-title'>{name}</h2>
						{diets?.map((diet, index) => (
							<p
								className='card-excerpt'
								key={index}
							>
								{diet}
							</p>
						))}
						<h3 className='card-category'>Health score: {healthScore}%</h3>
					</div>
				</article>
			</div>
		</div>
	);
}

export default Recipe;
