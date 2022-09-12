import useFilter from '../hooks/useFilter';

function Select() {
	const { handleFilterDiets, handleOrderName, handleOrderScore, diets } =
		useFilter();

	return (
		<>
			<select onChange={handleOrderName}>
				<option value='all'>All</option>
				<option value='asc'>α ↓ ζ</option>
				<option value='desc'>ζ ↓ α</option>
			</select>
			<select onChange={handleOrderScore}>
				<option value='all'>All</option>
				<option value='high'>High Score</option>
				<option value='low'>Low Score</option>
			</select>
			<select onChange={handleFilterDiets}>
				<option value='all'>All</option>
				{diets?.map(({ id, name }) => (
					<option
						key={id}
						value={name}
					>
						{name}
					</option>
				))}
			</select>
		</>
	);
}

export default Select;
