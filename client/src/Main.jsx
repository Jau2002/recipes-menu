import { useRoutes } from 'react-router-dom';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import './styles/Main.css';

function Main() {
	const App = useRoutes([
		{
			path: '/',
			element: <Landing />,
		},
		{
			path: '/home',
			element: <Navbar />,
		},
	]);
	return App;
}

export default Main;
