import useFilter from '../hooks/useFilter';
import '../styles/modules/Select.css';

function Select() {
	const { handleFilterDiets, handleOrderName, handleOrderScore, diets } =
		useFilter();

	return (
		<section className='container-select'>
			<select
				className='select-options'
				onChange={handleOrderName}
			>
				<option value='all'>All</option>
				<option value='asc'>α ↓ ζ</option>
				<option value='desc'>ζ ↓ α</option>
			</select>
			<select
				className='select-options'
				onChange={handleOrderScore}
			>
				<option value='all'>All</option>
				<option value='high'>High Score</option>
				<option value='low'>Low Score</option>
			</select>
			<select
				className='select-options'
				onChange={handleFilterDiets}
			>
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
		</section>
	);
}

export default Select;
