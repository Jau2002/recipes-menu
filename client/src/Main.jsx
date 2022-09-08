import { useRoutes } from 'react-router-dom';
import Dishes from './components/Dishes';
import Landing from './components/Landing';
import Nav from './components/Nav';
import './styles/Main.css';

function Main() {
	const App = useRoutes([
		{
			path: '/',
			element: <Landing />,
		},
		{
			path: '/home',
			element: [<Nav />, <Dishes />],
		},
	]);
	return App;
}

export default Main;
