import { Outlet } from 'react-router-dom';

export default function Layout() {
	return (
		<div className="flex flex-col h-screen  mr-[10%] ml-[10%] ">
			<main className="min-w-full flex-grow ">
				<Outlet />
			</main>
		</div>
	);
}
