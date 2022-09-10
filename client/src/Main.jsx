import { useRoutes } from 'react-router-dom';
import Home from './components/Home';
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
			element: [<Nav />, <Home />],
		},
	]);
	return App;
}

export default Main;
