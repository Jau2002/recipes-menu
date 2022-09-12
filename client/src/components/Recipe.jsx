function Recipe({ name, diets, img, healthScore }) {
	return (
		<article>
			<div>
				<img
					src={img}
					alt={name}
				/>
			</div>
			<div>
				<h2>{name}</h2>
				{diets.map((diet, index) => (
					<p key={index}>{diet}</p>
				))}
				<h3>Health score: {healthScore}%</h3>
			</div>
		</article>
	);
}

export default Recipe;
