import useMemory from '../hooks/useMemory';
import '../styles/modules/Page.css';

function Page({ handleOnClick }) {
	const { isActive, allShowOnPage, dishes } = useMemory();

	const numPages = [];

	for (let i = 1; i <= Math.ceil(dishes.length / allShowOnPage); i++) {
		numPages.push(i);
	}

	return (
		<footer className='container-page'>
			{numPages?.map((num) => (
				<button
					key={num}
					type='button'
					className={isActive === num ? 'active' : 'no-active'}
					onClick={() => handleOnClick(num)}
				>
					{num}
				</button>
			))}
		</footer>
	);
}

export default Page;
