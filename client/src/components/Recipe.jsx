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
				<h3>{name}</h3>
				{diets.map((diet, index) => (
					<p key={index}>{diet}</p>
				))}
				<h4>Health Score: {healthScore} %</h4>
			</div>
		</article>
	);
}

export default Recipe;
