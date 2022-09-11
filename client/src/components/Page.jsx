function Page({ allShowOnPage, dishes, handleOnClick, isActive }) {
	const numPages = [];

	for (let i = 1; i <= Math.ceil(dishes / allShowOnPage); i++) {
		numPages.push(i);
	}

	return (
		<footer>
			{numPages?.map((num) => (
				<button
					key={num}
					type='button'
					className={isActive === num ? 'active' : ''}
					onClick={() => handleOnClick(num)}
				>
					{num}
				</button>
			))}
		</footer>
	);
}

export default Page;
