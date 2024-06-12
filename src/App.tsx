import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/NotFound';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<HomePage />} />
			</Route>
			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	);
}

export default App;
