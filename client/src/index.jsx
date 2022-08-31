import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Main from './Main';
import './styles/index.css';

const root = createRoot(document.getElementById('root'));
root.render(
	<StrictMode>
			<Main />
	</StrictMode>,
);
