import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Main from './Main';
import store from './redux/store';
import './styles/index.css';

const root = createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<StrictMode>
			<BrowserRouter>
				<Main />
			</BrowserRouter>
		</StrictMode>
	</Provider>
);
