import preLoader from '../../public/preloader.gif';
import '../styles/modules/Loader.css';

function Loader() {
	return (
		<img
			src={preLoader}
			alt='preLoader'
			width='60'
			height='550'
			className='loader'
		/>
	);
}

export default Loader;
