import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllDiets, postRecipe } from '../redux/actions';
import { selectDiets } from '../redux/constants';

function NewDish() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllDiets());
	}, [dispatch]);

	const [input, setInput] = useState({
		name: '',
		summary: '',
		img: '',
		healthScore: 0,
		steps: '',
		diets: [],
	});

	const [errors, setErrors] = useState({
		name: '',
		summary: '',
		img: '',
		healthScore: 0,
		steps: '',
		diets: [],
	});

	const validate = ({ name, summary, img, steps, diets } = input) => {
		const message = {};

		if (!name) {
			message.name = 'Name is required';
		}

		if (!summary) {
			message.summary = 'Summary is required';
		}

		if (img && !/\.(jpe?g|png|gif|bmp)$/i.test(img)) {
			message.img = 'this isn´t image allowed';
		}

		if (!steps) {
			message.steps = 'You should add at last one step';
		}

		if (!diets.length) {
			message.diets = 'You should add at last one diet';
		}

		return message;
	};

	const navigate = useNavigate();

	const verify =
		!errors?.name &&
		!errors?.summary &&
		!errors?.img &&
		!errors?.steps &&
		input?.diets.length;

	const handleOnSubmit = (e) => {
		e.preventDefault();
		if (verify) {
			dispatch(postRecipe(input));
			alert('recipe created successfully'); // eslint-disable-line no-alert
			navigate('/home', { replace: true });
		}
	};

	const handleInputChange = (event) => {
		setInput((prevState) => {
			const newState = {
				...prevState,
				[event.target.name]: event.target.value,
			};
			setErrors(validate(newState));
			return newState;
		});
	};

	const diets = useSelector(selectDiets);

	const handleOnSelect = (e) =>
		setInput({ ...input, diets: [...input.diets, e.target.value] });

	const handleOnDelete = (diet) =>
		setInput({ ...input, diets: input.diets.filter((d) => d !== diet) });

	const handleOnReset = () =>
		setInput({
			name: '',
			summary: '',
			img: '',
			healthScore: 0,
			steps: '',
			diets: [],
		});

	const reboot = !(
		input?.name ||
		input?.summary ||
		input?.img ||
		input?.healthScore ||
		input?.steps ||
		input?.diets.length
	);

	return (
		<address>
			<h1>CREATE YOUR RECIPE!</h1>
			<form onSubmit={handleOnSubmit}>
				<div>
					<div>
						<label htmlFor='name'>
							Name
							<input
								id='name'
								name='name'
								value={input.name}
								onChange={handleInputChange}
								className={errors?.name && 'danger'}
								placeholder={
									!input.name.length
										? 'Cauliflower, Brown Rice, and Vegetable Fried Rice'
										: ''
								}
							/>
						</label>
						{errors?.name && <span>{errors.name}</span>}
					</div>
					<div>
						<label htmlFor='summary'>
							Summary
							<textarea
								id='summary'
								name='summary'
								value={input.summary}
								onChange={handleInputChange}
								className={errors?.summary && 'danger'}
								placeholder={
									!input.summary.length
										? 'Cauliflower, Brown Rice, and Vegetable Fried Rice might be a good recipe to expand your side dish recipe box. Watching your figure? This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe has <b>192 calories</b>, <b>7g of protein</b>, and <b>6g of fat</b> per serving.'
										: ''
								}
							/>
						</label>
						{errors?.summary && <span>{errors.summary}</span>}
					</div>
					<div>
						<label htmlFor='img'>
							Image
							<input
								id='img'
								name='img'
								type='url'
								value={input.img}
								onChange={handleInputChange}
								className={errors?.img && 'danger'}
								placeholder={
									!input.img.length
										? 'https://spoonacular.com/recipeImages/716426-312x231.jpg'
										: ''
								}
							/>
						</label>
						{errors?.img && <span>{errors.img}</span>}
					</div>
					<div>
						<label htmlFor='steps'>
							Steps
							<textarea
								id='steps'
								name='steps'
								value={input.steps}
								onChange={handleInputChange}
								className={errors?.steps && 'danger'}
								placeholder={
									!input.steps.length
										? 'Remove the cauliflowers tough stem and reserve for another use. Using a food processor, pulse cauliflower florets until they resemble rice or couscous. You should end up with around four cups of "cauliflower rice."'
										: ''
								}
							/>
						</label>
						{errors?.steps && <span>{errors.steps}</span>}
					</div>
					<div>
						<label htmlFor='healthScore'>
							Health Score:
							<input
								min='0'
								max='100'
								type='number'
								id='healthScore'
								name='healthScore'
								value={input.healthScore}
								onChange={handleInputChange}
							/>
						</label>
					</div>
					<div>
						<label htmlFor='diets'>
							Diets:
							<select onChange={handleOnSelect}>
								{diets?.map(({ name }, index) => (
									<option
										key={index}
										value={name}
									>
										{name}
									</option>
								))}
							</select>
							<ul>
								{input.diets?.map((d) => (
									<li key={d}>
										<div>
											<p>{d}</p>
											<button
												type='button'
												onClick={() => handleOnDelete(d)}
											>
												✘
											</button>
										</div>
									</li>
								))}
							</ul>
						</label>
						{!input?.diets.length && <span>{errors.diets}</span>}
					</div>
					<input
						type='reset'
						value='Reset'
						disabled={reboot}
						onClick={handleOnReset}
					/>
					<button
						disabled={!verify}
						type='submit'
					>
						Create
					</button>
				</div>
			</form>
		</address>
	);
}

export default NewDish;
