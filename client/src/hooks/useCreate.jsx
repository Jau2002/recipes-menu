import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllDiets, postRecipe } from '../actions';
import { selectDiets } from '../constants';

function useCreate() {
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

	const validate = ({ name, summary, img, steps, diets } = input) => {
		const message = {};

		if (!name) {
			message.name = 'Name is required';
		} else if (name.length > 100) {
			message.name = 'the name is too long';
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

	const [errors, setErrors] = useState({
		name: '',
		summary: '',
		img: '',
		healthScore: 0,
		steps: '',
		diets: [],
	});

	const verify =
		!errors?.name &&
		!errors?.summary &&
		!errors?.img &&
		!errors?.steps &&
		input?.diets.length;

	const navigate = useNavigate();

	const handleOnSubmit = (event) => {
		event.preventDefault();
		try {
			if (verify) {
				dispatch(postRecipe(input));
				alert('recipe created successfully'); // eslint-disable-line no-alert
				navigate('/home');
			}
		} catch (err) {
			alert('not found');
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

	const handleOnSelect = (event) =>
		setInput({ ...input, diets: [...input.diets, event.target.value] });

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

	const diets = useSelector(selectDiets);

	return {
		reboot,
		handleOnReset,
		handleOnDelete,
		handleOnSelect,
		handleInputChange,
		handleOnSubmit,
		verify,
		errors,
		input,
		diets,
	};
}

export default useCreate;
